import web3 from '../utils/web3';
import IdeaBlockGenerator from '../contracts/IdeaBlockGenerator.json';

const _IdeaBlocks = new web3.eth.Contract(
	IdeaBlockGenerator.abi,
	'0x1b3daf3c44f41da97ecc01523b72b555485e4482'
);




export default _IdeaBlocks;
// export default contractInstance;
