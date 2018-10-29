var UseBlockGen = artifacts.require("./CryptoPatent/GlobalUseBlockGenerator.sol");

module.exports = (deployer) => {
  deployer.deploy(UseBlockGen)
};
