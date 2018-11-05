import web3 from '../utils/web3';
import ReplicationBlockGenerator from '../contracts/ReplicationBlockGenerator.json';

export const _ReplicationBlocks = new web3.eth.Contract(
	ReplicationBlockGenerator.abi,
	'0x4370ecaadbd11ec93686b1debad988a49df08d7a'
);


export default _ReplicationBlocks;
// export default contractInstance;
