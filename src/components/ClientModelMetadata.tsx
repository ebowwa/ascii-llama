"use client"
import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export interface ModelMetadataProps {
  modelPath: string;
}

const ModelMetadata: React.FC<ModelMetadataProps> = ({ modelPath }) => {
  const { nodes, materials, userData } = useGLTF(modelPath);

  useEffect(() => {
    console.log('Model Metadata:');
    console.log('Nodes:', nodes);
    console.log('Materials:', materials);
    console.log('Metadata:', userData);
  }, [nodes, materials, userData]);

  return null;
};

export default ModelMetadata;