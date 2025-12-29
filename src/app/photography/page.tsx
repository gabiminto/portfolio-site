'use client';

import {useFaviconRandom, useMobileRedirect} from '@/hooks/useClientEffects';
import InfoText from '@/components/InfoText';
import Footer from '@/components/Footer';
import PhotoContainer from '@/components/PhotoContainer';
import './photography.module.css';

export default function Photography() {
    useFaviconRandom();
    useMobileRedirect();

    return (
        <>
            <div className="container">
                <InfoText id="photography-info">PHOTOGRAPHY</InfoText>
            </div>
            <div className="photo-description">lorem ipsum</div>
            <PhotoContainer name="DSC_0094" displayName="DSC 0094"/>
            <Footer hideTitle={true}/>
        </>
    );
}

