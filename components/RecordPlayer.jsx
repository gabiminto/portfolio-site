"use client";

import React, {useEffect, useRef, useState} from 'react';
import '../styles/RecordPlayer.css';

export default function RecordPlayer() {
    const audio1Ref = useRef(null);
    const audio2Ref = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentAudio, setCurrentAudio] = useState(1);
    const [trackName, setTrackName] = useState("");
    const [isBlinking, setIsBlinking] = useState(false);
    const [speakerFlip, setSpeakerFlip] = useState({x: 1, y: 1});
    const currentSongRef = useRef(null);
    const currentSongIndexRef = useRef(-1);
    const fadeDuration = 3000;
    const targetVolume = 0.3;
    const crossfadeTriggeredRef = useRef({audio1: false, audio2: false});
    const crossfadeIntervalRef = useRef(null);

    // Available songs in the audio folder
    const songs = [
        '/audio/NightOrchestra.ogg',
        '/audio/DoorToDoor.ogg',
        '/audio/DreamyLoop3.ogg',
        '/audio/StarSifting.ogg',
        '/audio/SyntheticWalk.ogg',
        '/audio/CrystalSnow.ogg'
    ];

    // Helper function to format song name from file path
    const formatTrackName = (filePath) => {
        const fileName = filePath.split('/').pop().split('.')[0];
        return fileName.replace(/([A-Z])/g, ' $1').replace(/(\d+)/g, ' $1').trim();
    };

    useEffect(() => {
        if (!isPlaying) return;

        const flipInterval = setInterval(() => {
            setSpeakerFlip(prev => {
                let newX, newY;
                do {
                    newX = Math.random() > 0.5 ? 1 : -1;
                    newY = Math.random() > 0.5 ? 1 : -1;
                } while (newX === prev.x && newY === prev.y);

                return {x: newX, y: newY};
            });
        }, 100);

        return () => clearInterval(flipInterval);
    }, [isPlaying]);

    const crossfade = (fadeOutAudio, fadeInAudio, newSong) => {
        if (crossfadeIntervalRef.current) {
            clearInterval(crossfadeIntervalRef.current);
        }

        const steps = 50;
        const stepDuration = fadeDuration / steps;
        let step = 0;

        fadeInAudio.src = newSong;
        fadeInAudio.volume = 0;
        fadeInAudio.play();

        crossfadeIntervalRef.current = setInterval(() => {
            step++;
            const progress = step / steps;

            if (fadeOutAudio) {
                fadeOutAudio.volume = targetVolume * (1 - progress);
            }

            fadeInAudio.volume = targetVolume * progress;

            if (step >= steps) {
                clearInterval(crossfadeIntervalRef.current);
                crossfadeIntervalRef.current = null;
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

        // Check if this is a different song (not just looping)
        const isDifferentTrack = currentSongRef.current !== selectedSong;

        // Save the selected song so it can loop
        currentSongRef.current = selectedSong;

        // Trigger blink animation when switching to a NEW track OR first button press
        if ((isDifferentTrack && isPlaying) || !isPlaying) {
            setIsBlinking(true);
            // Change text when opacity is at 0 (50% of 1.5s = 0.75s)
            setTimeout(() => {
                setTrackName(formatTrackName(selectedSong));
            }, 750);
            // Remove blink class after animation completes
            setTimeout(() => setIsBlinking(false), 1500);
        } else {
            // If not blinking, update immediately
            setTrackName(formatTrackName(selectedSong));
        }

        const currentAudioElement = currentAudio === 1 ? audio1Ref.current : audio2Ref.current;
        const nextAudioElement = currentAudio === 1 ? audio2Ref.current : audio1Ref.current;

        if (isPlaying) {
            crossfadeTriggeredRef.current = {audio1: false, audio2: false};
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

    return (<div>
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
                <div className={`record-arm `}>
                    <div className="arm-base-attachment"></div>
                    <div className="arm-base-attachment-outline"></div>
                    <div className={`arm-container ${isPlaying ? 'playing' : ''}`}>
                        <div className="arm-neck"></div>
                        <div className="arm-head"></div>
                    </div>
                </div>
                <div className="record-player-base">
                    <div
                        className={`record-player-speaker ${isPlaying ? 'playing' : ''}`}
                        style={{transform: `scaleX(${speakerFlip.x}) scaleY(${speakerFlip.y})`}}
                    ></div>
                    <div className="record-player-speaker-border"></div>
                    <div className="record-player-grills">
                        <div className="record-grill grill-1"></div>
                        <div className={`track-name ${isBlinking ? 'blinking' : ''}`}>{trackName}</div>
                        <div className="record-grill grill-2"></div>
                        <div className="record-grill grill-3"></div>
                        <div className="record-grill grill-4"></div>
                    </div>

                </div>
                <div className={`record-player-power-button ${isPlaying ? 'on' : 'off'}`} onClick={handleControlClick}>
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
            <div className="record-player-frame-shadow"></div>
        </div>
    );

}