import web3 from './web3';
import ChaosCasino from '../contracts/ChaosCasino.json';

const _ChaosCasino = new web3.eth.Contract(
	ChaosCasino.abi,
	'0x0de0c089ec7a927493084e5bc9d875cb20b24b28'
);


export default _ChaosCasino;
// export default contractInstance;
