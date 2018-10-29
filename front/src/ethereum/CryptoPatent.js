import web3 from '../utils/web3';
import CryptoPatent from '../contracts/CryptoPatentBlockchain.json';


const _CryptoPatentBlockchain = new web3.eth.Contract(
	CryptoPatent.abi,
	'0xef713df9dbfed0ade5de9505d6c1f7833ab1a28a'
);

export default _CryptoPatentBlockchain;
// export default contractInstance;
