import web3 from '../utils/web3';
import ChaosCoin from '../contracts/ChaosCoin.json';


const _ChaosCoin = new web3.eth.Contract(
	ChaosCoin.abi,
	'0xdc5671a7097676941348089c5c8c36b4f1b232ce'
);

export default _ChaosCoin;
