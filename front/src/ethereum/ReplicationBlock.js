import web3 from '../utils/web3';
import ReplicationBlockGenerator from '../contracts/ReplicationBlockGenerator.json';

export const _ReplicationBlocks = new web3.eth.Contract(
	ReplicationBlockGenerator.abi,
	'0x2e7c1fe841bc4571d6d35a311b12d918593b9894'
);


export default _ReplicationBlocks;
// export default contractInstance;
