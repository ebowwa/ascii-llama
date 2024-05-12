// src/components/ModelMetadata.tsx
"use client"
import React, { useEffect, useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useGLTF } from '@react-three/drei';

interface ModelMetadataProps {
  modelPath: string;
}

const ModelLoader: React.FC<ModelMetadataProps> = ({ modelPath }) => {
  const { nodes, materials, scene, animations } = useGLTF(modelPath);

  useEffect(() => {
    console.log('Model Metadata:');
    console.log('Nodes:', nodes);
    console.log('Materials:', materials);
    console.log('Scene:', scene);
    console.log('Animations:', animations);
  }, [nodes, materials, scene, animations]);

  return null;
};

const ModelMetadata: React.FC<ModelMetadataProps> = ({ modelPath }) => {
  return (
    <Canvas>
      <ModelLoader modelPath={modelPath} />
    </Canvas>
  );
};

export default ModelMetadata;