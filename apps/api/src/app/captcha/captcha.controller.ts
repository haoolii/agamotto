import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { XlsxService } from '@agto/api-utils';

@ApiTags('captcha')
@Controller('captcha')
export class CaptchaController {

  constructor(private xlsxSvc: XlsxService) {    }

  @Get()
  findAll(): string {
    return '123'
  }

  @Post('file')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @Body() body: any,
    @UploadedFile() file,
  ) {
    const transactions = this.xlsxSvc.toDomain(this.xlsxSvc.parse(file.buffer), '2021/03/21');
    return {
      transactions
    }
  }
}
