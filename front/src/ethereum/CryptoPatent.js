import web3 from '../utils/web3';
import CryptoPatent from '../contracts/CryptoPatentBlockchain.json';


const _CryptoPatentBlockchain = new web3.eth.Contract(
	CryptoPatent.abi,
	'0x81f134b8f9546e7e0fa19ce5c0b21de034f8b918'
);

export default _CryptoPatentBlockchain;
// export default contractInstance;
