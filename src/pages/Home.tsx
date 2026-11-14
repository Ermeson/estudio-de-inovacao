import React from 'react';
import { Settings, HelpCircle, ArrowRight } from 'lucide-react';
import { CANVASES } from '../types';

interface HomeProps {
  onOpen: (path: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpen }) => {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <header className="bg-white border-b border-outline-variant/10 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        <span className="-rotate-2 bg-amber-200 px-2 text-xl md:text-2xl font-black tracking-tighter text-on-surface whitespace-nowrap">
          Estúdio de Inovação
        </span>
        <div className="flex items-center gap-2">
          <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors cursor-pointer">
            <Settings className="w-5 h-5" />
          </button>
          <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors cursor-pointer">
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="flex-grow px-4 md:px-6 py-10">
        <h1 className="text-2xl md:text-3xl font-black tracking-tight text-on-surface mb-1">Ferramentas</h1>
        <p className="text-on-surface-variant text-sm mb-8">Escolha um canvas para começar a estruturar sua estratégia.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
          {CANVASES.map(canvas => (
            <button
              key={canvas.id}
              onClick={() => onOpen(canvas.path)}
              className="text-left p-6 bg-surface-container-lowest border border-outline-variant/25 rounded-xl canvas-block-hover transition-all flex flex-col gap-2 cursor-pointer"
            >
              <span className="text-[0.7rem] font-bold tracking-[0.05em] text-on-tertiary-fixed-variant uppercase">
                {canvas.label}
              </span>
              <p className="text-sm text-on-surface-variant leading-relaxed">{canvas.subtitle}</p>
              <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-primary">
                Abrir <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};
