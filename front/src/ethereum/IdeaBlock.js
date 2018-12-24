import web3 from '../utils/web3';
import IdeaBlockGenerator from '../contracts/IdeaBlockGenerator.json';

const _IdeaBlocks = new web3.eth.Contract(
	IdeaBlockGenerator.abi,
	IdeaBlockGenerator.networks[3].address
);




export default _IdeaBlocks;
// export default contractInstance;
