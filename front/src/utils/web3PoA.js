import Web3 from 'web3';

let web3PoA;


	const provider = new Web3.providers.HttpProvider(
		'http://18.218.89.29:8545' //This needs to be a public node with all rpc
	);

	web3PoA = new Web3(provider);

export default web3PoA;
