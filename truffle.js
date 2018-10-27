
 require("babel-register")({
   ignore: /node_modules\/(?!zeppelin-solidity)/
 });
 require("babel-polyfill");
 var HDWalletProvider = require("truffle-hdwallet-provider");

 var infura_apikey = "lHjU6q5aNKEfjBA0FQJr";
 var mnemonic = "skull woman enhance sauce omit post divide equal script audit drama common";
//test wallet mnemonic
 module.exports = {
   networks: {
    development: {
       host: "localhost",
       port: 7545,
       network_id: "*", // Match any network id
      
     },
   ropsten: {
     provider: function(){
       return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+ infura_apikey)
     },
     gas: 4712387,
     network_id: 3
   },
   solc: {
     optimizer: {
       enabled: true,
       runs: 200
       }
     }
   }
 };
