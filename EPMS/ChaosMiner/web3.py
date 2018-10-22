from GPIO_RNG.py import getRInt
import time
from web3 import Web3, HTTPProvider

contract_address = [YOUR CONTRACT ADDRESS]
wallet_private_key = [YOUR TEST WALLET PRIVATE KEY]
wallet_address = [YOUR WALLET ADDRESS]

w3 = Web3(HTTPProvider([YOUR INFURA URL]))

w3.eth.enable_unaudited_features()

# example contract call structure


def check_whether_address_is_approved(address):

    return contract.functions.isApproved(address).call()
