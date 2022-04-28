import halfmoon from '~/node_modules/halfmoon/js/halfmoon-module.js';

window.addEventListener('DOMContentLoaded', () => {
    halfmoon.onDOMContentLoaded();

    const versions = document.querySelectorAll('.version');
    if (versions.length > 0) {
        versions.forEach((version) => {
            version.innerText = '0.1.7-dev';
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
