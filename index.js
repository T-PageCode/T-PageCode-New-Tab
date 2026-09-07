document.addEventListener("contextmenu",(e) => {
    e.preventDefault();
})
document.addEventListener("keydown",(e) => {
    if (e.key === "Enter") {
        inputValue = document.querySelector("input").value.trim();
        if (inputValue) {
            window.location.href = "https://github.com/search?q=" + encodeURIComponent(inputValue);
        }
        else {
            document.getElementById("info").style.opacity = "1";
            setTimeout(() => {
                document.getElementById("info").style.opacity = "0";
            },2000)
        }
    }
})