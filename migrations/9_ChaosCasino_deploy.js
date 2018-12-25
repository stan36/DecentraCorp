
var ChaosCoin = artifacts.require("./ChaosCasino/ChaosCoin.sol");
var ChaosCasino = artifacts.require("./ChaosCasino/ChaosCasino.sol");
var DCPoA = artifacts.require("./CryptoPatent/DecentraCorpPoA.sol");
var RepBlockGen = artifacts.require("./CryptoPatent/CryptoPatentBlockGenerator.sol");



module.exports = (deployer) => {
  deployer.deploy(ChaosCasino, RepBlockGen.address, DCPoA.address, ChaosCoin.address)
};
