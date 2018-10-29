var IdeaBlockGen = artifacts.require("./CryptoPatent/IdeaBlockGenerator.sol");

module.exports = (deployer) => {
  deployer.deploy(IdeaBlockGen)
};
