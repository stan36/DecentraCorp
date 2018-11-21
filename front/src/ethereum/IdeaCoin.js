import web3 from '../utils/web3';
import IdeaCoin from '../contracts/IdeaCoin.json';



 const _IdeaCoin = new web3.eth.Contract(
	IdeaCoin.abi,
	'0x79a19d5b92513563244ce4303901459cb0bfebd7'
);


export default _IdeaCoin;
// export default contractInstance;
