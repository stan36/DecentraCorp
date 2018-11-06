import web3 from '../utils/web3';
import ChaosCasino from '../contracts/ChaosCasino.json';

const _ChaosCasino = new web3.eth.Contract(
	ChaosCasino.abi,
	'0x1fae48f95b9783f2a448aa69b61aaeddee3e387f'
);


export default _ChaosCasino;
// export default contractInstance;
