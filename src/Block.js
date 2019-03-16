/* @flow */
const SHA256 = require('crypto-js/sha256');

class Block {
  // property types
  index: number;
  timestamp: string;
  data: string;
  previousHash: string;
  hash: string;
  nonce: number;

  constructor(index: number, timestamp: string, data: string, previousHash: ?string) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;

    if(previousHash) {
      this.previousHash = previousHash;
    }

    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash(): string {
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
  }

  mineBlock(difficulty: number) {
    while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
      this.nonce++;
      this.hash = this.calculateHash();
    }

    console.log("Block Mined: " + this.hash);
  }
}

module.exports = Block;
