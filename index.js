const Web3 = require('web3')
const Web3Modal = require('web3modal')
require('@walletconnect/web3-provider')

infura =  new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws/v3/" + process.env.INFURA_ID)
console.log(Web3Modal)

const providerOptions = {
  walletconnect: {
    display: {
      name: "Mobile"
    },
    package: infura,
    options: {
      infuraId: process.env.INFURA_ID // required
    }
  }
};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions // required
});

const provider = web3Modal.connect();

// add your INFURA_ID to .env file, such as
// INFURA_ID=7e484dcd9e3efcfd25a83a78777cdf00
// get your ID from https://infura.io/

if (typeof web3 !== 'undefined') {
  // web3 version: 1.3.0
  console.log('-- web3 is available now. --- version: ' + web3.version)
  console.log(web3.eth.currentProvider)
}