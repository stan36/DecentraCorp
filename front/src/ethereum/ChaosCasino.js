import web3 from '../utils/web3';
import ChaosCasino from '../contracts/ChaosCasino.json';

const _ChaosCasino = new web3.eth.Contract(
	ChaosCasino.abi,
	'0x695757ac1f3a8b9109c369832041d17a08abbc3b'
);


export default _ChaosCasino;
// export default contractInstance;
