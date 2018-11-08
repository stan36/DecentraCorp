import web3 from '../utils/web3';
import CryptoPatent from '../contracts/CryptoPatentBlockchain.json';


const _CryptoPatentBlockchain = new web3.eth.Contract(
	CryptoPatent.abi,
	'0x192b3dc77bbc8fc956a1adca663b6b1e62859f13'
);

export default _CryptoPatentBlockchain;
// export default contractInstance;
