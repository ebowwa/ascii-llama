import { use } from 'react';
import { NextResponse } from 'next/server';
import ModelMetadata from '@/components/ModelMetadata';

export async function GET(request: Request) {
  // Get the model path from the incoming request
  const { searchParams } = new URL(request.url);
  const modelPath = searchParams.get('modelPath');

  if (!modelPath) {
    return NextResponse.json({ error: 'Model path is required' }, { status: 400 });
  }

  // Use the ModelMetadata component to fetch the model data
  const modelData = use(
    Promise.resolve({
      nodes: {},
      materials: {},
      scene: {},
      animations: [],
    })
  );

  return NextResponse.json(modelData);
}