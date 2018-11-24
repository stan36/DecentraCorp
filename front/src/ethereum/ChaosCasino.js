import web3 from '../utils/web3';
import ChaosCasino from '../contracts/ChaosCasino.json';

const _ChaosCasino = new web3.eth.Contract(
	ChaosCasino.abi,
	'0x6ee8b4850871c49886399f76ebfd598dd1b2ddfa'
);


export default _ChaosCasino;
// export default contractInstance;
