import web3 from '../utils/web3';
import ChaosCasino from '../contracts/ChaosCasino.json';

const _ChaosCasino = new web3.eth.Contract(
	ChaosCasino.abi,
	'0x0dee632516ddcd21af8eed5d695824aca318a1b7'
);


export default _ChaosCasino;
// export default contractInstance;
