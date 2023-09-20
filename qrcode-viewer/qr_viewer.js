// View the QR code of current page URL
document.getElementById("url_qrcode_button").onclick = () => {
    chrome.tabs.query({active:true, currentWindow:true}, (tabs) => {
        chrome.runtime.sendMessage({to_backscript:tabs[0].url});
        make_qr_code(tabs[0].url);
    });
};

// View the QR code from input text
document.getElementById("textarea_qrcode_button").onclick = () => {
    let textValue = document.getElementById("text_qrdoce_textarea").value;
    make_qr_code(textValue);
};

// Function for create the QR code
function make_qr_code(text) {
    let qrcodeDiv = document.getElementById("qrcode");
    qrcodeDiv.innerHTML = "";
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: text,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correntLevel: QRCode.CorrectLevel.H,
    });
    let qrcodeText = document.getElementById("qrcode_text");
    qrcodeText.innerHTML = text;
}

// Save the text
document.getElementById("textarea_save_button").onclick = () => {
    let textValue = document.getElementById("text_qrdoce_textarea").value;
    chrome.storage.local.set({key: textValue}, function() {
        console.log("Saved the text to the storage");
    });
};

// View the text in loading the page
window.onload = setTextArea();
function setTextArea() {
    chrome.storage.local.get(["key"], function(result){
        document.getElementById("text_qrdoce_textarea").value = result.key;
    });
}