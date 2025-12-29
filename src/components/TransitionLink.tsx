'use client';

import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {MouseEvent, MouseEventHandler, ReactNode} from 'react';

interface TransitionLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    dataId?: string;
    dataLink?: string;
    onMouseOver?: MouseEventHandler<HTMLAnchorElement>;
    onMouseOut?: MouseEventHandler<HTMLAnchorElement>;
    onMouseDown?: MouseEventHandler<HTMLAnchorElement>;
}

export default function TransitionLink({
                                           href,
                                           children,
                                           className,
                                           dataId,
                                           dataLink,
                                           onMouseOver,
                                           onMouseOut,
                                           onMouseDown,
                                       }: TransitionLinkProps) {
    const router = useRouter();

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        // Check if browser supports View Transitions API
        if ('startViewTransition' in document && typeof (document as any).startViewTransition === 'function') {
            (document as any).startViewTransition(() => {
                router.push(href);
            });
        } else {
            router.push(href);
        }
    };

    return (
        <Link
            href={href}
            onClick={handleClick}
            className={className}
            data-id={dataId}
            data-link={dataLink}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            onMouseDown={onMouseDown}
        >
            {children}
        </Link>
    );
}

