import web3 from '../utils/web3';
import ReplicationBlockGenerator from '../contracts/ReplicationBlockGenerator.json';

export const _ReplicationBlocks = new web3.eth.Contract(
	ReplicationBlockGenerator.abi,
	'0x4f3667da2cd5e84bb58d674097b6be66fe518192'
);


export default _ReplicationBlocks;
// export default contractInstance;
