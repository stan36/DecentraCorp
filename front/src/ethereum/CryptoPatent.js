import web3 from '../utils/web3';
import CryptoPatent from '../contracts/CryptoPatentBlockchain.json';


const _CryptoPatentBlockchain = new web3.eth.Contract(
	CryptoPatent.abi,
	'0x9ddf1e99a7d995bff62a14b02dbdb68ac84188fd'
);

export default _CryptoPatentBlockchain;
// export default contractInstance;
