var IdeaCoin = artifacts.require("./CryptoPatent/IdeaCoin.sol");
var DCPoA = artifacts.require("./CryptoPatent/DecentraCorpPoA.sol");
var IdeaBlockGen = artifacts.require("./CryptoPatent/IdeaBlockGenerator.sol");
var RepBlockGen = artifacts.require("./CryptoPatent/ReplicationBlockGenerator.sol");
var UseBlockGen = artifacts.require("./CryptoPatent/GlobalUseBlockGenerator.sol");
var CryptoPatent = artifacts.require("./CryptoPatent/CryptoPatentBlockchain.sol");
var ChaosCoin = artifacts.require("./ChaosCasino/ChaosCoin.sol");
var ChaosCasino = artifacts.require("./ChaosCasino/ChaosCasino.sol");
var PoPT = artifacts.require("./DC_Depot/ProofOfPurchaseToken.sol");
var Depot = artifacts.require("./DC_Depot/DC_Depot.sol");



module.exports = (deployer) => {
  var  b, cp;
 deployer.then(function(){
   return CryptoPatent.deployed();
  }).then(function(instance) {
    cp = instance;
    return IdeaBlockGen.deployed();
  }).then(function(instance) {
    b = instance;
    return b.transferOwnership(CryptoPatent.address);
  }).then(function() {
    return RepBlockGen.deployed();
  }).then(function(instance) {
    b = instance;
    return b.transferOwnership(CryptoPatent.address);
  }).then(function() {
    return UseBlockGen.deployed();
  }).then(function(instance) {
    b = instance;
    return b.transferOwnership(CryptoPatent.address);
  }).then(function() {
    return IdeaCoin.deployed();
  }).then(function(instance) {
    b = instance;
    return b.transferOwnership(DCPoA.address);
  }).then(function() {
    return DCPoA.deployed();
  }).then(function(instance) {
    b = instance;
    return b.addApprovedContract(CryptoPatent.address);
  }).then(function(){
    return ChaosCoin.deployed();
  }).then(function(instance) {
    b = instance;
    return b.transferOwnership(ChaosCasino.address);
  }).then(function(){
    return PoPT.deployed();
  }).then(function(instance) {
    b = instance;
    return b.transferOwnership(Depot.address);
  }).then(function() {
    return DCPoA.deployed();
  }).then(function(instance) {
    b = instance;
    return b.addApprovedContract(Depot.address);
  })

};
