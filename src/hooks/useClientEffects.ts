'use client';

import {useEffect} from 'react';

export function useFaviconRandom() {
    useEffect(() => {
        if (Math.random() < 0.1) {
            const favicon = document.getElementById('favicon') as HTMLLinkElement;
            if (favicon) {
                favicon.href = '/images/pointer_lucky.ico';
            }
        }
    }, []);
}

export function useMobileRedirect() {
    useEffect(() => {
        if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            window.location.href = 'https://www.instagram.com/gabibag_/';
        }
    }, []);
}

