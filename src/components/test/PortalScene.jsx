import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import GlobeJourney from './GlobeJourney';
import * as THREE from 'three';

function TimeWarp({ onComplete }) {
    const tunnelRef = useRef();
    const cameraSpeed = useRef(0.5);
    const totalDistance = useRef(0);

    useFrame((state) => {
        const cam = state.camera;

        // Move camera forward quickly
        cam.position.z -= cameraSpeed.current;
        totalDistance.current += cameraSpeed.current;

        // Speed ramp-up
        if (cameraSpeed.current < 1) cameraSpeed.current += 0.01;

        // End after sufficient movement
        if (totalDistance.current > 100) {
            onComplete(); // trigger globe
        }

        if (tunnelRef.current) {
            tunnelRef.current.rotation.z += 0.002;
        }
    });

    return (
        <group>
            {/* Glowing tunnel made of rings */}
            {[...Array(60)].map((_, i) => (
                <mesh
                    key={i}
                    position={[0, 0, -i * 2]}
                    rotation={[Math.PI / 2, 0, 0]}
                    ref={i === 0 ? tunnelRef : null}
                >
                    <ringGeometry args={[1.5, 2, 64]} />
                    <meshBasicMaterial
                        color="white"
                        side={THREE.DoubleSide}
                        transparent
                        opacity={0.3}
                    />
                </mesh>
            ))}

            {/* Light streaks */}
            {[...Array(100)].map((_, i) => (
                <mesh key={i} position={[
                    (Math.random() - 0.5) * 6,
                    (Math.random() - 0.5) * 6,
                    -Math.random() * 60
                ]}>
                    <boxGeometry args={[0.02, 0.02, 1.5]} />
                    <meshBasicMaterial color="white" transparent opacity={0.5} />
                </mesh>
            ))}
        </group>
    );
}



export default function PortalScene() {
    const [showEarth, setShowEarth] = useState(false);

    return (
        <div className="w-screen h-screen bg-black">
            {!showEarth ? (
                <Canvas camera={{ position: [0, 0, 10], fov: 70 }}>
                    <ambientLight intensity={1.2} />
                    <pointLight position={[5, 5, 5]} intensity={2} />
                    <Suspense fallback={null}>
                        <TimeWarp onComplete={() => setShowEarth(true)} />
                    </Suspense>
                    <OrbitControls enableZoom={false} enablePan={false} />
                </Canvas>
            ) : (
                <GlobeJourney />
            )}
        </div>
    );
}
