/* @flow */
interface TransactionParameters {
  id: string; // ID of Transaction
  sendAddress: string;  // Sender Address
  receiveAddress: string; // Receiver Address
  amount: number; // Amount
  fee: number;  // Fee
  data?: string; // Custom Data
}

class Transaction {
  // property types
  id: string;
  sendAddress: string;
  receiveAddress: string;
  amount: number;
  fee: number;
  data: string;

  constructor(param: TransactionParameters) {
    this.id = param.id;
    this.sendAddress = param.sendAddress;
    this.receiveAddress = param.receiveAddress;
    this.amount = param.amount;
    this.fee = param.fee;
    this.data = param.data || '';
  }
}

module.exports = Transaction;
