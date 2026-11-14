import React, { useState } from 'react';
import { Settings, HelpCircle, Download, Save, Pencil, Check, ArrowLeft } from 'lucide-react';
import { CanvasBlock } from '../components/CanvasBlock';
import { AIAssistant } from '../components/AIAssistant';
import { CanvasBlockData, CanvasConfig } from '../types';
import { cn } from '../lib/utils';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

interface CanvasPageProps {
  config: CanvasConfig;
  blocks: CanvasBlockData[];
  title: string;
  onContentChange: (id: string, content: string) => void;
  onTitleChange: (title: string) => void;
  onBack: () => void;
}

export const CanvasPage: React.FC<CanvasPageProps> = ({
  config,
  blocks,
  title,
  onContentChange,
  onTitleChange,
  onBack,
}) => {
  const [showAI, setShowAI] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [activeBlockId, setActiveBlockId] = useState<string | null>(null);
  const [isAIAssistantActive] = useState(true);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [tempTitle, setTempTitle] = useState(title);

  const triggerAISuggestion = (id: string) => {
    const block = blocks.find(b => b.id === id);
    if (!block) return;

    setActiveBlockId(id);
    setAiSuggestion(config.suggestions[id] || config.suggestions.default);
    setShowAI(true);
  };

  const applySuggestion = () => {
    if (activeBlockId) {
      const current = blocks.find(b => b.id === activeBlockId)?.content || '';
      onContentChange(activeBlockId, current + '\n\n[Sugestão IA Aplicada]');
    }
    setShowAI(false);
  };

  const handleTitleSave = () => {
    onTitleChange(tempTitle.trim() || config.defaultTitle);
    setIsEditingTitle(false);
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleTitleSave();
    if (e.key === 'Escape') {
      setTempTitle(title);
      setIsEditingTitle(false);
    }
  };

  const loadDemo = () => {
    if (!config.demo) return;
    onTitleChange(config.demo.title);
    Object.entries(config.demo.blocks).forEach(([id, content]) => onContentChange(id, content));
  };

  const handleExport = () => {
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const margin = 10;
    const pageWidth = doc.internal.pageSize.getWidth();
    const contentWidth = pageWidth - margin * 2;

    // Header — amber accent swatch echoes the canvas brand sticker
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.setFillColor(253, 230, 138);
    doc.rect(margin - 2, 6, doc.getTextWidth(config.label) + 6, 10, 'F');
    doc.setTextColor(33, 33, 33);
    doc.text(config.label, margin, 14);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    const titleLines = doc.splitTextToSize(title, contentWidth);
    doc.text(titleLines, margin, 22);

    doc.setFontSize(9);
    const headerBottom = 22 + titleLines.length * 5 + 5;
    doc.text(`Gerado em: ${new Date().toLocaleString('pt-BR')}`, margin, headerBottom);

    // Table Data
    const tableData = blocks.map(block => [
      block.title,
      block.content || '(Vazio)'
    ]);

    // Proportional column widths so the table always fits the page width, in any orientation.
    const fieldWidth = contentWidth * 0.22;
    const contentColWidth = contentWidth - fieldWidth;

    autoTable(doc, {
      startY: headerBottom + 6,
      head: [['Campo', 'Conteúdo']],
      body: tableData,
      theme: 'striped',
      headStyles: { fillColor: [86, 94, 116], textColor: [255, 255, 255], fontSize: 10 },
      bodyStyles: { fontSize: 9, valign: 'top' },
      columnStyles: {
        0: { cellWidth: fieldWidth, fontStyle: 'bold' },
        1: { cellWidth: contentColWidth }
      },
      styles: { overflow: 'linebreak', cellPadding: 3 },
      tableWidth: contentWidth,
      margin: { top: headerBottom + 6, left: margin, right: margin, bottom: margin }
    });

    doc.save(`${title.replace(/\s+/g, '_')}_Relatorio_${config.fileSuffix}.pdf`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      {/* Header */}
      <header className="bg-white border-b border-outline-variant/10 px-4 md:px-6 py-3 md:py-4 flex flex-col md:flex-row justify-between items-center z-10 gap-4 md:gap-0">
        <div className="flex items-center justify-between w-full md:w-auto gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={onBack}
              aria-label="Voltar para as ferramentas"
              className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <span className="-rotate-2 bg-amber-200 px-2 text-xl md:text-2xl font-black tracking-tighter text-on-surface whitespace-nowrap">
              {config.label}
            </span>
          </div>
          {/* Mobile settings icon */}
          <div className="md:hidden flex items-center gap-2">
            <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors cursor-pointer">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between w-full md:w-auto gap-3">
          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors cursor-pointer">
              <Settings className="w-5 h-5" />
            </button>
            <button
              onClick={config.demo ? loadDemo : undefined}
              aria-label="Ajuda"
              className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <HelpCircle className="w-5 h-5" />
              {config.demo && <span className="text-sm font-semibold">Ajuda</span>}
            </button>
            <div className="h-6 w-px bg-outline-variant/20 mx-2" />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-4 py-2 text-sm font-semibold text-on-surface hover:bg-surface-container rounded-md transition-all active:scale-95 flex items-center justify-center gap-2 border border-outline-variant/10 md:border-none cursor-pointer">
              <Save className="w-4 h-4" />
              Save
            </button>
            <button
              onClick={handleExport}
              className="flex-1 md:flex-none px-5 py-2 text-sm font-semibold bg-primary text-on-primary rounded-md shadow-sm hover:opacity-90 transition-all active:scale-95 bg-gradient-to-b from-primary-dim to-primary flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col w-full overflow-hidden">
        {/* Project Title Section */}
        <div className="px-4 md:px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-end bg-white border-b border-outline-variant/20 gap-4 md:gap-0">
          <div className="flex flex-col w-full md:w-auto">
            <div className="flex items-center gap-3 group">
              {isEditingTitle ? (
                <div className="flex items-center gap-2 w-full">
                  <input
                    autoFocus
                    type="text"
                    value={tempTitle}
                    onChange={(e) => setTempTitle(e.target.value)}
                    onBlur={handleTitleSave}
                    onKeyDown={handleTitleKeyDown}
                    className="text-2xl md:text-3xl font-black tracking-tight leading-none text-on-surface bg-surface-container-low px-2 py-1 rounded-md border-none focus:ring-2 focus:ring-primary outline-none w-full"
                  />
                  <button onClick={handleTitleSave} className="p-1 text-primary hover:bg-surface-container rounded-full transition-colors cursor-pointer">
                    <Check className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <>
                  <h1
                    onClick={() => { setIsEditingTitle(true); setTempTitle(title); }}
                    className="text-2xl md:text-3xl font-black tracking-tight leading-none text-on-surface cursor-pointer hover:text-primary transition-colors break-words max-w-[80vw] md:max-w-none"
                  >
                    {title}
                  </h1>
                  <button
                    onClick={() => { setIsEditingTitle(true); setTempTitle(title); }}
                    className="p-1 text-on-surface-variant/40 hover:text-primary opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
            <p className="mt-1 text-on-surface-variant font-medium tracking-wide text-[10px] uppercase">{config.subtitle}</p>
          </div>
          <div className="flex items-center gap-3 self-end md:self-auto">
            <span className={cn(
              "text-[10px] font-bold uppercase tracking-wider transition-colors",
              isAIAssistantActive ? "text-primary" : "text-on-surface-variant/40"
            )}>
              AI Assistant {isAIAssistantActive ? 'On' : 'Off'}
            </span>
            <button
              disabled
              className={cn(
                "relative w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none cursor-not-allowed opacity-80",
                isAIAssistantActive ? "bg-primary" : "bg-surface-container-highest"
              )}
            >
              <div className={cn(
                "absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform duration-200",
                isAIAssistantActive ? "translate-x-5" : "translate-x-0"
              )} />
            </button>
          </div>
        </div>

        {/* The Grid Canvas */}
        <div className={cn(
          'flex-grow grid bg-surface-container-low border-t border-l border-outline-variant/25 overflow-y-auto',
          config.gridContainerClassName
        )}>
          {blocks.map((block) => (
            <CanvasBlock
              key={block.id}
              block={block}
              onChange={onContentChange}
              onAISuggest={triggerAISuggestion}
              isAIAssistantActive={false}
            />
          ))}
        </div>
      </main>

      {/* AI Assistant Panel */}
      <AIAssistant
        isVisible={showAI}
        suggestion={aiSuggestion}
        onApply={applySuggestion}
        onIgnore={() => setShowAI(false)}
      />
    </div>
  );
};
