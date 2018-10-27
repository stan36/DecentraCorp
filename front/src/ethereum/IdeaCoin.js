import web3 from '../utils/web3';
import IdeaCoin from '../contracts/IdeaCoin.json';



 const _IdeaCoin = new web3.eth.Contract(
	IdeaCoin.abi,
	'0x832341f058b539ba38e44c426a6fb7049010b3ec'
);


export default _IdeaCoin;
// export default contractInstance;
