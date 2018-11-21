import web3 from '../utils/web3';
import ChaosCoin from '../contracts/ChaosCoin.json';


const _ChaosCoin = new web3.eth.Contract(
	ChaosCoin.abi,
	'0x2782e310970e63f8281c52c931495719db4a5c4a'
);

export default _ChaosCoin;
