const Block = require('./Block')

class Blockchain{
    constructor(){
        this.chain = [this.startGenesisBlock()]
        this.difficulty = 2;
        this.nodes = []
    }
    startGenesisBlock(){
        return new Block("Initial Block in the Chain");
    }
    getLatestBlock(){
        return this.chain[this.chain.length - 1]
    }
    addNewBlock(newBlock){
        newBlock.precedingHash = this.getLatestBlock().hash;
        newBlock.index = this.getLatestBlock().index + 1
        newBlock.proofOfWork(this.difficulty);
        this.chain.push(newBlock);
    }
    checkChainValidity(chain) {
        for (let i = 1; i < chain.length; i++) {
            const currentBlock = chain[i];
            const precedingBlock = chain[i - 1];

            if (currentBlock.hash !== currentBlock.computeHash()) return false;
            if (currentBlock.precedingHash !== precedingBlock.hash) return false;
        }
        return true;
    }

    addNewNode(node){
        this.nodes.push(node)
    }
}

module.exports = Blockchain