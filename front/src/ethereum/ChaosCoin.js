import web3 from '../utils/web3';
import ChaosCoin from '../contracts/ChaosCoin.json';


const _ChaosCoin = new web3.eth.Contract(
	ChaosCoin.abi,
	'0x1a8b3db6b29cc1f9e769eb4403e9376ccad63d46'
);

export default _ChaosCoin;
