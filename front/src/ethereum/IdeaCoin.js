import web3 from '../utils/web3';
import IdeaCoin from '../contracts/IdeaCoin.json';



 const _IdeaCoin = new web3.eth.Contract(
	IdeaCoin.abi,
	'0x3ff0cf7bb3790f3f0a61b1f2cc771483b6711db0'
);


export default _IdeaCoin;
// export default contractInstance;
