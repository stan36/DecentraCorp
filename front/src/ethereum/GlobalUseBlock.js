import web3 from '../utils/web3';
import GlobalUseBlockGenerator from '../contracts/GlobalUseBlockGenerator.json';


const _GlobalUseBlocks = new web3.eth.Contract(
	GlobalUseBlockGenerator.abi,
	'0xf8bf6b0627162e963b480d8636196983aadc6a44'
);



export default _GlobalUseBlocks;
// export default contractInstance;
