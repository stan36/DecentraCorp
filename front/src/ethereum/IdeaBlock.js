import web3 from '../utils/web3';
import IdeaBlockGenerator from '../contracts/IdeaBlockGenerator.json';

const _IdeaBlocks = new web3.eth.Contract(
	IdeaBlockGenerator.abi,
	'0xb3d009f24bd83ed3b2bbea128536c8977eaad3a7'
);




export default _IdeaBlocks;
// export default contractInstance;
