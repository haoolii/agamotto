import { Module } from '@nestjs/common';
import { XlsxService } from './xlsx/xlsx.service';
@Module({
  controllers: [],
  providers: [XlsxService],
  exports: [XlsxService],
})
export class ApiUtilsModule {}
