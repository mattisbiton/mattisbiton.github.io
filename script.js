function lockScroll() {
    document.body.classList.toggle('lock-scroll');
}

function removeHash() {
    setTimeout(function(){
        history.replaceState("", document.title, window.location.pathname);
    }, 1);
}

function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    const checkbox = document.getElementById('emoji-checkbox');

    if (event.currentTarget.checked) {
        checkbox.innerText = "😎";
    } else {
        checkbox.innerText = "😴";
    }
 }