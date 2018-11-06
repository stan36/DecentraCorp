import web3 from '../utils/web3';
import GlobalUseBlockGenerator from '../contracts/GlobalUseBlockGenerator.json';


const _GlobalUseBlocks = new web3.eth.Contract(
	GlobalUseBlockGenerator.abi,
	'0x78d875c6821066b86aa948eb8e3c185dafbf4845'
);



export default _GlobalUseBlocks;
// export default contractInstance;
