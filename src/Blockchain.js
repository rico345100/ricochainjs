/* @flow */
const Block = require('./Block');

interface BlockchainParameters {
  initialBlocks?: Block[];
}

class Blockchain {
  // property types
  static blocks: Block[];

  static getLastBlock(): Block {
    return Blockchain.blocks[Blockchain.blocks.length - 1];
  }

  static addBlock(newBlock: Block) {
    const lastBlock = Blockchain.getLastBlock();

    if(lastBlock) {
      newBlock.previousHash = lastBlock.hash;
    }
    
    Blockchain.blocks.push(newBlock);
  }

  static checkValid(): boolean {
    for(let i = 0; i < Blockchain.blocks.length; i++) {
      const currentBlock = Blockchain.blocks[i];
      const previousBlock = Blockchain.blocks[i - 1];

      if(currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if(currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }

    return true;
  }
}

Blockchain.blocks = [];

module.exports = Blockchain;