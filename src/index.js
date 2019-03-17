/* @flow */
const Blockchain = require('./Blockchain');
const Block = require('./Block');
const { getTimestamp } = require('./utils/timestamp');

// Create Genesis Block
const genesisBlock = new Block({
  id: 0,
  timestamp: getTimestamp(),
  previousHash: '',
  transactions: [],
  data: 'Genesis Block'
});

Blockchain.addBlock(genesisBlock);

const { mineBlock } = require('./modules/mining');

(async function main() {
  try {
    const newBlock = await mineBlock();
    console.log("Block Mined: " + newBlock.hash);
  } catch (err){ 
    console.log(`Error while mining: ${err.message}`);
    console.log(err.stack);
  }  

  console.log(JSON.stringify(Blockchain.blocks, null, 4));
  // console.log('Is blockchain valid: ' + testChain.checkValid().toString());
})();