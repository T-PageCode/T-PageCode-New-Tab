document.addEventListener("contextmenu",(e) => {
    e.preventDefault();
})
document.addEventListener("keydown",(e) => {
    if (e.key === "Enter") {
        const inputValue = document.querySelector("input").value.trim();
        if (inputValue) {
            window.location.href = "https://github.com/search?q=" + encodeURIComponent(inputValue);
        }
        else {
            window.location.href = "https://github.com/search";
        }
    }
})