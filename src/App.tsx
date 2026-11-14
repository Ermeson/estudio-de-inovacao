import React, { useState } from 'react';
import { CANVASES, CanvasBlockData } from './types';
import { useHashRoute } from './lib/router';
import { Home } from './pages/Home';
import { CanvasPage } from './pages/CanvasPage';

type CanvasState = { blocks: CanvasBlockData[]; title: string };

export default function App() {
  const { route, navigate } = useHashRoute();

  const [canvasData, setCanvasData] = useState<Record<string, CanvasState>>(() =>
    Object.fromEntries(CANVASES.map(c => [c.id, { blocks: c.blocks, title: c.defaultTitle }]))
  );

  const activeCanvas = CANVASES.find(c => c.path === route);

  if (!activeCanvas) {
    return <Home onOpen={navigate} />;
  }

  const data = canvasData[activeCanvas.id];

  const handleContentChange = (id: string, content: string) => {
    setCanvasData(prev => ({
      ...prev,
      [activeCanvas.id]: {
        ...prev[activeCanvas.id],
        blocks: prev[activeCanvas.id].blocks.map(b => (b.id === id ? { ...b, content } : b)),
      },
    }));
  };

  const handleTitleChange = (title: string) => {
    setCanvasData(prev => ({
      ...prev,
      [activeCanvas.id]: { ...prev[activeCanvas.id], title },
    }));
  };

  return (
    <CanvasPage
      config={activeCanvas}
      blocks={data.blocks}
      title={data.title}
      onContentChange={handleContentChange}
      onTitleChange={handleTitleChange}
      onBack={() => navigate('')}
    />
  );
}
