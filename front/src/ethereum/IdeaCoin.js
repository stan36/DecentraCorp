import web3 from '../utils/web3';
import IdeaCoin from '../contracts/IdeaCoin.json';



 const _IdeaCoin = new web3.eth.Contract(
	IdeaCoin.abi,
	'0x4bab8245825ecb9fc198ebca16c4363054ca2fae'
);


export default _IdeaCoin;
// export default contractInstance;
