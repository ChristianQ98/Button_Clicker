function removeButton() {
    var element = document.getElementById("green-btn");
    element.parentNode.removeChild(element);
    return false;
}
function logout() {
    document.getElementById("login").innerHTML = "Logout";
}