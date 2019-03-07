import web3 from '../utils/web3';




 const Faucet = new web3.eth.Contract(
   [
   	{
   		"constant": false,
   		"inputs": [
   			{
   				"name": "_newMem",
   				"type": "address"
   			},
   			{
   				"name": "_facility",
   				"type": "address"
   			},
   			{
   				"name": "_hash",
   				"type": "string"
   			}
   		],
   		"name": "buyMembership",
   		"outputs": [],
   		"payable": false,
   		"stateMutability": "nonpayable",
   		"type": "function"
   	},
   	{
   		"inputs": [
   			{
   				"name": "_add",
   				"type": "address"
   			}
   		],
   		"payable": false,
   		"stateMutability": "nonpayable",
   		"type": "constructor"
   	},
   	{
   		"anonymous": false,
   		"inputs": [
   			{
   				"indexed": false,
   				"name": "member",
   				"type": "address"
   			}
   		],
   		"name": "NewMember",
   		"type": "event"
   	},
   	{
   		"constant": true,
   		"inputs": [],
   		"name": "DCPoA",
   		"outputs": [
   			{
   				"name": "",
   				"type": "address"
   			}
   		],
   		"payable": false,
   		"stateMutability": "view",
   		"type": "function"
   	}
   ],
	'0xddae2e1de764650c10caf3409fef13e0614d4b87'
);


export default Faucet;
// export default contractInstance;
