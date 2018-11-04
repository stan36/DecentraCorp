import web3 from '../utils/web3';
import IdeaCoin from '../contracts/IdeaCoin.json';



 const _IdeaCoin = new web3.eth.Contract(
	IdeaCoin.abi,
	'0xa7bb518979be58f29fb0d5cf145d98aac0bb4e2c'
);


export default _IdeaCoin;
// export default contractInstance;
