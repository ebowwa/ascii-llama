import { NextResponse } from 'next/server';
import ModelMetadata, { ModelMetadataProps } from '@/components/ClientModelMetadata';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const modelPath = searchParams.get('modelPath');

  if (!modelPath) {
    return NextResponse.json({ error: 'Model path is required' }, { status: 400 });
  }

  const modelMetadata = await ModelMetadata({ modelPath });

  return NextResponse.json({
    modelMetadata,
  });
}