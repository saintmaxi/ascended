/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

const ascendedAddress = "0x496299d8497A02b01f5Bc355298b0a831f06c522";
const ascendedAbi = () => {
    return `[ { "inputs": [], "stateMutability": "payable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "oldOwner_", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner_", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Received", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "Yield", "outputs": [ { "internalType": "contract iYield", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_publicMintEnabled", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_publicMintTime", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_whitelistMintTime", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "addressToEmergencyUnlocked", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "addressToWlMints", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "balance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "emergencyWithdrawEther", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "bytes32[]", "name": "proof_", "type": "bytes32[]" } ], "name": "isWhitelisted", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxMintsPerTx", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxMintsPerWl", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "mintPrice", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" }, { "internalType": "bytes", "name": "data_", "type": "bytes" } ], "name": "multiSafeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "multiTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "ownerMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "tos_", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts_", "type": "uint256[]" } ], "name": "ownerMintToMany", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "payableGovernanceAddresses", "outputs": [ { "internalType": "address payable[]", "name": "", "type": "address[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "payableGovernanceShares", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "publicMint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "publicMintStatus", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "reouncePayableGovernancePermissions", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "resetPayableGovernanceShareholders", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "bytes", "name": "data_", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator_", "type": "address" }, { "internalType": "bool", "name": "approved_", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "uri_", "type": "string" } ], "name": "setBaseTokenURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "ext_", "type": "string" } ], "name": "setBaseTokenURI_EXT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "maxTokens_", "type": "uint256" } ], "name": "setMaxtokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "merkleRoot_", "type": "bytes32" } ], "name": "setMerkleRoot", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "mintPrice_", "type": "uint256" } ], "name": "setMintPrice", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address payable[]", "name": "addresses_", "type": "address[]" }, { "internalType": "uint256[]", "name": "shares_", "type": "uint256[]" } ], "name": "setPayableGovernanceShareholders", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "bool_", "type": "bool" }, { "internalType": "uint256", "name": "time_", "type": "uint256" } ], "name": "setPublicMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "bool_", "type": "bool" }, { "internalType": "uint256", "name": "time_", "type": "uint256" } ], "name": "setWhitelistMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setYieldToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId_", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "index_", "type": "uint256" } ], "name": "tokenOfOwnerByIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner_", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unlockEmergencyFunctionsAsShareholder", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "viewWithdrawAmounts", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "walletOfOwner", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32[]", "name": "proof_", "type": "bytes32[]" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "whitelistMint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "whitelistMintStatus", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdrawEther", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" } ]`;
};

const auraAddress = "0xBE6a20DAd94b377Af1EfaA229ed0E0B91eb54ac5";
const auraAbi = () => {
    return `[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"ascended","outputs":[{"internalType":"contract ERC721Like","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id_","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"ids_","type":"uint256[]"}],"name":"claimMany","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"claimable","outputs":[{"internalType":"uint256","name":"claimable_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"claims","outputs":[{"internalType":"uint128","name":"time","type":"uint128"},{"internalType":"uint128","name":"rate","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"impl_","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ascended_","type":"address"},{"internalType":"address","name":"rater_","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ruler","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"paused_","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"ruler_","type":"address"}],"name":"setRuler","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id_","type":"uint256"},{"internalType":"uint256","name":"rate_","type":"uint256"}],"name":"setYieldRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"ratings_","type":"address"}],"name":"setYieldRaterAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startingTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"yieldRater","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]`;
};

const etherscanBase = `https://etherscan.io/tx/`;
const correctChain = 1;
const baseImageURI = "https://api.nonfungiblecdn.com/ascendednft/images/";
const auraImgURL = "https://github.com/saintmaxi/ascended/blob/main/images/aura_symbol.png?raw=true";

/*********************************END CONFIG************************************/

if (window.ethereum == undefined) {
    displayErrorMessage('Use a web3 enabled browser to claim $AURA!');
    $("#available-ascended-images").empty();
    $("#available-ascended-images").append("<br><h3>No explorers available...</h3>");
}
const getAddress = async() => { try { return await signer.getAddress(); } catch { return false; }}; 

/** Credit to Web3Modal <3 */

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const ExampleProvider = window.ExampleProvider;
const evmChains = window.evmChains;

