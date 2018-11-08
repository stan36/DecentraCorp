import web3 from '../utils/web3';
import ReplicationBlockGenerator from '../contracts/ReplicationBlockGenerator.json';

export const _ReplicationBlocks = new web3.eth.Contract(
	ReplicationBlockGenerator.abi,
	'0xea5d10a5ca83d6bf9c341cc053439cd000570bb0'
);


export default _ReplicationBlocks;
// export default contractInstance;
