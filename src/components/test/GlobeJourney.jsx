import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';

const LOCATIONS = [
    {
        name: 'Varanasi',
        lat: 25.3176,
        lng: 82.9739,
        content: 'Where I was born and raised.',
    },
    {
        name: 'Delhi',
        lat: 28.6139,
        lng: 77.209,
        content: 'Moved here for school.',
    },
    {
        name: 'Amaravati',
        lat: 16.5408,
        lng: 80.5154,
        content: 'College life in Amaravati.',
    }
];

export default function GlobeJourney() {
    const globeRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    // Arc data between each pair of locations
    const arcsData = LOCATIONS.map((loc, i) => {
        if (i === LOCATIONS.length - 1) return null;
        return {
            startLat: loc.lat,
            startLng: loc.lng,
            endLat: LOCATIONS[i + 1].lat,
            endLng: LOCATIONS[i + 1].lng,
            color: ['#00ffff'],
        };
    }).filter(Boolean);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % LOCATIONS.length);
        }, 5000); // change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const location = LOCATIONS[currentIndex];
        if (globeRef.current) {
            globeRef.current.pointOfView(
                {
                    lat: location.lat,
                    lng: location.lng,
                    altitude: 1.5
                },
                2000
            );
        }
    }, [currentIndex]);

    return (
        <div className="w-screen h-screen bg-black">
            <Globe
                ref={globeRef}
                globeImageUrl="/earth.jpg"
                bumpImageUrl="/bump.png"
                backgroundColor="black"
                arcsData={arcsData}
                arcColor={'color'}
                arcDashLength={0.4}
                arcDashGap={2}
                arcDashInitialGap={() => Math.random() * 5}
                arcDashAnimateTime={4000}
                arcStroke={1.5}
                arcAltitude={0.2}
                labelsData={LOCATIONS}
                labelLat={(d) => d.lat}
                labelLng={(d) => d.lng}
                labelText={(d) => d.name}
                labelSize={1.2}
                labelDotRadius={0.3}
                labelColor={() => 'white'}
                labelResolution={2}
            />

            {/* Optional UI Overlay */}
            <div className="absolute bottom-10 w-full text-center text-white text-xl font-mono pointer-events-none">
                <p>{LOCATIONS[currentIndex].content}</p>
            </div>
        </div>
    );
}
