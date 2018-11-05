import web3 from '../utils/web3';
import IdeaCoin from '../contracts/IdeaCoin.json';



 const _IdeaCoin = new web3.eth.Contract(
	IdeaCoin.abi,
	'0x93d91ec77e3c03e5b62186c9732a015931d26e14'
);


export default _IdeaCoin;
// export default contractInstance;
