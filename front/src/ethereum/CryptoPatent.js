import web3 from '../utils/web3';
import CryptoPatent from '../contracts/CryptoPatentBlockchain.json';

const net = web3.currentProvider.publicConfigStore._state.networkVersion;

const _CryptoPatentBlockchain = new web3.eth.Contract(
	CryptoPatent.abi,
	CryptoPatent.networks[net].address
);

export default _CryptoPatentBlockchain;
// export default contractInstance;


//const networkId = await web3.eth.net.getId()
//const deployedAddress = contractJSON.networks[networkId].address
//const contract = new web3.eth.Contract(contractJSON.abi, deployedAddress)
