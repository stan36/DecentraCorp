import web3 from '../utils/web3';
import ReplicationBlockGenerator from '../contracts/ReplicationBlockGenerator.json';

export const _ReplicationBlocks = new web3.eth.Contract(
	ReplicationBlockGenerator.abi,
	'0x3c7b9958d14834cc8e9a93dae5217da86f8162bb'
);


export default _ReplicationBlocks;
// export default contractInstance;
