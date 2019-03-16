/* @flow */
const Blockchain = require('./Blockchain');
const Block = require('./Block');

const testChain = new Blockchain();

console.log('Mining Block...');
testChain.addBlock(new Block(1, new Date().getTime().toString(), "First Block"));

console.log('Mining Block...');
testChain.addBlock(new Block(2, new Date().getTime().toString(), "Second Block"));

console.log(JSON.stringify(testChain, null, 4));
console.log('Is blockchain valid: ' + testChain.checkValid().toString());
