async function displayErrorMessage(message, timed=true) {
    if (!($("#error-popup").length)) {
        let fakeJSX = `<div id="error-popup"><p>${message}</p></div>`;
        $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-error' style="height:${height}px"></div>`);
        if (timed) {
            await sleep(2500);
            $("#error-popup").remove();
            $("#block-screen-error").remove();
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const revealAuraLookup = async() => {
    try {
        await getAddress();
        $("#info-block").addClass("hidden");
        $("#mint-prompt").removeClass("hidden");
    }
    catch {
        await displayErrorMessage("No wallet connected! Requesting...")
        connect();
    }
}

function clearPendingTxs() {
    localStorage.removeItem("AuraPendingTxs");
    localStorage.removeItem("AscendedPendingTxs");
    pendingTransactions.clear();
    location.reload();
};