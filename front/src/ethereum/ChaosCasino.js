import web3 from '../utils/web3';
import ChaosCasino from '../contracts/ChaosCasino.json';

const _ChaosCasino = new web3.eth.Contract(
	ChaosCasino.abi,
	'0x9aa05a4ae8ecb6a9f031dae12d882cb05278bbd0'
);


export default _ChaosCasino;
// export default contractInstance;
