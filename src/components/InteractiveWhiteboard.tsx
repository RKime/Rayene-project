import React, { useRef, useState, useEffect } from 'react';
import { Pen, Eraser, Trash2, StickyNote, Wand2, Download, Undo } from 'lucide-react';

interface Note {
  id: string;
  x: number;
  y: number;
  text: string;
  color: string;
}

export const InteractiveWhiteboard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#1c1917');
  const [brushSize, setBrushSize] = useState(3);
  const [tool, setTool] = useState<'pen' | 'highlighter' | 'eraser'>('pen');
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      x: 15,
      y: 15,
      text: 'Objectif Sprint : Valider le MVP TNI & tester l\'UX tactile.',
      color: '#fef08a'
    },
    {
      id: '2',
      x: 15,
      y: 140,
      text: 'Note IA : 94% de fluidité enregistrée sur le contrôleur PCAP.',
      color: '#bfdbfe'
    }
  ]);
  const [history, setHistory] = useState<ImageData[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Initial canvas background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Subtle grid dots to simulate smart board
    drawGrid(ctx, rect.width, rect.height);

    // Save initial state to history
    saveState();
  }, []);

  const drawGrid = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.fillStyle = '#e2e8f0';
    for (let x = 20; x < width; x += 30) {
      for (let y = 20; y < height; y += 30) {
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  };

  const saveState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setHistory((prev) => [...prev.slice(-10), imageData]);
  };

  const undo = () => {
    if (history.length <= 1) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const newHistory = [...history];
    newHistory.pop(); // remove current
    const previousState = newHistory[newHistory.length - 1];
    ctx.putImageData(previousState, 0, 0);
    setHistory(newHistory);
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (tool === 'eraser') {
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = brushSize * 6;
      ctx.globalAlpha = 1;
    } else if (tool === 'highlighter') {
      ctx.strokeStyle = '#facc15';
      ctx.lineWidth = brushSize * 4;
      ctx.globalAlpha = 0.35;
    } else {
      ctx.strokeStyle = color;
      ctx.lineWidth = brushSize;
      ctx.globalAlpha = 1;
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      saveState();
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, rect.width, rect.height);
    drawGrid(ctx, rect.width, rect.height);
    saveState();
  };

  const addStickyNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      x: 80 + Math.random() * 200,
      y: 120 + Math.random() * 150,
      text: 'Nouvelle note d’équipe...',
      color: ['#fef08a', '#bbf7d0', '#bfdbfe', '#fbcfe8'][Math.floor(Math.random() * 4)]
    };
    setNotes((prev) => [...prev, newNote]);
  };

  const updateNoteText = (id: string, text: string) => {
    setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, text } : n)));
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  // Simulate AI Vectorization: generates a clean architecture diagram
  const simulateAIVectorization = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    // Clear and redraw grid
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, rect.width, rect.height);
    drawGrid(ctx, rect.width, rect.height);

    const startX = 60;
    const startY = 180;

    // Box 1: Client Web / App
    drawVectorBox(ctx, startX, startY, 140, 70, 'Interface TNI 4K', 'Touchscreen Surface', '#0284c7');
    // Box 2: API Gateway / Hub
    drawVectorBox(ctx, startX + 220, startY, 150, 70, 'Moteur IA Copilot', 'Reconnaissance Sémantique', '#7c3aed');
    // Box 3: Cloud Database / Sync
    drawVectorBox(ctx, startX + 450, startY, 150, 70, 'Cloud Canvas Sync', 'Microsoft Graph / Vibe', '#059669');

    // Arrows
    drawArrow(ctx, startX + 140, startY + 35, startX + 220, startY + 35, 'Inking 400Hz');
    drawArrow(ctx, startX + 370, startY + 35, startX + 450, startY + 35, 'Vector JSON');

    saveState();
  };

  const drawVectorBox = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    title: string,
    subtitle: string,
    strokeColor: string
  ) => {
    ctx.lineWidth = 2;
    ctx.strokeStyle = strokeColor;
    ctx.fillStyle = strokeColor + '10'; // 10% opacity fill

    // Rounded rectangle
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, 8);
    ctx.fill();
    ctx.stroke();

    // Text
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 12px Outfit, sans-serif';
    ctx.fillText(title, x + 12, y + 28);

    ctx.fillStyle = '#64748b';
    ctx.font = '10px Outfit, sans-serif';
    ctx.fillText(subtitle, x + 12, y + 48);
  };

  const drawArrow = (
    ctx: CanvasRenderingContext2D,
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    label: string
  ) => {
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = '#475569';
    ctx.fillStyle = '#475569';

    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();

    // Arrowhead
    const headlen = 8;
    const angle = Math.atan2(toY - fromY, toX - fromX);
    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
    ctx.fill();

    // Label
    ctx.font = '10px JetBrains Mono, monospace';
    ctx.fillText(label, fromX + (toX - fromX) / 2 - 25, fromY - 8);
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'tableau_virtuel_tni_projet.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <section className="py-16 bg-[#f7f5f0] border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2">
            LABORATOIRE INTERACTIF · EXPÉRIENCE UTILISATEUR
          </div>
          <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-stone-900 tracking-tight">
            Le Tableau Virtuel : Prenez en Main l’Écran Interactif
          </h2>
          <p className="mt-3 text-stone-600 text-sm leading-relaxed">
            Testez la sensation d'une TNI en direct dans votre navigateur : tracez à la souris ou au doigt, ajoutez des post-its collaboratifs, et déclenchez le bouton <strong>« Vectorisation IA »</strong> pour convertir un croquis en schéma technique parfait.
          </p>
        </div>

        {/* Whiteboard Shell */}
        <div className="bg-white rounded-xl border border-stone-300 shadow-sm overflow-hidden flex flex-col">
          {/* Toolbar */}
          <div className="px-4 py-3 bg-stone-100/90 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Tools */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-200/70 rounded-md">
              <button
                onClick={() => setTool('pen')}
                className={`p-2 rounded cursor-pointer transition-colors ${
                  tool === 'pen' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Stylet actif d'écriture"
              >
                <Pen className="w-4 h-4" />
              </button>
              <button
                onClick={() => setTool('highlighter')}
                className={`p-2 rounded cursor-pointer transition-colors ${
                  tool === 'highlighter' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Surligneur translucide"
              >
                <span className="w-4 h-4 block rounded bg-amber-400 opacity-80" />
              </button>
              <button
                onClick={() => setTool('eraser')}
                className={`p-2 rounded cursor-pointer transition-colors ${
                  tool === 'eraser' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Gomme"
              >
                <Eraser className="w-4 h-4" />
              </button>
            </div>

            {/* Colors */}
            <div className="flex items-center gap-1.5">
              {[
                { hex: '#1c1917', name: 'Noir Carbone' },
                { hex: '#0284c7', name: 'Bleu Tech' },
                { hex: '#16a34a', name: 'Vert Validation' },
                { hex: '#dc2626', name: 'Rouge Correction' }
              ].map((c) => (
                <button
                  key={c.hex}
                  onClick={() => {
                    setColor(c.hex);
                    if (tool === 'eraser') setTool('pen');
                  }}
                  style={{ backgroundColor: c.hex }}
                  className={`w-5 h-5 rounded-full cursor-pointer transition-transform ${
                    color === c.hex && tool === 'pen' ? 'scale-125 ring-2 ring-stone-900 ring-offset-1' : ''
                  }`}
                  title={c.name}
                />
              ))}
            </div>

            {/* Stroke Width Slider */}
            <div className="flex items-center gap-2 text-stone-600 text-xs">
              <span>Épaisseur :</span>
              <input
                type="range"
                min="1"
                max="8"
                value={brushSize}
                onChange={(e) => setBrushSize(Number(e.target.value))}
                className="w-16 accent-stone-900 cursor-pointer"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={addStickyNote}
                className="px-2.5 py-1.5 bg-white hover:bg-stone-50 border border-stone-300 rounded text-stone-700 cursor-pointer inline-flex items-center gap-1.5"
                title="Ajouter un Post-It"
              >
                <StickyNote className="w-3.5 h-3.5 text-amber-500" />
                <span>+ Note</span>
              </button>
              <button
                onClick={undo}
                className="p-1.5 bg-white hover:bg-stone-50 border border-stone-300 rounded text-stone-700 cursor-pointer"
                title="Annuler le dernier tracé"
              >
                <Undo className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={clearCanvas}
                className="p-1.5 bg-white hover:bg-stone-50 border border-stone-300 rounded text-stone-700 cursor-pointer"
                title="Effacer tout l’écran"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={simulateAIVectorization}
                className="px-3 py-1.5 bg-purple-900 hover:bg-purple-800 text-white rounded cursor-pointer inline-flex items-center gap-1.5 font-medium shadow-xs"
                title="Simuler la conversion IA en schéma"
              >
                <Wand2 className="w-3.5 h-3.5 text-purple-300" />
                <span>Vectorisation IA</span>
              </button>
              <button
                onClick={downloadCanvas}
                className="p-1.5 bg-white hover:bg-stone-50 border border-stone-300 rounded text-stone-700 cursor-pointer"
                title="Exporter l'image du tableau"
              >
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Canvas Canvas Area */}
          <div className="relative h-[480px] sm:h-[550px] w-full bg-white overflow-hidden cursor-crosshair">
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              className="w-full h-full block touch-none"
            />

            {/* Movable / Editable Sticky Notes */}
            {notes.map((note) => (
              <div
                key={note.id}
                style={{
                  left: `${note.x}px`,
                  top: `${note.y}px`,
                  backgroundColor: note.color
                }}
                className="absolute w-48 p-3 rounded-lg shadow-md border border-stone-300/60 text-xs text-stone-900 cursor-move z-10 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-1 pb-1 border-b border-black/10">
                  <span className="font-semibold text-[10px] uppercase tracking-wider text-stone-600">Post-it</span>
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="text-stone-400 hover:text-stone-800 cursor-pointer font-bold"
                  >
                    ×
                  </button>
                </div>
                <textarea
                  value={note.text}
                  onChange={(e) => updateNoteText(note.id, e.target.value)}
                  className="w-full bg-transparent resize-none border-none focus:outline-none text-xs leading-relaxed text-stone-800"
                  rows={3}
                />
              </div>
            ))}
          </div>

          {/* Bottom Bar Info */}
          <div className="px-6 py-2.5 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between text-xs text-stone-500">
            <div className="flex items-center gap-3">
              <span>Échantillonnage simulé : <strong className="text-stone-700 font-mono-code">400 Hz</strong></span>
              <span aria-hidden="true">·</span>
              <span>Rejet de paume actif</span>
              <span aria-hidden="true">·</span>
              <span>Résolution canevas : <strong className="text-stone-700 font-mono-code">Full Vector</strong></span>
            </div>
            <div className="text-amber-800 font-medium">
              Astuce : Cliquez sur « Vectorisation IA » pour observer la conversion instantanée d’un croquis.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
