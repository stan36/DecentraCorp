import web3 from '../utils/web3';
import ChaosCoin from '../contracts/ChaosCoin.json';


const _ChaosCoin = new web3.eth.Contract(
	ChaosCoin.abi,
	'0x0de0c089ec7a927493084e5bc9d875cb20b24b28'
);

export default _ChaosCoin;
