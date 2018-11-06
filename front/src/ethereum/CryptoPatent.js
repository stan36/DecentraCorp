import web3 from '../utils/web3';
import CryptoPatent from '../contracts/CryptoPatentBlockchain.json';


const _CryptoPatentBlockchain = new web3.eth.Contract(
	CryptoPatent.abi,
	'0x986544eb17f9804ab9b38a95198c3297241e3dc4'
);

export default _CryptoPatentBlockchain;
// export default contractInstance;
