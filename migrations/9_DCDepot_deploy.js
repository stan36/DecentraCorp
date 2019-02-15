
var Depot = artifacts.require("./DC_Depot/DC_Depot.sol");
var DCPoA = artifacts.require("./DecentraCorp/DecentraCorpPoA.sol");
var IdeaCoin = artifacts.require("./CryptoPatent/IdeaCoin.sol");
var PoPT = artifacts.require("./DC_Depot/ProofOfPurchaseToken.sol");




module.exports = (deployer) => {
  deployer.deploy(Depot, PoPT.address, IdeaCoin.address, DCPoA.address)
};
