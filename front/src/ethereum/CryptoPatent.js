import web3 from '../utils/web3';
import CryptoPatent from '../contracts/CryptoPatentBlockchain.json';


const _CryptoPatentBlockchain = new web3.eth.Contract(
	CryptoPatent.abi,
	'0x61eaafa737a01577c8af52e90993b691da535996'
);

export default _CryptoPatentBlockchain;
// export default contractInstance;