let web3Modal;
let connection;
let ethersProvider;
let signer;

let ascended;
let aura;

async function onConnect() {

    console.log("Opening a dialog", web3Modal);
    try {
        connection = await web3Modal.connect();
        ethersProvider = new ethers.providers.Web3Provider(connection);
        signer = ethersProvider.getSigner();
        ascended = new ethers.Contract(ascendedAddress, ascendedAbi(), signer);
        aura = new ethers.Contract(auraAddress, auraAbi(), signer);
    }
    catch(e) {
        console.log("Could not get a wallet connection", e);
        return;
    }
}


function init() {
    let injectedName;
    let injectedImg;
    let injectedMsg;
    if (gamestopProvider) {
        injectedName = "GameStop Wallet";
        injectedImg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxIDE4VjE5QzIxIDIwLjEgMjAuMSAyMSAxOSAyMUg1QzMuODkgMjEgMyAyMC4xIDMgMTlWNUMzIDMuOSAzLjg5IDMgNSAzSDE5QzIwLjEgMyAyMSAzLjkgMjEgNVY2SDEyQzEwLjg5IDYgMTAgNi45IDEwIDhWMTZDMTAgMTcuMSAxMC44OSAxOCAxMiAxOEgyMVpNMTIgMTZIMjJWOEgxMlYxNlpNMTYgMTMuNUMxNS4xNyAxMy41IDE0LjUgMTIuODMgMTQuNSAxMkMxNC41IDExLjE3IDE1LjE3IDEwLjUgMTYgMTAuNUMxNi44MyAxMC41IDE3LjUgMTEuMTcgMTcuNSAxMkMxNy41IDEyLjgzIDE2LjgzIDEzLjUgMTYgMTMuNVoiIGZpbGw9ImJsYWNrIj48L3BhdGg+Cjwvc3ZnPg=="
        injectedMsg = "Connect with GameStop Wallet."
    }
    else {
        injectedName = "Injected";
        injectedImg = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjEuODEzMTMyJSIgY3k9IjUwJSIgcj0iOTguMTg2ODY4JSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNDI0MjQyIi8+PHN0b3Agb2Zmc2V0PSIxIi8+PC9yYWRpYWxHcmFkaWVudD48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0yNTYgMGMxNDEuMzg0ODk2IDAgMjU2IDExNC42MTUxMDQgMjU2IDI1NiAwIDE0MS4zODQ4OTYtMTE0LjYxNTEwNCAyNTYtMjU2IDI1Ni0xNDEuMzg0ODk2IDAtMjU2LTExNC42MTUxMDQtMjU2LTI1NiAwLTE0MS4zODQ4OTYgMTE0LjYxNTEwNC0yNTYgMjU2LTI1NnoiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJtMTM3LjkwMjM0NCAyNDIuNzYxNzE5LTE1LjgyMDMxMyA1NS45NTcwMzFoLTE2LjY5OTIxOWwtMjIuMzgyODEyLTg0LjU1MDc4MWgxOC4zOTg0MzhsMTMuMTgzNTkzIDU5LjU4OTg0M2guOTM3NWwxNS40MTAxNTctNTkuNTg5ODQzaDE0Ljk0MTQwNmwxNS43MDMxMjUgNTkuNTg5ODQzaC45Mzc1bDEzLjA2NjQwNi01OS41ODk4NDNoMTguMjgxMjVsLTIyLjQ0MTQwNiA4NC41NTA3ODFoLTE2LjU4MjAzMWwtMTUuOTk2MDk0LTU1Ljk1NzAzMXptMTI3LjMyNDIxOCA0MC44Mzk4NDN2MTUuMTE3MTg4aC01Ni4wMTU2MjR2LTg0LjU1MDc4MWg1Ni4wMTU2MjR2MTUuMTE3MTg3aC0zOC4zMjAzMTJ2MTkuNzQ2MDk0aDM2LjE1MjM0NHYxNC4wMDM5MDZoLTM2LjE1MjM0NHYyMC41NjY0MDZ6bTU2LjYwMTU2MyAxNS4xMTcxODhoLTM3Ljk2ODc1di04NC41NTA3ODFoMzYuOTcyNjU2YzE2LjQwNjI1IDAgMjYuMTkxNDA3IDguMDI3MzQzIDI2LjE5MTQwNyAyMS4wOTM3NSAwIDguOTY0ODQzLTYuNjIxMDk0IDE2Ljc1NzgxMi0xNS4yOTI5NjkgMTguMDQ2ODc1djEuMDU0Njg3YzExLjE5MTQwNi44MjAzMTMgMTkuMzM1OTM3IDkuMjU3ODEzIDE5LjMzNTkzNyAyMC4xNTYyNSAwIDE0LjgyNDIxOS0xMS4xOTE0MDYgMjQuMTk5MjE5LTI5LjIzODI4MSAyNC4xOTkyMTl6bS0yMC4yNzM0MzctNzEuMDE1NjI1djIxLjUwMzkwNmgxMy4zMDA3ODFjOS41NTA3ODEgMCAxNC43NjU2MjUtMy45MjU3ODEgMTQuNzY1NjI1LTEwLjcyMjY1NiAwLTYuNzM4MjgxLTQuODYzMjgyLTEwLjc4MTI1LTEzLjMwMDc4Mi0xMC43ODEyNXptMCA1Ny40ODA0NjloMTUuNzYxNzE4YzEwLjE5NTMxMyAwIDE1LjcwMzEyNS00LjI3NzM0NCAxNS43MDMxMjUtMTIuMTg3NSAwLTcuNzM0Mzc1LTUuNjgzNTkzLTExLjgzNTkzOC0xNi4xMTMyODEtMTEuODM1OTM4aC0xNS4zNTE1NjJ6bTg0LjQzMzU5My0yMy4xNDQ1MzJ2LTEzLjE4MzU5M2gxMC4zMTI1YzguMDI3MzQ0IDAgMTMuNDc2NTYzLTQuNjg3NSAxMy40NzY1NjMtMTEuNjAxNTYzIDAtNi43OTY4NzUtNS4yNzM0MzgtMTEuMTMyODEyLTEzLjUzNTE1Ni0xMS4xMzI4MTItOC4yMDMxMjYgMC0xMy42NTIzNDQgNC42Mjg5MDYtMTQuMTIxMDk0IDExLjk1MzEyNWgtMTYuMzQ3NjU2Yy41ODU5MzctMTUuOTk2MDk0IDEyLjQ4MDQ2OC0yNi4wNzQyMTkgMzAuOTM3NS0yNi4wNzQyMTkgMTcuMzQzNzUgMCAyOS44MjQyMTggOS40OTIxODggMjkuODI0MjE4IDIyLjc5Mjk2OSAwIDkuNzg1MTU2LTYuMTUyMzQ0IDE3LjQwMjM0My0xNS41ODU5MzcgMTkuMzM1OTM3djEuMDU0Njg4YzExLjYwMTU2MiAxLjI4OTA2MiAxOC44NjcxODcgOS4wMjM0MzcgMTguODY3MTg3IDIwLjE1NjI1IDAgMTQuODI0MjE4LTEzLjk0NTMxMiAyNS41NDY4NzUtMzMuMjIyNjU2IDI1LjU0Njg3NS0xOC44NjcxODggMC0zMS42NDA2MjUtMTAuNDI5Njg4LTMyLjQwMjM0NC0yNi4zNjcxODhoMTYuOTMzNTk0Yy41MjczNDQgNy4xNDg0MzggNi41NjI1IDExLjY2MDE1NyAxNS42NDQ1MzEgMTEuNjYwMTU3IDguODQ3NjU3IDAgMTUtNC45ODA0NjkgMTUtMTIuMTg3NSAwLTcuMzgyODEzLTUuODAwNzgxLTExLjk1MzEyNi0xNS4yOTI5NjktMTEuOTUzMTI2eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=";
        injectedMsg = "Connect with the provider in your browser";
    }
    const providerOptions = {
        injected: {
            display: {
            //   logo: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjEuODEzMTMyJSIgY3k9IjUwJSIgcj0iOTguMTg2ODY4JSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNDI0MjQyIi8+PHN0b3Agb2Zmc2V0PSIxIi8+PC9yYWRpYWxHcmFkaWVudD48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0yNTYgMGMxNDEuMzg0ODk2IDAgMjU2IDExNC42MTUxMDQgMjU2IDI1NiAwIDE0MS4zODQ4OTYtMTE0LjYxNTEwNCAyNTYtMjU2IDI1Ni0xNDEuMzg0ODk2IDAtMjU2LTExNC42MTUxMDQtMjU2LTI1NiAwLTE0MS4zODQ4OTYgMTE0LjYxNTEwNC0yNTYgMjU2LTI1NnoiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJtMTM3LjkwMjM0NCAyNDIuNzYxNzE5LTE1LjgyMDMxMyA1NS45NTcwMzFoLTE2LjY5OTIxOWwtMjIuMzgyODEyLTg0LjU1MDc4MWgxOC4zOTg0MzhsMTMuMTgzNTkzIDU5LjU4OTg0M2guOTM3NWwxNS40MTAxNTctNTkuNTg5ODQzaDE0Ljk0MTQwNmwxNS43MDMxMjUgNTkuNTg5ODQzaC45Mzc1bDEzLjA2NjQwNi01OS41ODk4NDNoMTguMjgxMjVsLTIyLjQ0MTQwNiA4NC41NTA3ODFoLTE2LjU4MjAzMWwtMTUuOTk2MDk0LTU1Ljk1NzAzMXptMTI3LjMyNDIxOCA0MC44Mzk4NDN2MTUuMTE3MTg4aC01Ni4wMTU2MjR2LTg0LjU1MDc4MWg1Ni4wMTU2MjR2MTUuMTE3MTg3aC0zOC4zMjAzMTJ2MTkuNzQ2MDk0aDM2LjE1MjM0NHYxNC4wMDM5MDZoLTM2LjE1MjM0NHYyMC41NjY0MDZ6bTU2LjYwMTU2MyAxNS4xMTcxODhoLTM3Ljk2ODc1di04NC41NTA3ODFoMzYuOTcyNjU2YzE2LjQwNjI1IDAgMjYuMTkxNDA3IDguMDI3MzQzIDI2LjE5MTQwNyAyMS4wOTM3NSAwIDguOTY0ODQzLTYuNjIxMDk0IDE2Ljc1NzgxMi0xNS4yOTI5NjkgMTguMDQ2ODc1djEuMDU0Njg3YzExLjE5MTQwNi44MjAzMTMgMTkuMzM1OTM3IDkuMjU3ODEzIDE5LjMzNTkzNyAyMC4xNTYyNSAwIDE0LjgyNDIxOS0xMS4xOTE0MDYgMjQuMTk5MjE5LTI5LjIzODI4MSAyNC4xOTkyMTl6bS0yMC4yNzM0MzctNzEuMDE1NjI1djIxLjUwMzkwNmgxMy4zMDA3ODFjOS41NTA3ODEgMCAxNC43NjU2MjUtMy45MjU3ODEgMTQuNzY1NjI1LTEwLjcyMjY1NiAwLTYuNzM4MjgxLTQuODYzMjgyLTEwLjc4MTI1LTEzLjMwMDc4Mi0xMC43ODEyNXptMCA1Ny40ODA0NjloMTUuNzYxNzE4YzEwLjE5NTMxMyAwIDE1LjcwMzEyNS00LjI3NzM0NCAxNS43MDMxMjUtMTIuMTg3NSAwLTcuNzM0Mzc1LTUuNjgzNTkzLTExLjgzNTkzOC0xNi4xMTMyODEtMTEuODM1OTM4aC0xNS4zNTE1NjJ6bTg0LjQzMzU5My0yMy4xNDQ1MzJ2LTEzLjE4MzU5M2gxMC4zMTI1YzguMDI3MzQ0IDAgMTMuNDc2NTYzLTQuNjg3NSAxMy40NzY1NjMtMTEuNjAxNTYzIDAtNi43OTY4NzUtNS4yNzM0MzgtMTEuMTMyODEyLTEzLjUzNTE1Ni0xMS4xMzI4MTItOC4yMDMxMjYgMC0xMy42NTIzNDQgNC42Mjg5MDYtMTQuMTIxMDk0IDExLjk1MzEyNWgtMTYuMzQ3NjU2Yy41ODU5MzctMTUuOTk2MDk0IDEyLjQ4MDQ2OC0yNi4wNzQyMTkgMzAuOTM3NS0yNi4wNzQyMTkgMTcuMzQzNzUgMCAyOS44MjQyMTggOS40OTIxODggMjkuODI0MjE4IDIyLjc5Mjk2OSAwIDkuNzg1MTU2LTYuMTUyMzQ0IDE3LjQwMjM0My0xNS41ODU5MzcgMTkuMzM1OTM3djEuMDU0Njg4YzExLjYwMTU2MiAxLjI4OTA2MiAxOC44NjcxODcgOS4wMjM0MzcgMTguODY3MTg3IDIwLjE1NjI1IDAgMTQuODI0MjE4LTEzLjk0NTMxMiAyNS41NDY4NzUtMzMuMjIyNjU2IDI1LjU0Njg3NS0xOC44NjcxODggMC0zMS42NDA2MjUtMTAuNDI5Njg4LTMyLjQwMjM0NC0yNi4zNjcxODhoMTYuOTMzNTk0Yy41MjczNDQgNy4xNDg0MzggNi41NjI1IDExLjY2MDE1NyAxNS42NDQ1MzEgMTEuNjYwMTU3IDguODQ3NjU3IDAgMTUtNC45ODA0NjkgMTUtMTIuMTg3NSAwLTcuMzgyODEzLTUuODAwNzgxLTExLjk1MzEyNi0xNS4yOTI5NjktMTEuOTUzMTI2eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=",
              name: injectedName,
            logo: injectedImg,
              description: injectedMsg
            },
            package: null
          },

      walletconnect: {
        package: WalletConnectProvider,
        options: {
          // saintmaxi's key. please don't steal
          rpc: {
            1: "https://eth-mainnet.alchemyapi.io/v2/3hp-NwazwPSOG8qLtIIY8OvCoWuIwxnQ"
          }
        }
      },
  
      fortmatic: {
        package: Fortmatic,
        options: {
          // saintmaxi's key. please don't steal
          key: "pk_live_2E9622215016CCF6"
        }
      }
    };
  
    web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions,
      disableInjectedProvider: false,
    });
}

