import web3 from '../utils/web3';
import CryptoPatent from '../contracts/CryptoPatentBlockchain.json';


const _CryptoPatentBlockchain = new web3.eth.Contract(
	CryptoPatent.abi,
	'0x4ffb91f48c2d583c0e164254f20e9324f1e51938'
);

export default _CryptoPatentBlockchain;
// export default contractInstance;
