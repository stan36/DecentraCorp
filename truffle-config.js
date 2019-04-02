/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() {
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>')
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

 module.exports = {
   networks: {
    DCPoA: {
       host: "localhost",
       port: 8545,
       network_id: '*', // Match any network id

     },
   ropsten: {
     provider: function(){
       return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+ infura_apikey)
     },

     network_id: 3
   },
   compilers: {
    solc: {
      version: '^0.4.24',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
 }
 };
