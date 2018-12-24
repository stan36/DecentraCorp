import web3 from '../utils/web3';
import GlobalUseBlockGenerator from '../contracts/GlobalUseBlockGenerator.json';


const _GlobalUseBlocks = new web3.eth.Contract(
	GlobalUseBlockGenerator.abi,
	GlobalUseBlockGenerator.networks[3].address
);



export default _GlobalUseBlocks;
// export default contractInstance;
