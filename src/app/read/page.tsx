'use client';

import React from 'react';
import ModelMetadata from '@/components/ClientModelMetadata';

const HomePage: React.FC = () => {
  const modelPath = 'https://cdn.jsdelivr.net/gh/ebowwar/threejs-assets@main/coin.glb';

  return (
    <div>
      <h1>Model Metadata</h1>
      <ModelMetadata modelPath={modelPath} />
    </div>
  );
};

export default HomePage;