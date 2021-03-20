import { Injectable } from '@nestjs/common';
import { StockBrokerTransaction } from '@agamotto/api-interfaces';
import * as XLSX from 'xlsx';

@Injectable()
export class XlsxService {

  parse(buffer: Buffer): Array<any> {
    const workbook = XLSX.read(buffer, { type: 'buffer', codepage: 950});
    const obj = XLSX.utils.sheet_to_json(workbook.Sheets.Sheet1, { header: 'A', raw: true });
    return obj;
  }

  toDomain(data: Array<any>, transactionDate?: string): StockBrokerTransaction[] {
    let total = data.length;
    let curr = 0;
    let stockCode = '';
    let transactions: Array<StockBrokerTransaction> = [];
    while(curr <= total) {

      // 取出stockCode
      if (curr === 1) {
        stockCode = data[curr]['B'];
      }

      if (curr !== 0 && curr !== 1 && curr !== 2 && data[curr]) {
        if (data[curr]['A']) {
          transactions.push({
            index: data[curr]['A'],
            brokerCode: data[curr]['B'].slice(0, 4),
            broker: data[curr]['B'],
            price: data[curr]['C'],
            buy: data[curr]['D'],
            sell: data[curr]['E'],
            stockCode,
            transactionDate
          })
        }
        if (data[curr]['G']) {
          transactions.push({
            index: data[curr]['G'],
            brokerCode: data[curr]['H'].slice(0, 4),
            broker: data[curr]['H'],
            price: data[curr]['I'],
            buy: data[curr]['J'],
            sell: data[curr]['K'],
            stockCode,
            transactionDate
          })
        }
      }
      curr++;
    }
    return transactions;
  }
}