const formatEther = (balance_)=>{
    return ethers.utils.formatEther(balance_)
};

const parseEther = (eth_)=>{
    return ethers.utils.parseEther(eth_)
};

const getChainId = async()=>{
    return await signer.getChainId()
};

const importAuraToWallet = async() => {
    ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: auraAddress,
            symbol: 'AURA',
            decimals: 18,
            image: auraImgURL,
          },
        },
      });
}

const updateCurrentChain = async() => {
    if ((await getChainId()) !== correctChain) {
        displayErrorMessage("Error: Wrong Network!", false);
    }
    else {
        $("#error-popup").remove();
        $("#block-screen-error").remove();
    }
}

// AURA Functions

const getAscendedEnum = async()=>{
    let userAddress = await getAddress();
    let totalAscended = await ascended.balanceOf(userAddress);
    return totalAscended;
};

const getAscendedOwned = async() => {
    let userAddress = await getAddress();
    let totalAscended = await ascended.balanceOf(userAddress);
    let ownedAscended = [];
    for (let i = 0; i < totalAscended; i++) {
        let id = Number(await ascended.tokenOfOwnerByIndex(userAddress, i));
        ownedAscended.push(id);
    }
    return [...ownedAscended].sort((a, b) => a - b);
}

const getAuraBalance = async()=>{
    let userAddress = await getAddress();
    let auraBalance = await aura.balanceOf(userAddress);
    $("#your-aura").html(`${(Number(formatEther(auraBalance))).toFixed(2)}`);
};

