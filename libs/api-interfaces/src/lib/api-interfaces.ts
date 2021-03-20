export interface Message {
  message: string;
}

export interface StockBrokerTransaction {
  index: number;
  brokerCode: string;
  broker: string;
  sell: number;
  buy: number;
  price: number;
  stockCode: string;
  transactionDate?: string;
}
