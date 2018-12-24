import web3 from '../utils/web3';
import DecentraCorpPoA from '../contracts/DecentraCorpPoA.json';



const _DecentraCorp = new web3.eth.Contract(
	DecentraCorpPoA.abi,
	DecentraCorpPoA.networks[3].address
);


export default _DecentraCorp;
// export default contractInstance;
