import web3 from '../utils/web3';
import IdeaBlockGenerator from '../contracts/IdeaBlockGenerator.json';

const _IdeaBlocks = new web3.eth.Contract(
	IdeaBlockGenerator.abi,
	'0x302d511f0f70b383ee670135f5463e9537b5d18a'
);




export default _IdeaBlocks;
// export default contractInstance;