const getPendingAuraBalance = async()=>{ // need to add up by total of each token
    let userAddress = await getAddress();
    let totalAscended = await getAscendedEnum();
    let pendingAura = 0;
    for (let i = 0; i < totalAscended; i++) {
        let id = Number(await ascended.tokenOfOwnerByIndex(userAddress, i));
        pendingAura += Number(formatEther(await aura.claimable(id))); //get aura owed to token
    }
    $("#claimable-aura").html(`${pendingAura.toFixed(2)}`);
};

const claimByIds = async()=>{
    if (selectedForUnstaking.size == 0) {
        displayErrorMessage("Select at least 1 Ascended to claim!")
    }
    else {
        const ascendedArray = Array.from(selectedForUnstaking);
        await aura.claimMany(ascendedArray).then( async(tx_) => {
            selectedForUnstaking = new Set();
            $("#selected-for-unstaking").text("NONE");
            $(".active").removeClass("active");
            await waitForTransaction(tx_);
        }); 
    }
};

const claimAll = async() => {
    const numAscended = await getAscendedEnum();
    if (numAscended == 0) {
        displayErrorMessage("No Ascended to claim for!")
    }
    else {
        const ascendedArray = await getAscendedOwned();
        await aura.claimMany(ascendedArray).then( async(tx_) => {
            selectedForUnstaking = new Set();
            $("#selected-for-unstaking").text("NONE");
            $(".active").removeClass("active");
            await waitForTransaction(tx_);
        }); 
    }
};

