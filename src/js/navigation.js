function globalnav() {
    var x = document.getElementById("global-nav");
    if (x.className === "global-nav") {
        x.className += " responsive";
    } else {
        x.className = "global-nav";
    }
}