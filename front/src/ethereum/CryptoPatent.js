import web3 from '../utils/web3';
import CryptoPatent from '../contracts/CryptoPatentBlockchain.json';


const _CryptoPatentBlockchain = new web3.eth.Contract(
	CryptoPatent.abi,
	'0x49ed7be41ff6c1b2e85d27f4140b8e39af67cadf'
);

export default _CryptoPatentBlockchain;
// export default contractInstance;
