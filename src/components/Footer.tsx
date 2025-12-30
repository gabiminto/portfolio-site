'use client';

import {useEffect, useRef, useState} from 'react';
import TransitionLink from './TransitionLink';

interface FooterProps {
    hideTitle?: boolean;
    isAboutSection?: boolean;
}

export default function Footer({hideTitle = false, isAboutSection = false}: FooterProps) {
    const [titleOpacity, setTitleOpacity] = useState(hideTitle ? '0' : '1');
    const mouseOutListenersRef = useRef<Map<string, boolean>>(new Map());


    const handleMouseOver = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.opacity = '1';
            element.style.scale = '1';
        }
    };

    const handleMouseOut = (elementId: string) => {
        // Only handle mouseout if the listener is still active
        if (mouseOutListenersRef.current.get(elementId) !== false) {
            const element = document.getElementById(elementId);
            if (element) {
                element.style.opacity = '0.3';
            }
        }
    };

    /*const handleMouseDown = (elementId: string) => {
        // Disable mouseout listener for this element
        mouseOutListenersRef.current.set(elementId, false);

        // Minimize mode - hide title and adjust footer position
        const nameTitle = document.getElementById('name-title');
        const details = document.getElementById('details');
        if (nameTitle) {
            nameTitle.style.opacity = '0';
            nameTitle.style.scale = '0.99';
        }
        if (details) {
            details.style.bottom = '10px';
        }
    };*/

    useEffect(() => {
        // setTitleOpacity(hideTitle ? '0' : '1');
        // Initialize all mouseout listeners as active
        mouseOutListenersRef.current.set('projects-info', true);
        mouseOutListenersRef.current.set('photography-info', true);
        mouseOutListenersRef.current.set('about-info', true);

        // Apply minimized state on mount if not in about section
        if (!isAboutSection) {
            const nameTitle = document.getElementById('name-title');
            const details = document.getElementById('details');
            if (nameTitle) {
                nameTitle.style.opacity = '0';
                nameTitle.style.scale = '0.99';
            }
            if (details) {
                details.style.bottom = '-10px';
            }
        }
    }, [hideTitle, isAboutSection]);

    return (
        <div id="details">
            <div id="name-title" style={{opacity: titleOpacity}}>
                Gabi Minto
            </div>
            <div id="menu">
                <TransitionLink
                    href="/"
                    dataId="projects-info"
                    onMouseOver={() => handleMouseOver('projects-info')}
                    onMouseOut={() => handleMouseOut('projects-info')}
                    // onMouseDown={() => handleMouseDown('projects-info')}
                >
                    Projects.{' '}
                </TransitionLink>
                <TransitionLink
                    href="/photography"
                    dataId="photography-info"
                    onMouseOver={() => handleMouseOver('photography-info')}
                    onMouseOut={() => handleMouseOut('photography-info')}
                    // onMouseDown={() => handleMouseDown('photography-info')}
                >
                    Photography.{' '}
                </TransitionLink>
                <TransitionLink
                    href="/"
                    dataId="about-info"
                    dataLink="about"
                    onMouseOver={() => handleMouseOver('about-info')}
                    onMouseOut={() => handleMouseOut('about-info')}
                    // onMouseDown={() => handleMouseDown('about-info')}
                >
                    About.{' '}
                </TransitionLink>
            </div>
        </div>
    );
}

