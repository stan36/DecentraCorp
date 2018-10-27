
var IdeaBlockGen = artifacts.require("./CryptoPatent/IdeaBlockGenerator.sol");
var RepBlockGen = artifacts.require("./CryptoPatent/ReplicationBlockGenerator.sol");
var UseBlockGen = artifacts.require("./CryptoPatent/GlobalUseBlockGenerator.sol");


module.exports = (deployer) => {
  deployer.deploy(IdeaBlockGen)
  deployer.deploy(RepBlockGen)
  deployer.deploy(UseBlockGen)
};
