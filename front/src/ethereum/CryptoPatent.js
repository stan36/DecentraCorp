import web3 from '../utils/web3';
import CryptoPatent from '../contracts/CryptoPatentBlockchain.json';


const _CryptoPatentBlockchain = new web3.eth.Contract(
	CryptoPatent.abi,
	'0x4b471ce5fe4a70b9339ace2533d4a044f6551814'
);

export default _CryptoPatentBlockchain;
// export default contractInstance;
