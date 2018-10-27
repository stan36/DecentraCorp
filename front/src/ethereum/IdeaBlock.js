import web3 from '../utils/web3';
import IdeaBlockGenerator from '../contracts/IdeaBlockGenerator.json';

const _IdeaBlocks = new web3.eth.Contract(
	IdeaBlockGenerator.abi,
	'0x0de0c089ec7a927493084e5bc9d875cb20b24b28'
);




export default _IdeaBlocks;
// export default contractInstance;
