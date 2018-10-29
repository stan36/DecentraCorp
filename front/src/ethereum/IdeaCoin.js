import web3 from '../utils/web3';
import IdeaCoin from '../contracts/IdeaCoin.json';



 const _IdeaCoin = new web3.eth.Contract(
	IdeaCoin.abi,
	'0xe63defd2304af9c37a55d760747ff590fa5679e3'
);


export default _IdeaCoin;
// export default contractInstance;
