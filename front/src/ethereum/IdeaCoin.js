import web3 from '../utils/web3';
import IdeaCoin from '../contracts/IdeaCoin.json';



 const _IdeaCoin = new web3.eth.Contract(
	IdeaCoin.abi,
	IdeaCoin.networks[3].address
);


export default _IdeaCoin;
// export default contractInstance;
