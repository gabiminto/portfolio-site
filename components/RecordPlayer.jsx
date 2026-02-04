import React from 'react';
import '../styles/RecordPlayer.css';

export default function RecordPlayer() {


    return (
        <div className="record-player-frame">
            <div className="record">
                <svg className="record-rings" viewBox="0 0 200 200">
                    <circle
                        cx="100"
                        cy="100"
                        r="95"
                        className="outer-ring"
                    />
                    <circle
                        cx="100"
                        cy="100"
                        r="75"
                        className="inner-ring"
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
            </div>


        </div>
    );

}