import React from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';
import { CanvasBlockData } from '../types';

interface CanvasBlockProps {
  block: CanvasBlockData;
  onChange: (id: string, content: string) => void;
  onAISuggest: (id: string) => void;
}

export const CanvasBlock: React.FC<CanvasBlockProps & { isAIAssistantActive: boolean }> = ({
  block,
  onChange,
  onAISuggest,
  isAIAssistantActive,
}) => {
  return (
    <section className={cn(
      "canvas-block p-5 flex flex-col relative group canvas-block-hover border-outline-variant/25 bg-surface-container-lowest",
      block.gridSpan,
      "border-r border-b"
    )}>
      <header className="flex flex-col gap-1 mb-2">
        <span className="text-[0.7rem] font-bold tracking-[0.05em] text-on-tertiary-fixed-variant uppercase">
          {block.title}
        </span>
        <p className="text-[0.65rem] text-on-surface-variant leading-tight">
          {block.description}
        </p>
      </header>
      
      <textarea
        className="flex-grow w-full bg-transparent border-none resize-none p-0 mt-2 text-sm leading-relaxed text-on-surface focus:ring-0 focus:outline-none placeholder:text-on-surface-variant/40"
        placeholder={block.placeholder}
        value={block.content}
        onChange={(e) => onChange(block.id, e.target.value)}
      />

      {isAIAssistantActive && (
        <button
          onClick={() => onAISuggest(block.id)}
          className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 bg-surface-container-high hover:bg-surface-container-highest text-primary border border-outline-variant/20 rounded-lg transition-all active:scale-95 cursor-pointer opacity-100"
        >
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Sugestão IA</span>
        </button>
      )}
    </section>
  );
};
