import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomepageModule } from './pages/homepage/homepage.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MaterialModule } from '@agamotto/material';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, AppRoutingModule, MaterialModule, HomepageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
