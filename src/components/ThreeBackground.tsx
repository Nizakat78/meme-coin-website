"use client";

import dynamic from "next/dynamic";
import { useMemo, useRef } from "react";
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

const MeshDistortMaterialWrapper = async () => {
  const { MeshDistortMaterial } = await import("@react-three/drei");
  return MeshDistortMaterial;
};

const Canvas = dynamic(CanvasWrapper, { ssr: false, loading: () => null });
const Float = dynamic(FloatWrapper, { ssr: false, loading: () => null });
const Stars = dynamic(StarsWrapper, { ssr: false, loading: () => null });
const Sparkles = dynamic(SparklesWrapper, { ssr: false, loading: () => null });
const MeshDistortMaterial = dynamic(MeshDistortMaterialWrapper, { ssr: false, loading: () => null });

// Floating geometric shapes with distortions
function FloatingShape({ position, color, scale, speed, type = "icosahedron" }: { 
  position: [number, number, number]; 
  color: string; 
  scale: number; 
  speed: number;
  type?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    switch(type) {
      case "octahedron":
        return new THREE.OctahedronGeometry(1, 0);
      case "tetrahedron":
        return new THREE.TetrahedronGeometry(1, 0);
      case "torus":
        return new THREE.TorusGeometry(0.7, 0.3, 8, 16);
      default:
        return new THREE.IcosahedronGeometry(1, 0);
    }
  }, [type]);

  return (
    <Float speed={speed * 2} rotationIntensity={speed} floatIntensity={speed}>
      <mesh ref={meshRef} position={position} scale={[scale, scale, scale]}>
        <primitive object={geometry} attach="geometry" />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.7}
          metalness={0.9}
          roughness={0.1}
          emissive={color}
          emissiveIntensity={0.5}
          distort={0.4}
          speed={speed * 2}
        />
      </mesh>
    </Float>
  );
}

// Animated 3D Token/Coin
function FloatingToken() {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh ref={meshRef} position={[0, 0, 2]} scale={[0.6, 0.6, 0.6]}>
      <cylinderGeometry args={[1, 1, 0.3, 64]} attach="geometry" />
      <MeshDistortMaterial
        color="#4ade80"
        metalness={1}
        roughness={0.1}
        emissive="#22c55e"
        emissiveIntensity={0.8}
        distort={0.2}
        speed={2}
      />
    </mesh>
  );
}

// Particle ring with animation
function ParticleRing({ radius, count, color, speed }: { radius: number; count: number; color: string; speed: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.sin(angle * 3) - 0.5) * 0.5;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return positions;
  }, [radius, count]);

  return (
    <points ref={pointsRef}>
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
        size={0.08}
        color={color}
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Animated sphere with glow
function GlowingSphere({ position, color, scale }: { position: [number, number, number]; color: string; scale: number }) {
  return (
    <mesh position={position} scale={[scale, scale, scale]}>
      <sphereGeometry args={[1, 32, 32]} attach="geometry" />
      <MeshDistortMaterial
        color={color}
        transparent
        opacity={0.3}
        emissive={color}
        emissiveIntensity={0.8}
        distort={0.3}
        speed={3}
      />
    </mesh>
  );
}

// Main 3D Scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#4ade80" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#22d3bf" />
      <spotLight position={[0, 10, 0]} intensity={1.2} color="#86efac" />
      <pointLight position={[0, -10, 0]} intensity={0.8} color="#a78bfa" />

      {/* Stars background */}
      <Stars radius={100} depth={50} count={8000} factor={4} saturation={0.5} fade speed={2} />

      {/* Sparkles */}
      <Sparkles count={150} scale={14} size={5} speed={0.6} opacity={0.7} color="#4ade80" />

      {/* Floating geometric shapes with various types */}
      <FloatingShape position={[-5, 3, -6]} color="#4ade80" scale={0.9} speed={1.5} type="icosahedron" />
      <FloatingShape position={[5, -3, -7]} color="#22d3bf" scale={0.7} speed={1.2} type="octahedron" />
      <FloatingShape position={[-4, -4, -5]} color="#86efac" scale={0.6} speed={1.8} type="tetrahedron" />
      <FloatingShape position={[4, 4, -8]} color="#38bdf8" scale={0.8} speed={1.3} type="torus" />
      <FloatingShape position={[0, 5, -6]} color="#a78bfa" scale={0.5} speed={1.6} type="icosahedron" />
      <FloatingShape position={[-6, -2, -4]} color="#f472b6" scale={0.4} speed={2} type="torus" />

      {/* Glowing spheres */}
      <GlowingSphere position={[7, 2, -5]} color="#4ade80" scale={0.8} />
      <GlowingSphere position={[-7, -3, -6]} color="#22d3bf" scale={0.6} />
      <GlowingSphere position={[3, -5, -7]} color="#86efac" scale={0.5} />

      {/* Particle rings */}
      <ParticleRing radius={7} count={60} color="#4ade80" speed={0.5} />
      <ParticleRing radius={9} count={80} color="#22d3bf" speed={0.3} />
      <ParticleRing radius={11} count={100} color="#86efac" speed={0.2} />

      {/* Floating token in center */}
      <FloatingToken />
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
