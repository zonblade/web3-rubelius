"use client"
import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Html } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Loader, Model } from "./client.section.unified.model";
import { CE_PileWhite } from './_pile/client.white'
import { FaGlobe } from 'react-icons/fa6'
import { useInView } from 'motion/react'

export function PileReact() {
    return (
        <div className="w-full flex justify-center pb-[30px]">
            <CE_PileWhite
                title="The Solutions"
                width='150px'
                icon={
                    <FaGlobe size={24} />
                } />
        </div>
    )
}

export function CE_Sect_Unified() {
    // Create a ref for the section container
    const sectionRef = useRef(null)
    // Use the useInView hook to check if the section is visible
    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.1, // Trigger when at least 10% of the element is in view
        margin: "0px 0px 200px 0px" // Start loading a bit earlier before scrolling into view
    })

    return (
        <div ref={sectionRef} className="w-full flex justify-center h-screen">
            <div className="w-full h-full max-w-[1200px]">
                <div className="w-full h-full relative">
                    {/* Canvas with smooth opacity transition */}
                    <div 
                        className="w-full h-full absolute top-0 left-0" 
                        style={{
                            opacity: isInView ? 1 : 0,
                            transition: 'opacity 0.8s ease-in-out',
                        }}
                    >
                        {isInView && (
                            <Canvas
                                dpr={[0.8, 1.2]}
                                gl={{
                                    antialias: true,
                                    powerPreference: 'high-performance',
                                    alpha: true,
                                    stencil: false,
                                }}
                            >
                                <fog attach="fog" args={['#000', 15, 50]} />
                                <Suspense fallback={<Loader />}>
                                    <Environment preset="sunset" />
                                    <ambientLight intensity={5} />
                                    <spotLight
                                        position={[0, 0, -25]}
                                        intensity={18.8}
                                        angle={2.1}
                                        penumbra={0.9}
                                        color={'#00c8c8'}
                                    />
                                    <Model />
                                    <Html center position={[0, 0, 2]}>
                                        <div style={{
                                            position: 'relative',
                                            width: '500px',
                                            height: '500px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <div style={{
                                                position: 'absolute',
                                                width: '70%',
                                                height: '70%',
                                                borderRadius: '50%',
                                                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                                filter: 'blur(28px)',
                                                boxShadow: '0 0 20px rgba(0, 200, 200, 0.3)'
                                            }}></div>

                                            <div style={{
                                                position: 'relative',
                                                zIndex: 1,
                                                color: 'white',
                                                padding: '20px',
                                                textAlign: 'center'
                                            }}>
                                                <PileReact />
                                                <h2 style={{ fontSize: '28px', margin: '0 0 10px 0' }}>
                                                    <span style={{ color: 'white' }}>Unified Data</span>&nbsp;<span style={{ color: 'rgb(0, 200, 200)' }}>Zero</span>
                                                </h2>
                                                <p style={{ margin: '0', color: 'rgb(255, 255, 255, 0.3)' }}>
                                                    Your description is here.
                                                </p>
                                            </div>
                                        </div>
                                    </Html>
                                    <EffectComposer>
                                        <Bloom
                                            intensity={2.5}
                                            luminanceThreshold={0}
                                            luminanceSmoothing={0.9}
                                            kernelSize={5}
                                        />
                                    </EffectComposer>
                                </Suspense>
                            </Canvas>
                        )}
                    </div>
                    
                    {/* Placeholder with smooth opacity transition */}
                    <div 
                        className="w-full h-full flex justify-center items-center absolute top-0 left-0"
                        style={{
                            opacity: isInView ? 0 : 1,
                            transition: 'opacity 0.8s ease-in-out',
                        }}
                    >
                        {/* You can add a lightweight placeholder here */}
                        <div className="text-white opacity-50">Loading...</div>
                    </div>
                </div>
            </div>
        </div>
    )
}