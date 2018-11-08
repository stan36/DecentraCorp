import web3 from '../utils/web3';
import IdeaBlockGenerator from '../contracts/IdeaBlockGenerator.json';

const _IdeaBlocks = new web3.eth.Contract(
	IdeaBlockGenerator.abi,
	'0x6b7b239c5107eac83fe1475ac5d140ee9a097a19'
);




export default _IdeaBlocks;
// export default contractInstance;
