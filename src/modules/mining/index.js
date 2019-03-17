/* @flow */
const Blockchain = require('../../Blockchain');
const Block = require('../../Block');
const { getTimestamp } = require('../../utils/timestamp');
const config = require('../../config.json');

/**
 * Mining block and add to Blockchain
 */
async function mineBlock(): Promise<Block> {
  const { difficulty } = config;

  // TODO: Implement something needs computing resources

  // Add new block to chain
  const lastBlock = Blockchain.getLastBlock();
  const newBlock = new Block({
    id: lastBlock.id + 1,
    timestamp: getTimestamp(),
    previousHash: lastBlock.hash,
    transactions: [], // TODO: Put Transactions
    data: ''
  });

  Blockchain.addBlock(newBlock);
  return newBlock;
}

module.exports = {
  mineBlock
};