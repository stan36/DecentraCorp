var RepBlockGen = artifacts.require("./CryptoPatent/ReplicationBlockGenerator.sol");

module.exports = (deployer) => {
  deployer.deploy(RepBlockGen)
};
