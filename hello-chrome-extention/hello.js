document.getElementById("change_blue").onclick = () => {
    console.log("click");
    changeBackgroundColor();
};

function changeBackgroundColor() {
    var body = document.getElementById("popup_body");
    body.style.backgroundColor = "blue";
    console.log("Changed background color to blue.");
}