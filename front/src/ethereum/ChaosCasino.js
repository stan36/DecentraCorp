import web3 from '../utils/web3';
import ChaosCasino from '../contracts/ChaosCasino.json';

const net = web3.currentProvider.publicConfigStore._state.networkVersion;

const _ChaosCasino = new web3.eth.Contract(
	ChaosCasino.abi,
	ChaosCasino.networks[net].address
);


export default _ChaosCasino;
// export default contractInstance;
