Web3 = require('web3')
if (typeof web3 !== 'undefined') {
  // Use Mist/MetaMask's provider
  console.log('web3 is available ---')
  web3 = new Web3(web3.currentProvider);
} else {
  console.log('web3 undefined, use infura provider ---')
  web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/" + process.env.INFURA_ID));
}; 
// add your INFURA_ID to .env file, such as
// INFURA_ID=7e484dcd9e3efcfd25a83a78777cdf00
// get your ID from https://infura.io/
console.log(web3.eth.currentProvider)