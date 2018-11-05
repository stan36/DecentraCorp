import web3 from '../utils/web3';
import ChaosCoin from '../contracts/ChaosCoin.json';


const _ChaosCoin = new web3.eth.Contract(
	ChaosCoin.abi,
	'0xd1cbd077922d9435889704185270a4dbbd04d830'
);

export default _ChaosCoin;
