import web3 from '../utils/web3';
import ChaosCoin from '../contracts/ChaosCoin.json';


const _ChaosCoin = new web3.eth.Contract(
	ChaosCoin.abi,
	'0x088d5d43ac64ce7cb3efb8301af9c2cdaf89338d'
);

export default _ChaosCoin;
