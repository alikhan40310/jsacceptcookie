// local storage cookies


let x = localStorage.getItem("Name");
if (x !== null) {
    document.getElementById("localsave").style.display = "none";
}

function storagesave() {
    localStorage.setItem("Name", "Ali khan");
    document.getElementById("localsave").style.display = "none";
}