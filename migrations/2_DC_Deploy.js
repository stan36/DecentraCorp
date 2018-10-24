
var IdeaCoin = artifacts.require("./CryptoPatent/IdeaCoin.sol");
var DCPoA = artifacts.require("./CryptoPatent/DecentraCorpPoA.sol");



module.exports = (deployer) => {
  deployer.deploy(IdeaCoin).then(function() {
    return deployer.deploy(DCPoA, IdeaCoin.address)
  });
};
