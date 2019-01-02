import web3 from '../utils/web3';
import BlockGenerator from '../contracts/CryptoPatentBlockGenerator.json';

const _Blocks = new web3.eth.Contract(
	BlockGenerator.abi,
	BlockGenerator.networks[5777].address
);




export default _Blocks;
// export default contractInstance;
