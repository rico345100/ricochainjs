/* @flow */
const SHA256 = require('crypto-js/sha256');
const Transaction = require('./Transaction');

interface BlockParameters {
  id: number;
  timestamp: string;
  previousHash?: string;
  transactions: Transaction[];
  data?: string;
}

class Block {
  // property types
  id: number;
  timestamp: string;
  hash: string;
  previousHash: ?string;
  transactions: Transaction[];
  data: string;
  
  constructor(param: BlockParameters) {
    this.id = param.id;
    this.timestamp = param.timestamp;

    if(param.previousHash) {
      this.previousHash = param.previousHash;
    } else {
      this.previousHash = null;
    }

    this.hash = this.calculateHash();
    this.data = param.data || '';
    this.transactions = param.transactions;
  }

  calculateHash(): string {
    return SHA256(this.id + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}

module.exports = Block;
