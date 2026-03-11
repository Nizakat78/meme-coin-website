"use client";

import { useMemo } from "react";
import * as THREE from "three";

// Dynamic imports for Three.js components to avoid SSR issues
const CanvasWrapper = async () => {
  const { Canvas } = await import("@react-three/fiber");
  return Canvas;
};

const FloatWrapper = async () => {
  const { Float } = await import("@react-three/drei");
  return Float;
};

const StarsWrapper = async () => {
  const { Stars } = await import("@react-three/drei");
  return Stars;
};

const SparklesWrapper = async () => {
  const { Sparkles } = await import("@react-three/drei");
  return Sparkles;
};

import dynamic from "next/dynamic";

const Canvas = dynamic(CanvasWrapper, { ssr: false, loading: () => null });
const Float = dynamic(FloatWrapper, { ssr: false, loading: () => null });
const Stars = dynamic(StarsWrapper, { ssr: false, loading: () => null });
const Sparkles = dynamic(SparklesWrapper, { ssr: false, loading: () => null });

// Pre-generate random values for geometry selection using a fixed seed approach
const useRandomGeometry = (seed: number) => {
  return useMemo(() => {
    const geometries = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.OctahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1, 0),
      new THREE.TorusGeometry(0.7, 0.3, 8, 16),
    ];
    // Use a deterministic pseudo-random based on seed
    const randomIndex = Math.abs(Math.sin(seed) * 10000) % geometries.length;
    return geometries[Math.floor(randomIndex)];
  }, [seed]);
};

// Pre-generate random particle positions using seeded random
const useParticlePositions = (count: number, radius: number, seed: number) => {
  return useMemo(() => {
    const positions = new Float32Array(count * 3);
    let localSeed = seed;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      // Seeded pseudo-random
      localSeed = Math.sin(localSeed * 12.9898) * 43758.5453;
      const randomVal = localSeed - Math.floor(localSeed);
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (randomVal - 0.5) * 0.5;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return positions;
  }, [count, radius, seed]);
};

// Floating geometric shapes
function FloatingShape({ position, color, scale, seed }: { position: [number, number, number]; color: string; scale: number; seed: number }) {
  const geometry = useRandomGeometry(seed);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position} scale={[scale, scale, scale]}>
        <primitive object={geometry} attach="geometry" />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.6}
          metalness={0.8}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

// Animated coin/token
function FloatingToken() {
  return (
    <mesh position={[0, 0, 2]} scale={[0.5, 0.5, 0.5]}>
      <cylinderGeometry args={[1, 1, 0.2, 32]} attach="geometry" />
      <meshStandardMaterial
        color="#98F5FF"
        metalness={0.9}
        roughness={0.1}
        emissive="#98F5FF"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

// Particle ring
function ParticleRing({ radius, count, color, seed }: { radius: number; count: number; color: string; seed: number }) {
  const particles = useParticlePositions(count, radius, seed);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={color}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Main 3D Scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#98F5FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#B8A9FF" />
      <spotLight position={[0, 10, 0]} intensity={0.8} color="#5CE0FF" />

      {/* Stars background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      {/* Sparkles */}
      <Sparkles count={100} scale={12} size={4} speed={0.4} opacity={0.5} color="#98F5FF" />

      {/* Floating geometric shapes with unique seeds */}
      <FloatingShape position={[-4, 2, -5]} color="#98F5FF" scale={0.8} seed={1} />
      <FloatingShape position={[4, -2, -6]} color="#B8A9FF" scale={0.6} seed={2} />
      <FloatingShape position={[-3, -3, -4]} color="#5CE0FF" scale={0.5} seed={3} />
      <FloatingShape position={[3, 3, -7]} color="#FFB8D9" scale={0.7} seed={4} />
      <FloatingShape position={[0, 4, -5]} color="#A8FFD4" scale={0.4} seed={5} />

      {/* Particle rings with unique seeds */}
      <ParticleRing radius={6} count={50} color="#98F5FF" seed={6} />
      <ParticleRing radius={8} count={80} color="#B8A9FF" seed={7} />

      {/* Floating token in center */}
      <FloatingToken />
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
