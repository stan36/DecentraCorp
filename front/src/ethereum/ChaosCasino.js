import web3 from '../utils/web3';
import ChaosCasino from '../contracts/ChaosCasino.json';

const _ChaosCasino = new web3.eth.Contract(
	ChaosCasino.abi,
	'0x5ef5df381edfaf7db512fea3ac76164fa75a764b'
);


export default _ChaosCasino;
// export default contractInstance;
