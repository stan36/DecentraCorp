import web3 from '../utils/web3';
import GlobalUseBlockGenerator from '../contracts/GlobalUseBlockGenerator.json';


const _GlobalUseBlocks = new web3.eth.Contract(
	GlobalUseBlockGenerator.abi,
	'0xf33b05eaa5beb83e4507e139796b250b67f279c2'
);



export default _GlobalUseBlocks;
// export default contractInstance;
