var IdeaCoin = artifacts.require("./CryptoPatent/IdeaCoin.sol");
var DCPoA = artifacts.require("./CryptoPatent/DecentraCorpPoA.sol");
var IdeaBlockGen = artifacts.require("./CryptoPatent/IdeaBlockGenerator.sol");
var RepBlockGen = artifacts.require("./CryptoPatent/ReplicationBlockGenerator.sol");
var UseBlockGen = artifacts.require("./CryptoPatent/GlobalUseBlockGenerator.sol");
var CryptoPatent = artifacts.require("./CryptoPatent/CryptoPatentBlockchain.sol");


module.exports = (deployer) => {
  deployer.deploy(CryptoPatent, DCPoA.address, IdeaCoin.address, IdeaBlockGen.address, RepBlockGen.address, UseBlockGen.address)
};
