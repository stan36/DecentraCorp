import web3 from '../utils/web3';
import DecentraCorpPoA from '../contracts/DecentraCorpPoA.json';



const _DecentraCorp = new web3.eth.Contract(
	DecentraCorpPoA.abi,
	'0x144ba43e16aba1c34ac9b7053fc3862a57649110'
);


export default _DecentraCorp;
// export default contractInstance;
