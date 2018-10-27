import web3 from '../utils/web3';
import IdeaCoin from '../contracts/IdeaCoin.json';



 const _IdeaCoin = new web3.eth.Contract(
	IdeaCoin.abi,
	'0xbbb22c3b6bbe50d2990f3fb11e4b53cb16d8b4c6'
);


export default _IdeaCoin;
// export default contractInstance;
