var DCPoA = artifacts.require("./CryptoPatent/DecentraCorpPoA.sol");
var IdeaCoin = artifacts.require("./CryptoPatent/IdeaCoin.sol");
var BlockGen = artifacts.require("./CryptoPatent/CryptoPatentBlockGenerator.sol");
var PoPT = artifacts.require("./DC_Depot/ProofOfPurchaseToken.sol");
var ChaosCoin = artifacts.require("./ChaosCasino/ChaosCoin.sol");



module.exports = (deployer) => {
  deployer.deploy(DCPoA, IdeaCoin.address, BlockGen.address, ChaosCoin.address, PoPT.address)
};
