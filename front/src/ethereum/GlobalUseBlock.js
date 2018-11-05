import web3 from '../utils/web3';
import GlobalUseBlockGenerator from '../contracts/GlobalUseBlockGenerator.json';


const _GlobalUseBlocks = new web3.eth.Contract(
	GlobalUseBlockGenerator.abi,
	'0x232aa4edd5c2de7946d15dad5d3fbb8d7fc9a7b9'
);



export default _GlobalUseBlocks;
// export default contractInstance;
