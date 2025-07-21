"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PointerLockControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useEffect, useState } from "react";

function MinecraftModel() {
  const gltf = useGLTF("/world.glb");
  const scene = gltf.scene;
  useEffect(() => {
    scene.traverse((child) => {
      if (
        child instanceof THREE.Mesh &&
        child.material &&
        child.material.name.toLowerCase().includes("water")
      ) {
        const material = child.material as THREE.MeshStandardMaterial;
        material.transparent = true;
        material.opacity = 0.9; // Adjust as needed
        material.depthWrite = false; // Prevent z-buffer conflicts
      }
    });
  }, [scene]);

  return (
    <group scale={[0.7, 0.7, 0.7]} position={[0, -7, 0]}>
      <primitive object={gltf.scene} />
    </group>
  );
}

function WASDControls() {
  const { camera } = useThree();
  const velocity = useRef(new THREE.Vector3());

  const keysRef = useRef({
    w: false,
    a: false,
    s: false,
    d: false,
    space: false,
    shift: false,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.code) {
        case "KeyW":
          keysRef.current.w = true;
          break;
        case "KeyA":
          keysRef.current.a = true;
          break;
        case "KeyS":
          keysRef.current.s = true;
          break;
        case "KeyD":
          keysRef.current.d = true;
          break;
        case "Space":
          keysRef.current.space = true;
          break;
        case "ShiftLeft":
          keysRef.current.shift = true;
          break;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      switch (e.code) {
        case "KeyW":
          keysRef.current.w = false;
          break;
        case "KeyA":
          keysRef.current.a = false;
          break;
        case "KeyS":
          keysRef.current.s = false;
          break;
        case "KeyD":
          keysRef.current.d = false;
          break;
        case "Space":
          keysRef.current.space = false;
          break;
        case "ShiftLeft":
          keysRef.current.shift = false;
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame((_, delta) => {
    const speed = 6;
    const keys = keysRef.current;
    velocity.current.set(0, 0, 0);

    if (document.pointerLockElement) {
      if (keys.w) velocity.current.z -= speed * delta;
      if (keys.s) velocity.current.z += speed * delta;
      if (keys.a) velocity.current.x -= speed * delta;
      if (keys.d) velocity.current.x += speed * delta;
      if (keys.space) velocity.current.y += speed * delta; // Up
      if (keys.shift) velocity.current.y -= speed * delta; // Down

      camera.translateX(velocity.current.x);
      camera.translateY(velocity.current.y);
      camera.translateZ(velocity.current.z);
    }
  });

  return null;
}

export default function MinecraftScene() {
  const [started, setStarted] = useState(false);
  return (
    <div className="relative h-full w-full">
      {!started && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/70 text-white cursor-pointer"
          onClick={() => setStarted(true)}
        >
          <button className="px-6 py-3 bg-white text-black font-bold rounded-lg shadow-md hover:bg-gray-200 transition">
            Start Exploring
          </button>
        </div>
      )}
      <Canvas id="myCanvas" camera={{ position: [15, 12, -15], fov: 70 }}>
        {started && (
          <>
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 15, 5]} intensity={1.5} />
            <MinecraftModel />
            <WASDControls />
            <PointerLockControls selector="#myCanvas" />
          </>
        )}
      </Canvas>
    </div>
  );
}
