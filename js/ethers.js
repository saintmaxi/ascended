/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

// const ascendedAddress = "";
// const ascendedAbi = () => {
    // return ``;
// };

// const etherscanBase = `https://etherscan.io/tx/`;

// const correctChain = 1;

const MAX_MINT = 20;

/*********************************************************************************/
/***********************************DEV CONFIG************************************/
/*********************************************************************************/

// const ascendedAddress = "";
// const ascendedAbi = () => {
    // return ``;
// };

// const etherscanBase = `https://rinkeby.etherscan.io/tx/`;

// const correctChain = 4;

/*********************************END CONFIG************************************/

const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
const signer = provider.getSigner();
// const ascended = new ethers.Contract(ascendedAddress, ascendedAbi(), signer);
let ascended;
const connect = async()=>{
    await provider.send("eth_requestAccounts", []);
};

const getAddress = async()=>{
    return await signer.getAddress()
};

const formatEther = (balance_)=>{
    return ethers.utils.formatEther(balance_)
};

const parseEther = (eth_)=>{
    return ethers.utils.parseEther(eth_)
};

const getChainId = async()=>{
    return await signer.getChainId()
};

const revealMintPrompt = async() => {
    $("#info-block").addClass("hidden");
    $("#mint-prompt").removeClass("hidden");
}

function decrementClaim() {
    let currentClaim = Number($("#number-to-mint").text());
    console.log('fuck')
    if (currentClaim > 1) {
        let newClaim = currentClaim - 1;
        $("#number-to-mint").text(newClaim);
    }
}

function updatePrice() {
    let currentClaim = Number($("#number-to-mint").text());
    $("#current-cost").text(`${.08 * currentClaim}`)
}

function incrementClaim() {
    let currentClaim = Number($("#number-to-mint").text());
    if (currentClaim != MAX_MINT) {
        let newClaim = currentClaim + 1;
        $("#number-to-mint").text(newClaim);
        $("#current-cost").text(`${.08 * newClaim}`)
    }
}

function setMaxMint() {
    $("#number-to-mint").text(MAX_MINT);
    $("#current-cost").text(.08 * MAX_MINT)
}

const mint = async () => {
    const userAddress = await getAddress();
    const minted = Number(await ascended.totalSupply());
    const numberToMint = Number($("#number-to-mint").text());

    let cost = ethers.BigNumber.from("80000000000000000").mul(numberToMint);

    const gasLimit = await ascended.estimateGas.mint(userAddress, numberToMint, {value: cost})
    const newGasLimit = parseInt((gasLimit * 1.2)).toString();

    await ascended.mint(userAddress, numberToMint, { value: cost, gasLimit: newGasLimit}).then( async(tx_) => {
        await waitForTransaction(tx_);
    });
};

const updateMintInfo = async() => {
    let minted = Number(await ascended.totalSupply());
    $("#num-minted").text(minted);
    $("#current-cost").html(`0.08 <span style="font-family: Arial, Helvetica, sans-serif;">Ξ</span>`);
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

provider.on("network", async(newNetwork, oldNetwork) => {
        if (oldNetwork) {
            $("#refresh-notification").remove();
            await updateCurrentChain();
            await updateMintInfo();
        }
    });

// Processing tx returns
const waitForTransaction = async(tx_) => {
    startLoading(tx_);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_, transaction_.status);
    });
};

// Resuming UI display, refreshing market for pending txs across pages
var pendingTransactions = localStorage.getItem("AscendedPendingTxs");

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
    localStorage.removeItem("AscendedPendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("AscendedPendingTxs", JSON.stringify(Array.from(pendingTransactions)));
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
        await updateMintInfo();
    }
}

const checkConnectedStatus = async() => {
    try {
        await getAddress();
        $("#connect-section").addClass('hidden');
        $("#mint-tools").removeClass('hidden');
    }
    catch {
        $(".connect-section").removeClass('hidden');
        $("#mint-tools").addClass('hidden');
    }
}

setInterval(async()=>{
    await updateInfo();
    // await updateMintInfo();
}, 5000)

function decrementClaim() {
    let currentClaim = Number($("#number-to-mint").text());
    if (currentClaim > 1) {
        let newClaim = currentClaim - 1;
        $("#number-to-mint").text(newClaim);
    }
}

function incrementClaim() {
    let currentClaim = Number($("#number-to-mint").text());
    if (currentClaim != 20) {
        let newClaim = currentClaim + 1;
        $("#number-to-mint").text(newClaim);
    }
}

const updateInfo = async () => {
    let userAddress = await getAddress();
    $("#account").text(`${userAddress.substr(0,9)}..`);
    await checkConnectedStatus();
};

ethereum.on("accountsChanged", async(accounts_)=>{
    location.reload();
});

window.onload = async()=>{
    await updateInfo();
    // await updateMintInfo();
};

window.onunload = async()=>{
    cachePendingTransactions();
}