import Web3 from "web3";

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    let web3;

  if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  	web3 = new Web3(window.web3.currentProvider);
    resolve(web3);
  } else {
  	const provider = new Web3.providers.HttpProvider(
  		'http://127.0.0.1:7545')

        const web3 = new Web3(provider);
        console.log("No web3 instance injected, using Local web3.");
        resolve(web3);
      }
    });


export default getWeb3;
