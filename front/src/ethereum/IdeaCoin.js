import web3 from './web3';
import IdeaCoin from '../contracts/IdeaCoin.json';



 const _IdeaCoin = new web3.eth.Contract(
	IdeaCoin.abi,
	'0xac197d40ecbd862357f21621c18c3fb65c0d197d'
);


export default _IdeaCoin;
// export default contractInstance;
