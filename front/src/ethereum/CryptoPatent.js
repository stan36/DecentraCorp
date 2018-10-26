import web3 from './web3';
import CryptoPatent from '../contracts/CryptoPatentBlockchain.json';


const _CryptoPatentBlockchain = new web3.eth.Contract(
	CryptoPatent.abi,
	'0x2b1f18df965f7e3db7f2726515bb4b55960b21ea'
);

export default _CryptoPatentBlockchain;
// export default contractInstance;
