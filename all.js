(function () {
    function init() {
        // Favicon logic
        if (Math.random() < 0.1) {
            const favicon = document.getElementById('favicon');
            if (favicon) {
                favicon.href = './images/pointer_lucky.ico';
            }
        }

        // Instagram redirect
        if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            window.location.href = 'https://www.instagram.com/gabibag_/';
        }

        // Localhost link handling
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
            const menu = document.getElementById('menu');
            if (menu) {
                const links = menu.getElementsByTagName('a');
                const queryParams = window.location.search;

                if (queryParams) {
                    for (let i = 0; i < links.length; i++) {
                        const item = links[i];
                        const originalHref = item.getAttribute('href');

                        // Skip if href is null (no attribute)
                        if (originalHref === null) continue;

                        // Skip absolute URLs, protocol-relative URLs, and anchor links
                        if (originalHref.startsWith('http') || originalHref.startsWith('//') || originalHref.startsWith('#')) {
                            continue;
                        }

                        // Handle empty href (links to current page) and relative paths
                        if (originalHref === "") {
                            item.setAttribute('href', queryParams);
                        } else {
                            if (originalHref.includes('?')) {
                                item.setAttribute('href', originalHref + '&' + queryParams.substring(1));
                            } else {
                                item.setAttribute('href', originalHref + queryParams);
                            }
                        }
                    }
                }
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

