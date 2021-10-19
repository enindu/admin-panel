import halfmoon from "~/node_modules/halfmoon/js/halfmoon-module.js";

window.addEventListener("DOMContentLoaded", () => {
    halfmoon.onDOMContentLoaded();

    const version = document.querySelectorAll(".version");
    if(version.length > 0) {
        version.forEach((element) => {
            element.innerText = "0.1.3-dev";
        });
    }

    const back = document.getElementById("back");
    if(back != null) {
        back.addEventListener("click", (event) => {
            event.preventDefault();
            window.history.go(-1);
        });
    }

    const sidebar = document.getElementById("sidebar");
    if(sidebar != null) {
        sidebar.addEventListener("click", (event) => {
            event.preventDefault();
            halfmoon.toggleSidebar();
        });
    }
});
