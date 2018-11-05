import web3 from '../utils/web3';
import GlobalUseBlockGenerator from '../contracts/GlobalUseBlockGenerator.json';


const _GlobalUseBlocks = new web3.eth.Contract(
	GlobalUseBlockGenerator.abi,
	'0x6769995502d71596ed27f0567b5e104ee2aa4829'
);



export default _GlobalUseBlocks;
// export default contractInstance;
