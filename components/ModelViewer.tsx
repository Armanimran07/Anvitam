import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage, PresentationControls } from '@react-three/drei';

interface ModelViewerProps {
    modelUrl?: string;
    autoRotate?: boolean;
}

const Model: React.FC<{ url: string }> = ({ url }) => {
    const { scene } = useGLTF(url);
    return <primitive object={scene} />;
};

const FallbackModel = () => {
    return (
        <mesh rotation={[0, Math.PI / 4, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#A0C878" />
        </mesh>
    )
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelUrl, autoRotate = true }) => {
    return (
        <div className="w-full h-full min-h-[400px] bg-anvitam-cream/20 rounded-lg overflow-hidden relative border border-anvitam-charcoal/5">

            {/* Label */}
            <div className="absolute top-4 left-4 z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-anvitam-charcoal/50 bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    3D View
                </span>
            </div>

            <Canvas dpr={[1, 2]} camera={{ fov: 45 }} shadows>
                <color attach="background" args={['#f0f0f0']} />

                {/* Interactive Controls */}
                <PresentationControls
                    speed={1.5}
                    global
                    zoom={0.5}
                    polar={[-0.1, Math.PI / 4]}
                >
                    <Stage environment="city" intensity={0.6} contactShadow={false}>
                        <Suspense fallback={null}>
                            {modelUrl ? <Model url={modelUrl} /> : <FallbackModel />}
                        </Suspense>
                    </Stage>
                </PresentationControls>

                {/* Orbit Controls for full inspection if needed, though PresentationControls handles "holding" the item */}
                {/* <OrbitControls autoRotate={autoRotate} /> */}
            </Canvas>

            <div className="absolute bottom-4 right-4 z-10 text-xs text-anvitam-charcoal/40 italic">
                Draft to rotate • Scroll to zoom
            </div>
        </div>
    );
};

export default ModelViewer;
