"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, prevHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.prevHash = prevHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, prevHash, timestamp, data) => CryptoJS.SHA256(index + prevHash + timestamp + data).toString();
Block.validateStructure = (aBlock) => typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.prevHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";
const genesisBlock = new Block(0, "2020202020", "", "Hello", 12345);
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLastestBlock = () => blockchain[blockchain.length - 1];
const getNewTimestamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const prevBlock = getLastestBlock();
    const newIndex = prevBlock.index + 1;
    const newTimestamp = getNewTimestamp();
    const newHash = Block.calculateBlockHash(newIndex, prevBlock.hash, newTimestamp, data);
    const newBlock = new Block(newIndex, newHash, prevBlock.hash, data, newTimestamp);
    return newBlock;
};
const isBlockValid = (candidateBlock, prevBlock) => {
    if (!Block.validateStructure(candidateBlock)) {
        return false;
    }
    else if (prevBlock.index + 1 !== candidateBlock.index) {
        return false;
    }
    else if (prevBlock.hash !== candidateBlock.prevHash) {
        return false;
    }
};
//# sourceMappingURL=index.js.map