// Staking functions

var currentlyStaked = [];
var imagesLoaded = false;

const getAscendedImages = async()=>{
    $("#available-ascended-images").empty();
    $("#available-ascended-images").append(`<br><h3>Loading<span class="one">.</span><span class="two">.</span><span class="three">.</span></h3>`);

    const yourAscendedCount = await getAscendedEnum();
    if (yourAscendedCount == 0) {
        $("#available-ascended-images").empty();
        $("#available-ascended-images").append("<br><h3>No Ascended available...</h3>");
    }
    else {
        const yourAscended = await getAscendedOwned();
        currentlyStaked = yourAscended;
        let batchFakeJSX = "";
        for (let i = 0; i < yourAscended.length; i++) {
            let ascendedID = yourAscended[i];
            let active= "";
            if (selectedForUnstaking.has(Number(ascendedID))) {
                active = "active";
            }
            let auraEarned = Number(formatEther(await aura.claimable(ascendedID))).toFixed(2);

            batchFakeJSX += `<div id="ascended-${ascendedID}" class="your-ascended ${active}" onclick="selectForUnstaking(${ascendedID})"><img src="${baseImageURI}${ascendedID}"><p class="ascended-id">#${ascendedID}</p><p class="aura-earned"><span id="aura-earned-${ascendedID}">${auraEarned}</span><img src="${auraImgURL}" class="aura-icon"></p></div>`        
            
        };
        $("#available-ascended-images").empty();
        $("#available-ascended-images").append(batchFakeJSX);
    }
    imagesLoaded = true;
}

