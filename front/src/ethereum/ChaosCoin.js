import web3 from '../utils/web3';
import ChaosCoin from '../contracts/ChaosCoin.json';


const _ChaosCoin = new web3.eth.Contract(
	ChaosCoin.abi,
	'0xf786c54fb54cdb50bd4f0aca6ed55a0bf705b29e'
);

export default _ChaosCoin;
