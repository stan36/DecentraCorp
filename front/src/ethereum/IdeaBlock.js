import web3 from '../utils/web3';
import IdeaBlockGenerator from '../contracts/IdeaBlockGenerator.json';

const _IdeaBlocks = new web3.eth.Contract(
	IdeaBlockGenerator.abi,
	'0xbdcfae0228a6789bc4f22f66bfb7c9546b358434'
);




export default _IdeaBlocks;
// export default contractInstance;
