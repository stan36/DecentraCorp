import web3 from '../utils/web3';
import ReplicationBlockGenerator from '../contracts/ReplicationBlockGenerator.json';

export const _ReplicationBlocks = new web3.eth.Contract(
	ReplicationBlockGenerator.abi,
	'0x0de0c089ec7a927493084e5bc9d875cb20b24b28'
);


export default _ReplicationBlocks;
// export default contractInstance;
