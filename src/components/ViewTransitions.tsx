'use client';

import {useEffect} from 'react';
import {usePathname} from 'next/navigation';

export default function ViewTransitions({children}: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        // Check if browser supports View Transitions API
        if ('startViewTransition' in document) {
            // The view transitions will happen automatically with the CSS
            console.log('View Transitions API supported');
        }
    }, [pathname]);

    return <>{children}</>;
}

