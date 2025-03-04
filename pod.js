function reveal(mobile) {
    let height = document.getElementById("about");
    document.getElementById("about");
    document.getElementById("first-par").style.display = "block";
    document.getElementById("less").style.visibility = "visible";
    document.getElementById("less").style.display = "inline";
    document.getElementById("second-par").style.display = "block";
    document.getElementById("third-par").style.display = "block";
    document.getElementById("third-par").style.marginBottom = "200px";
    document.getElementById("more").style.visibility = "collapse";
    if (mobile.status = true) {
        document.getElementById("mobile").style.visibility = "visible";
        document.getElementById("mobile").style.display = "inline";
        height.style.minHeight = "550px";
    } else {
        height.style.minHeight = "500px";
    }
}

function hide() {
    if (mobile.status = true) {
        document.getElementById("mobile").style.display = "none";
    }
    document.getElementById("second-par").style.display= "none";
    document.getElementById("third-par").style.display = "none";
    document.getElementById("less").style.display = "none";
    document.getElementById("more").style.visibility = "visible";
    let height = document.getElementById("about");
    height.style.minHeight = "30%";

}

function mobileStatus(mobile) {
    if (window.innerWidth < 360) {
        document.getElementById("mobile").style.display = "none";
        mobile.status = "mobile";
    }
}
function sendEmail() {
}

let mobile = {"status": ""};

window.addEventListener("load", function () {
    mobileStatus(mobile);
})
 
document.getElementById("more").addEventListener("click", function() {
    reveal(mobile);
});

document.getElementById("less").addEventListener("click", function() {
    hide(mobile);
});

document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.querySelector("iframe");
    iframe.style.height = "500px";
});
