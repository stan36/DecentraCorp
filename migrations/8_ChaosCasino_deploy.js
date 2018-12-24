var ChaosCoin = artifacts.require("./ChaosCasino/ChaosCoin.sol");
var ChaosCasino = artifacts.require("./ChaosCasino/ChaosCasino.sol");
var DCPoA = artifacts.require("./CryptoPatent/DecentraCorpPoA.sol");
var RepBlockGen = artifacts.require("./CryptoPatent/ReplicationBlockGenerator.sol");

module.exports = (deployer) => {
  deployer.deploy(ChaosCoin).then(function() {
    return deployer.deploy(ChaosCasino, ChaosCoin.address, DCPoA.address, RepBlockGen.address)
  });


};
