window.addEventListener("DOMContentLoaded", () => {
    const versions = document.querySelectorAll(".version");
    if (versions.length > 0) {
        versions.forEach((version) => {
            version.innerText = "0.3.0-dev";
        });
    }
    const back = document.getElementById("back");
    if (back != null) {
        back.addEventListener("click", (event) => {
            event.preventDefault();
            window.history.go(-1);
        });
    }
});
