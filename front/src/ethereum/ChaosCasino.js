import web3 from '../utils/web3';
import ChaosCasino from '../contracts/ChaosCasino.json';

const _ChaosCasino = new web3.eth.Contract(
	ChaosCasino.abi,
	'0x79e6c695292c306fff8d86d172990748ae32377f'
);


export default _ChaosCasino;
// export default contractInstance;
