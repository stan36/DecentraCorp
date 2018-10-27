import web3 from '../utils/web3';
import GlobalUseBlockGenerator from '../contracts/GlobalUseBlockGenerator.json';


const _GlobalUseBlocks = new web3.eth.Contract(
	GlobalUseBlockGenerator.abi,
	'0x0de0c089ec7a927493084e5bc9d875cb20b24b28'
);



export default _GlobalUseBlocks;
// export default contractInstance;