const getAuraEarnedByID = async(id) => {
    try {
        return Number(formatEther(await aura.claimable(id))).toFixed(2); //replace w aura version
    }
    catch {
        console.log('Metamask throws extra error. Token reward lookup was successful.')
        return 0;
    }
};

const updateAuraEarned = async() => {
    let totalEarned = 0;
    for (let i = 0; i < currentlyStaked.length; i++) {
        let ascendedID = Number(currentlyStaked[i]);
        let auraEarnedByID = await getAuraEarnedByID(ascendedID);
        $(`#aura-earned-${ascendedID}`).html(`${auraEarnedByID}`);
        if (selectedForUnstaking.has(ascendedID)) {
            totalEarned += Number(auraEarnedByID);
        }
    };
    $("#aura-to-claim").html(`$<img src="${auraImgURL}" class="aura-icon"> to Claim: ${totalEarned.toFixed(2)}`);
};

const updateClaimingInfo = async()=>{
    if ((await getChainId()) === correctChain) {
        const loadingDiv = `<div class="loading-div" id="refresh-notification">REFRESHING <br>CLAIMING INTERFACE<span class="one">.</span><span class="two">.</span><span class="three">.</span>​</div><br>`;
        $("#pending-transactions").append(loadingDiv);
        await getAuraBalance();
        let ascendedNum = await getAscendedEnum();
        if (ascendedNum == 0) {
            $("#claimable-aura").text("0.0");
        }
        else {
            await getPendingAuraBalance();
        }
        $("#your-ascended-num").html(`${ascendedNum}`);
        $("#earn-rate").html(100 * ascendedNum);
        if (!imagesLoaded) {
            await getAscendedImages();
        }
        $("#error-popup").remove();
        $("#refresh-notification").remove();
    } 
    else {
        $("#wallet").text(`Wrong Network!`);
        $("#available-ascended-images").empty();
        $("#available-ascended-images").text("Error: Wrong Network");
        $("#your-aura").html(`0.0`);
        $("#claimable-aura").html(`0.0`);
        $("#earn-rate").html("0.0");
        displayErrorMessage("Error: Wrong Network", false);
    }
};


