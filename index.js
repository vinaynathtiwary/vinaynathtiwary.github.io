// alert("Message");
// console.log("Message")
// console.error("Message")

// var x = 10;
// console.log(x)

// Selector

function hide() {
    var x = document.getElementById("pop-nav");
    x.classList.add("hide");
    var y = document.getElementById("main");
    y.classList.remove("disable-scroll")
}

function show() {
    var x = document.getElementById("pop-nav");
    x.classList.remove("hide");
    var y = document.getElementById("main");
    y.classList.add("disable-scroll")
}

function downloadresume() {
    var z = document.getElementById("download-button");
    z.click();
}
