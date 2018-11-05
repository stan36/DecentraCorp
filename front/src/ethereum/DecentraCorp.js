import web3 from '../utils/web3';
import DecentraCorpPoA from '../contracts/DecentraCorpPoA.json';



const _DecentraCorp = new web3.eth.Contract(
	DecentraCorpPoA.abi,
	'0xf1812f9c05af49ba9958fa628b6feb1a9c4bfc0f'
);


export default _DecentraCorp;
// export default contractInstance;
