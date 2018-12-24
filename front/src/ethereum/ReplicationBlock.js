import web3 from '../utils/web3';
import ReplicationBlockGenerator from '../contracts/ReplicationBlockGenerator.json';

export const _ReplicationBlocks = new web3.eth.Contract(
	ReplicationBlockGenerator.abi,
	ReplicationBlockGenerator.networks[3].address
);


export default _ReplicationBlocks;
// export default contractInstance;
