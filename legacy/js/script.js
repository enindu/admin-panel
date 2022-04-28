window.addEventListener('DOMContentLoaded', () => {
    const versions = document.querySelectorAll('.version');
    if (versions.length > 0) {
        versions.forEach((version) => {
            version.innerText = '0.1.7.legacy';
        });
    }

    const back = document.getElementById('back');
    if (back != null) {
        back.addEventListener('click', (event) => {
            event.preventDefault();
            window.history.go(-1);
        });
    }

    const sidebar = document.getElementById('sidebar');
    if (sidebar != null) {
        sidebar.addEventListener('click', (event) => {
            event.preventDefault();
            halfmoon.toggleSidebar();
        });
    }
});
