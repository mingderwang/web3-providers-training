const Web3 = require('web3')

// use infura as a provider for example
let web3 = new Web3(Web3.givenProvider || new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws/v3/" + process.env.INFURA_ID))

// add your INFURA_ID to .env file, such as
// INFURA_ID=7e484dcd9e3efcfd25a83a78777cdf00
// get your ID from https://infura.io/

if (typeof web3 !== 'undefined') {
  // web3 version: 1.3.0
  console.log('-- web3 is available now. --- version: '+ web3.version)
  console.log(web3.eth.currentProvider)

var name = 'newBlockHeaders'; // e.g.

web3.eth.subscribe(name, (error, result) => {
        if(!error) {
            console.log(result);
        } else {
            console.log('Error:', error);          
        }
    }).on("data", function (transaction) {
        console.log(transaction);
});
  console.log(web3.eth.currentProvider)
}