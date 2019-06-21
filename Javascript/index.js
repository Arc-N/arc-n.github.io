function navigationControl() {
    if (document.getElementById("navigation").style.width != "180px") {
        document.getElementById("navigation").style.width = "180px";
        document.getElementById("openbutton").style.marginLeft = "125px";
        document.getElementById("openbutton").style.color = "#999999";
        document.getElementById("openbutton").style.transform = "rotate(45deg)";
    } else {
        document.getElementById("navigation").style.width = "0px";
        document.getElementById("openbutton").style.marginLeft = "0px";
        document.getElementById("openbutton").style.color = "#999999";
        document.getElementById("openbutton").style.transform = "rotate(0deg)";
    }
}

function hoverOn() {
    document.getElementById("openbutton").style.color = "#ffffff";
}

function hoverOff() {
    if (document.getElementById("openbutton").style.marginLeft === "180px") {
        document.getElementById("openbutton").style.color = "#999999";
    } else {
        document.getElementById("openbutton").style.color = "#999999";
    }
}
