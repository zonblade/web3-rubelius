"use client"
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from 'react'
import { Html, useProgress } from '@react-three/drei'

// Preload the model outside component rendering cycle
useGLTF.preload("assets/energy/scene.gltf");

export function Loader() {
    const { progress } = useProgress();

    // Disable scrolling when loader is mounted
    useEffect(() => {
        const originalStyle = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = originalStyle;
        }
    }, []);

    return (
        <Html center>
            <div style={{ width: '256px', borderRadius: '9999px', padding: '4px' }}>
                <div
                    style={{
                        width: `${progress}%`,
                        // backgroundColor: 'darkcyan',
                        height: '12px',
                        borderRadius: '9999px',
                        transition: 'width 0.3s'
                    }}
                />
            </div>
            <p style={{ color: 'darkcyan', marginTop: '8px' }}>{progress.toFixed(2)}% loaded</p>
        </Html>
    );
}

export function Model() {
    const group = useRef(null);

    // Use a ref to track if component is mounted
    const isMounted = useRef(false);

    // Load model with error handling
    const { scene, animations } = useGLTF("assets/energy/scene.gltf");
    const { actions } = useAnimations(animations, group);

    // Play animations after component mounts
    useEffect(() => {
        isMounted.current = true;

        if (actions && Object.keys(actions).length > 0) {
            // Use a small timeout to ensure DOM is ready
            const timer = setTimeout(() => {
                if (isMounted.current) {
                    Object.values(actions).forEach((action) => {
                        action?.play();
                    });
                }
            }, 100);

            return () => {
                clearTimeout(timer);
                isMounted.current = false;
            }
        }
    }, [actions]);

    return (
        <group ref={group}>
            <primitive
                object={scene}
                scale={2}
                position={[0, 0, 0]}
                castShadow
                receiveShadow
            />
        </group>
    );
}
