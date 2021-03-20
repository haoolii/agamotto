import { FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { asyncScheduler, Subject } from 'rxjs';
import { observeOn, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'agto-captch-code-input',
  templateUrl: './captch-code-input.component.html',
  styleUrls: ['./captch-code-input.component.scss']
})
export class CaptchCodeInputComponent implements OnDestroy {
  @ViewChildren('input') inputs: QueryList<ElementRef>;
  private destory$ = new Subject();

  _value = '';
  @Input()
  set value(value: string) {
    this._value = value;
    this.codes.controls.forEach((control, index) => {
      control.reset(this._value.split('')[index], {
        emitEvent: false
      })
      control.markAsPristine();
      control.markAsUntouched();
    })
    this.checkFocus();
  }
  @Output() valueChange = new EventEmitter()

  _length = 0;
  @Input()
  set length(length: number) {
    this.codes.clear();
    for(let i = 0; i < length; i++) {
      const control = this.fb.control(null, Validators.required);
      this.listen(i, control);
      this.codes.push(control);
    }
    this._length = length;
  }
  get length(): number {
    return this._length;
  }

  form = this.fb.group({
    codes: this.fb.array([])
  });

  constructor(private fb: FormBuilder) { }

  ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
  }

  listen(index: number, control: FormControl): void {
    control
      .valueChanges
      .pipe(
        takeUntil(this.destory$),
        observeOn(asyncScheduler)
      )
      .subscribe((value: string) => this.onChange(index, value))
  }

  get codes() {
    return this.form.get('codes') as FormArray;
  }

  onChange(index, value): void {
    if (value && index < this.length - 1) {
      this.inputs.toArray()[index + 1].nativeElement.focus()
    }

    if (this.form.valid) {
      this.valueChange.emit((this.codes.value as Array<string>).join(''))
    }
  }

  checkFocus(): void {
    for(let i = 0; i < this.codes.controls.length; i++ ) {
      if (this.inputs) {
        if (this.codes.controls[i].invalid) {
          this.inputs.toArray()[i].nativeElement.focus()
          break;
        }
      }
    }
  }
}
