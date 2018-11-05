import web3 from '../utils/web3';
import IdeaCoin from '../contracts/IdeaCoin.json';



 const _IdeaCoin = new web3.eth.Contract(
	IdeaCoin.abi,
	'0x756ada67590008a4e484e5dd84080e2da408b95e'
);


export default _IdeaCoin;
// export default contractInstance;
