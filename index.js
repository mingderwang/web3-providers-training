const Web3 = require('web3')

// use infura as a provider for example
let web3 = new Web3(Web3.givenProvider || new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/" + process.env.INFURA_ID))

// add your INFURA_ID to .env file, such as
// INFURA_ID=7e484dcd9e3efcfd25a83a78777cdf00
// get your ID from https://infura.io/

if (typeof web3 !== 'undefined') {
  // web3 version: 1.3.0
  console.log('-- web3 is available now. --- version: '+ web3.version)
  console.log(web3.eth.currentProvider)
  // test web3.utils
  console.log(web3.utils.randomHex(32))
  web3.eth.net.getPeerCount()
.then(console.log); // 100 on infura provider
web3.eth.net.getId()
.then(console.log); // mainnet ID is 1
}