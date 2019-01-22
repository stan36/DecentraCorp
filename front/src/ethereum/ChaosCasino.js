import web3 from '../utils/web3';
import ChaosCasino from '../contracts/ChaosCasino.json';

const _ChaosCasino = new web3.eth.Contract(
	ChaosCasino.abi,
	ChaosCasino.networks[3636].address
);


export default _ChaosCasino;
// export default contractInstance;
