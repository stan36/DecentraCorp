import web3 from '../utils/web3';
import IdeaCoin from '../contracts/IdeaCoin.json';



 const _IdeaCoin = new web3.eth.Contract(
	IdeaCoin.abi,
	'0x6c653357926781bb768e6ff0602208f04b96590d'
);


export default _IdeaCoin;
// export default contractInstance;
