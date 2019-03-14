import web3 from '../utils/web3';
import ChaosCoin from '../contracts/ChaosCoin.json';

//const net = web3.currentProvider.publicConfigStore._state.networkVersion;

const _ChaosCoin = new web3.eth.Contract(
	ChaosCoin.abi,
	ChaosCoin.networks[3636].address
);

export default _ChaosCoin;
