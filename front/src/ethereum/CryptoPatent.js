import web3 from '../utils/web3';
import CryptoPatent from '../contracts/CryptoPatentBlockchain.json';


const _CryptoPatentBlockchain = new web3.eth.Contract(
	CryptoPatent.abi,
	'0x9870693438b5539d044e49de7bde001025738332'
);

export default _CryptoPatentBlockchain;
// export default contractInstance;
