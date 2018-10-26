import web3 from './web3';
import DecentraCorpPoA from '../contracts/DecentraCorpPoA.json';



const _DecentraCorp = new web3.eth.Contract(
	DecentraCorpPoA.abi,
	'0x0de0c089ec7a927493084e5bc9d875cb20b24b28'
);


export default _DecentraCorp;
// export default contractInstance;
