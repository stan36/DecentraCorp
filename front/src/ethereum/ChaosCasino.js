import web3 from '../utils/web3';
import ChaosCasino from '../contracts/ChaosCasino.json';

const _ChaosCasino = new web3.eth.Contract(
	ChaosCasino.abi,
	'0x6e0245fef58e0b79ce0b16771d8970948c187524'
);


export default _ChaosCasino;
// export default contractInstance;
