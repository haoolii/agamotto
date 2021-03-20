import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CaptchaController } from './captcha/captcha.controller';
import { ApiUtilsModule } from '@agto/api-utils';
@Module({
  imports: [ApiUtilsModule],
  controllers: [AppController, CaptchaController],
  providers: [AppService],
})
export class AppModule {}
