import web3 from '../utils/web3';
import DecentraCorpPoA from '../contracts/DecentraCorpPoA.json';



const _DecentraCorp = new web3.eth.Contract(
	DecentraCorpPoA.abi,
	'0x0adbea2c6e4ccd890d4c03a60c3db3db16bce9c2'
);


export default _DecentraCorp;
// export default contractInstance;
