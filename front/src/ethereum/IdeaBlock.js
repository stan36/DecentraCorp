import web3 from '../utils/web3';
import IdeaBlockGenerator from '../contracts/IdeaBlockGenerator.json';

const _IdeaBlocks = new web3.eth.Contract(
	IdeaBlockGenerator.abi,
	'0x857d2e4f575cc4adc60f1ab94c6c38e65f944c75'
);




export default _IdeaBlocks;
// export default contractInstance;
