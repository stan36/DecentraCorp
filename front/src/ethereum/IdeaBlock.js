import web3 from '../utils/web3';
import IdeaBlockGenerator from '../contracts/IdeaBlockGenerator.json';

const _IdeaBlocks = new web3.eth.Contract(
	IdeaBlockGenerator.abi,
	'0x53d0e90bfcf012e3ab11ecaa8d1c35a925f0c4d0'
);




export default _IdeaBlocks;
// export default contractInstance;
