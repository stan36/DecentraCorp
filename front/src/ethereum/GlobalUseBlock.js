import web3 from '../utils/web3';
import GlobalUseBlockGenerator from '../contracts/GlobalUseBlockGenerator.json';


const _GlobalUseBlocks = new web3.eth.Contract(
	GlobalUseBlockGenerator.abi,
	'0xf6271d2619c95f1bd30fb7bec78faaf79af6f497'
);



export default _GlobalUseBlocks;
// export default contractInstance;
