import web3 from '../utils/web3';
import DecentraCorpPoA from '../contracts/DecentraCorpPoA.json';



const _DecentraCorp = new web3.eth.Contract(
	DecentraCorpPoA.abi,
	'0x07819404c99058d949f5906812fdce63e4924113'
);


export default _DecentraCorp;
// export default contractInstance;
