"use client";

import React, {useRef, useState} from 'react';
import '../styles/RecordPlayer.css';

export default function RecordPlayer() {
    const audio1Ref = useRef(null);
    const audio2Ref = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentAudio, setCurrentAudio] = useState(1);
    const currentSongRef = useRef(null); // Track the current song
    const currentSongIndexRef = useRef(-1); // Track the current song index
    const fadeDuration = 3000; // 3 seconds crossfade
    const targetVolume = 0.3;
    const crossfadeTriggeredRef = useRef({audio1: false, audio2: false});

    // Available songs in the audio folder
    const songs = [
        '/audio/DreamyLoop1.ogg',
        '/audio/DreamyLoop2.ogg',
        '/audio/DreamyLoop3.ogg',
        '/audio/SiftingStars.ogg'
    ];

    const crossfade = (fadeOutAudio, fadeInAudio, newSong) => {
        const steps = 50;
        const stepDuration = fadeDuration / steps;
        let step = 0;

        fadeInAudio.src = newSong;
        fadeInAudio.volume = 0;
        fadeInAudio.play();

        const fadeInterval = setInterval(() => {
            step++;
            const progress = step / steps;

            // Fade out old audio
            if (fadeOutAudio) {
                fadeOutAudio.volume = targetVolume * (1 - progress);
            }

            // Fade in new audio
            fadeInAudio.volume = targetVolume * progress;

            if (step >= steps) {
                clearInterval(fadeInterval);
                if (fadeOutAudio) {
                    fadeOutAudio.pause();
                    fadeOutAudio.currentTime = 0;
                }
            }
        }, stepDuration);
    };

    const handleTimeUpdate = (audioNum) => {
        const audio = audioNum === 1 ? audio1Ref.current : audio2Ref.current;
        const triggerKey = audioNum === 1 ? 'audio1' : 'audio2';

        if (!audio || !isPlaying || currentAudio !== audioNum) return;

        const timeUntilEnd = audio.duration - audio.currentTime;
        const crossfadeStartTime = fadeDuration / 1000; // Convert to seconds

        // Trigger crossfade when we're within the fade duration of the end
        if (timeUntilEnd <= crossfadeStartTime && !crossfadeTriggeredRef.current[triggerKey]) {
            crossfadeTriggeredRef.current[triggerKey] = true;

            // Loop the same song instead of picking a random one
            const selectedSong = currentSongRef.current;

            const currentAudioElement = audioNum === 1 ? audio1Ref.current : audio2Ref.current;
            const nextAudioElement = audioNum === 1 ? audio2Ref.current : audio1Ref.current;

            crossfade(currentAudioElement, nextAudioElement, selectedSong);
            setCurrentAudio(audioNum === 1 ? 2 : 1);

            // Reset the trigger for the next audio element
            const nextTriggerKey = audioNum === 1 ? 'audio2' : 'audio1';
            crossfadeTriggeredRef.current[nextTriggerKey] = false;
        }
    };

    const playNextSong = () => {
        // First time: pick a random starting song
        // Subsequent times: cycle to the next song
        if (currentSongIndexRef.current === -1) {
            currentSongIndexRef.current = Math.floor(Math.random() * songs.length);
        } else {
            currentSongIndexRef.current = (currentSongIndexRef.current + 1) % songs.length;
        }

        const selectedSong = songs[currentSongIndexRef.current];

        // Save the selected song so it can loop
        currentSongRef.current = selectedSong;

        const currentAudioElement = currentAudio === 1 ? audio1Ref.current : audio2Ref.current;
        const nextAudioElement = currentAudio === 1 ? audio2Ref.current : audio1Ref.current;

        if (isPlaying) {
            // Reset crossfade triggers
            crossfadeTriggeredRef.current = {audio1: false, audio2: false};
            // Crossfade to new song
            crossfade(currentAudioElement, nextAudioElement, selectedSong);
            setCurrentAudio(currentAudio === 1 ? 2 : 1);
        } else {
            // First time playing
            currentAudioElement.src = selectedSong;
            currentAudioElement.volume = targetVolume;
            currentAudioElement.play();
            setIsPlaying(true);
            // Reset crossfade trigger for first song
            crossfadeTriggeredRef.current = {audio1: false, audio2: false};
        }
    };

    const handleControlClick = () => {
        playNextSong();
    };

    return (
        <div className="record-player-frame">
            <div className="record">
                <svg className="record-rings" viewBox="0 0 200 200">
                    <circle
                        cx="100"
                        cy="100"
                        r="95"
                        className={`outer-ring ${isPlaying ? 'playing' : ''}`}
                    />
                    <circle
                        cx="100"
                        cy="100"
                        r="75"
                        className={`inner-ring ${isPlaying ? 'playing' : ''}`}
                    />
                </svg>
            </div>
            <div className="record-arm">
                <div className="arm-counter-weight"></div>
                <div className="arm-base"></div>
                <div className="arm-base-attachment"></div>
                <div className="arm-neck"></div>
                <div className="arm-needle"></div>
                <div className="arm-head"></div>
            </div>
            <div className="record-player-base">
                <div className="player-barcode">
                    fuckicefuckice
                </div>
                <div className="player-controls">
                    <div className="control control-top" onClick={handleControlClick}></div>
                    <div className="control control-middle" onClick={handleControlClick}></div>
                    <div className="control control-bottom" onClick={handleControlClick}></div>
                </div>
            </div>

            {/* Dual audio elements for crossfading */}
            <audio
                ref={audio1Ref}
                preload="auto"
                onTimeUpdate={() => handleTimeUpdate(1)}
            />
            <audio
                ref={audio2Ref}
                preload="auto"
                onTimeUpdate={() => handleTimeUpdate(2)}
            />
        </div>
    );

}