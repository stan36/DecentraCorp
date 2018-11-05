import web3 from '../utils/web3';
import ReplicationBlockGenerator from '../contracts/ReplicationBlockGenerator.json';

export const _ReplicationBlocks = new web3.eth.Contract(
	ReplicationBlockGenerator.abi,
	'0xec53f481c46ca8ed567e439763cc53eaf906db80'
);


export default _ReplicationBlocks;
// export default contractInstance;
