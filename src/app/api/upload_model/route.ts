// app/api/upload/route.ts
import { NextResponse } from 'next/server';
import { Buffer } from 'buffer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const glbFile = formData.get('glb');

    if (!glbFile || typeof glbFile !== 'object' || !(glbFile instanceof File)) {
      return NextResponse.json({ error: 'No GLB file provided' }, { status: 400 });
    }

    const glbBuffer = Buffer.from(await glbFile.arrayBuffer());

    // Here, you can process the GLB model data, e.g., save it to a database, upload to a storage service, etc.
    console.log('Received GLB model:', glbBuffer);

    return NextResponse.json({ message: 'GLB model received successfully' });
  } catch (error) {
    console.error('Error processing GLB model:', error);
    return NextResponse.json({ error: 'Error processing GLB model' }, { status: 500 });
  }
}