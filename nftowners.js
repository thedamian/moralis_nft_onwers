require('dotenv').config();
const moralisApiID = process.env.MORALIS_API_ID;
const moralisServer = process.env.MORALIS_server;

const Moralis = require('moralis/node'); 
const serverUrl =moralisServer;
const appId = moralisApiID;
// Let's connect to Moralis
Moralis.start({ serverUrl, appId });

(async ()=> {
const options = { address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d", chain: "eth" };
const nftOwners = await Moralis.Web3API.token.getNFTOwners(options);
console.log(nftOwners)
})();