// selection helpers

var selectedForUnstaking = new Set();

async function selectForUnstaking(id) {
    if (!selectedForUnstaking.has(id)) {
        selectedForUnstaking.add(id);
        $(`#ascended-${id}`).addClass("active");
    }
    else {
        selectedForUnstaking.delete(id);
        $(`#ascended-${id}`).removeClass("active");
    }
    if (selectedForUnstaking.size == 0) {
        $("#selected-for-unstaking").text("NONE");
        $("#aura-to-claim").html(`$<img src="${auraImgURL}" class="aura-icon"> to Claim: 0`);
    }
    else {
        let selectedForUnstakingArray = Array.from(selectedForUnstaking).sort((a, b) => a - b);
        let auraToClaim = 0;
        for (let i = 0; i < selectedForUnstakingArray.length; i++) {
            auraToClaim += Number(await getAuraEarnedByID(selectedForUnstakingArray[i]));
        }
        $("#aura-to-claim").html(`$<img src="${auraImgURL}" class="aura-icon"> to Claim: ${auraToClaim.toFixed(2)}`);
        let selectedString = `${selectedForUnstakingArray.join(', ')}`;
        $("#selected-for-unstaking").text(selectedString);
    }
}

// Processing tx returns
const waitForTransaction = async(tx_) => {
    startLoading(tx_);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_, transaction_.status);
    });
};

// Resuming UI display, refreshing market for pending txs across pages
var pendingTransactions = localStorage.getItem("AuraPendingTxs");

if (!pendingTransactions) {
    pendingTransactions = new Set();
}
else {
    pendingTransactions = new Set(Array.from(JSON.parse(pendingTransactions)));
    pendingTxArray = Array.from(pendingTransactions);
    pendingTransactions = new Set();

    for (let i =0; i < pendingTxArray.length; i++) {
        waitForTransaction(pendingTxArray[i]);
    }
    localStorage.removeItem("AuraPendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("AuraPendingTxs", JSON.stringify(Array.from(pendingTransactions)));
}

function startLoading(tx) {
    let txHash = tx.hash;
    const etherscanLink = `${etherscanBase}${txHash}`;
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span>​<br>CLICK FOR ETHERSCAN</div></a><br>`;
    $("#pending-transactions").append(loadingDiv);
    pendingTransactions.add(tx);
}

async function endLoading(tx, txStatus) {
    let txHash = tx.hash;
    $(`#loading-div-${txHash}`).html("");
    let status = txStatus == 1 ? "SUCCESS" : "ERROR";
    $(`#loading-div-${txHash}`).addClass("blinking");
    if (txStatus == 1) {
        $(`#loading-div-${txHash}`).addClass("success");
    }
    else if (txStatus == 0) {
        $(`#loading-div-${txHash}`).addClass("failure");
    }
    $(`#loading-div-${txHash}`).append(`TRANSACTION ${status}.<br>VIEW ON ETHERSCAN.`);
    await sleep(7000);
    $(`#etherscan-link-${txHash}`).remove();
    pendingTransactions.delete(tx);
    if (pendingTransactions.size == 0) {
        await updateClaimingInfo();
    }
}

setInterval(async()=>{
    await updateInfo();
    await getAuraBalance();
    await updateAuraEarned();
    await getPendingAuraBalance();
}, 5000)

const updateInfo = async () => {
    let userAddress = await getAddress();
    $("#account").text(`${userAddress.substr(0,9)}..`);
    $("#mobile-account").text(`${userAddress.substr(0,9)}...`);
};

ethereum.on("accountsChanged", async(accounts_)=>{
    // location.reload();
});


let gamestopProvider;

window.onload = async()=>{
    gamestopProvider = await detectGamestopProvider();
    init();
    await onConnect();
    await updateInfo();
    await updateClaimingInfo();
    $("#account").attr("onclick", "onConnect()");
};

window.onunload = async()=>{
    cachePendingTransactions();
}
