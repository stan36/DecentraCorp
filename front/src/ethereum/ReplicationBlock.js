import web3 from '../utils/web3';
import ReplicationBlockGenerator from '../contracts/ReplicationBlockGenerator.json';

export const _ReplicationBlocks = new web3.eth.Contract(
	ReplicationBlockGenerator.abi,
	'0x75bb26f6adb0e99cc14281b4820d19961d9171d7'
);


export default _ReplicationBlocks;
// export default contractInstance;
