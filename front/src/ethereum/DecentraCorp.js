import web3 from '../utils/web3';
import DecentraCorpPoA from '../contracts/DecentraCorpPoA.json';



const _DecentraCorp = new web3.eth.Contract(
	DecentraCorpPoA.abi,
	'0xd0a17cbb31022949ad8318a136d194fbbc8ff6e4'
);


export default _DecentraCorp;
// export default contractInstance;
