// Message function: Send message to background.js
document.getElementById("view_history").onclick = () => {
    chrome.runtime.sendMessage({ to_backscript: "tap_button" });
};

// Message function: Receive message and view history
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.history_list){
        let history_list = document.getElementById("history_list");
        history_list.innerHTML = "";
        var list = message.history_list;
        console.log(list);
        for (var i = list.length; i > 0; i--) {
            var history_url = document.createElement("p");
            history_url.textContent = list[i];
            history_list.appendChild(history_url);
        }
    }
});