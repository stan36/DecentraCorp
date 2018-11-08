import web3 from '../utils/web3';
import IdeaCoin from '../contracts/IdeaCoin.json';



 const _IdeaCoin = new web3.eth.Contract(
	IdeaCoin.abi,
	'0xbb767da765066cdca1f3538aba96d52119e39163'
);


export default _IdeaCoin;
// export default contractInstance;
