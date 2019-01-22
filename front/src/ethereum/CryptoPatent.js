import web3 from '../utils/web3';
import CryptoPatent from '../contracts/CryptoPatentBlockchain.json';



const _CryptoPatentBlockchain = new web3.eth.Contract(
	CryptoPatent.abi,
	CryptoPatent.networks[3636].address
);

export default _CryptoPatentBlockchain;
// export default contractInstance;


//const networkId = await web3.eth.net.getId()
//const deployedAddress = contractJSON.networks[networkId].address
//const contract = new web3.eth.Contract(contractJSON.abi, deployedAddress)
