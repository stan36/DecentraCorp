var IdeaCoin = artifacts.require("./CryptoPatent/IdeaCoin.sol");
var DCPoA = artifacts.require("./CryptoPatent/DecentraCorpPoA.sol");
var BlockGen = artifacts.require("./CryptoPatent/CryptoPatentBlockGenerator.sol");
var CryptoPatent = artifacts.require("./CryptoPatent/CryptoPatentBlockchain.sol");


module.exports = (deployer) => {
  deployer.deploy(CryptoPatent, DCPoA.address, IdeaCoin.address, BlockGen.address)
};
