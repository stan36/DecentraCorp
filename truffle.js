
 require("babel-register")({
   ignore: /node_modules\/(?!zeppelin-solidity)/
 });
 require("babel-polyfill");
 var HDWalletProvider = require("truffle-hdwallet-provider");

 var infura_apikey = "lHjU6q5aNKEfjBA0FQJr";
 var mnemonic = "multiply shock swear there hero possible bomb morning million stairs neither client";
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
