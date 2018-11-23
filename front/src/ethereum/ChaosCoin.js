import web3 from '../utils/web3';
import ChaosCoin from '../contracts/ChaosCoin.json';


const _ChaosCoin = new web3.eth.Contract(
	ChaosCoin.abi,
	'0x6e0245fef58e0b79ce0b16771d8970948c187524'
);

export default _ChaosCoin;
