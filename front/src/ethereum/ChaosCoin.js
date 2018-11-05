import web3 from '../utils/web3';
import ChaosCoin from '../contracts/ChaosCoin.json';


const _ChaosCoin = new web3.eth.Contract(
	ChaosCoin.abi,
	'0x881d5361bd4a2ec7ccf0dfaabcde7c9a4b1da95f'
);

export default _ChaosCoin;
