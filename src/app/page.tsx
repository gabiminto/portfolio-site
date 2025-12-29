'use client';

import {useFaviconRandom, useMobileRedirect} from '@/hooks/useClientEffects';
import InfoText from '@/components/InfoText';
import Footer from '@/components/Footer';

export default function Home() {
    useFaviconRandom();
    useMobileRedirect();

    return (
        <>
            <div className="container">
                <InfoText id="projects-info">PROJECTS</InfoText>
                <InfoText id="photography-info">PHOTOGRAPHY</InfoText>
                <InfoText id="about-info">ABOUT</InfoText>
            </div>
            <Footer/>
        </>
    );
}

