// app/api/model-metadata/route.ts
import { NextResponse } from 'next/server';
import { useGLTF } from '@react-three/drei';
import path from 'path';
import fs from 'fs';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const modelPath = searchParams.get('modelPath');

  if (!modelPath) {
    return NextResponse.json({ error: 'Model path is required' }, { status: 400 });
  }

  try {
    let modelData;

    // Check if the model path is a remote URL
    if (modelPath.startsWith('http')) {
      modelData = await useGLTF(modelPath);
    } else {
      // Assume the model path is a local file path
      const fullPath = path.join(process.cwd(), modelPath);
      const modelBuffer = await fs.promises.readFile(fullPath);
      modelData = await useGLTF(`data:model/gltf-binary;base64,${modelBuffer.toString('base64')}`);
    }

    const { nodes, materials, scene, animations } = modelData;
    const modelMetadata = {
      nodes,
      materials,
      scene,
      animations,
    };

    return NextResponse.json({ modelMetadata });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error loading model metadata' }, { status: 500 });
  }
}