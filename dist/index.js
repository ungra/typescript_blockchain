class Block {
    constructor(index, hash, prevHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.prevHash = prevHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "2020202020", "", "Hello", 12345);
let blockchain = [genesisBlock];
console.log(blockchain);
//# sourceMappingURL=index.js.map