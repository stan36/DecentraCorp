import web3 from '../utils/web3';
import ChaosCasino from '../contracts/ChaosCasino.json';

const _ChaosCasino = new web3.eth.Contract(
	ChaosCasino.abi,
	'0x87b4dc0243d171be8d88f8f9838ac2f34b608df2'
);


export default _ChaosCasino;
// export default contractInstance;
