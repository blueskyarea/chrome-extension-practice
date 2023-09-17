document.getElementById("change_blue").onclick = () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: changeBackgroundColor,
        });
    });
};

function changeBackgroundColor() {
    document.body.style.backgroundColor = "blue";
    console.log("Changed background color to blue.");
}