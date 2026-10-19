import React, { useState } from 'react';
import { IMMERSIVE_EXPLANATIONS, ImmersiveExplanation, Hotspot } from '../data/tniData';
import { Maximize2, X, ChevronRight, ChevronLeft, Info, Cpu, Layers, Sparkles } from 'lucide-react';

export const ImmersiveExploration: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentItem: ImmersiveExplanation = IMMERSIVE_EXPLANATIONS[currentIndex];

  const handleNext = () => {
    setActiveHotspot(null);
    setCurrentIndex((prev) => (prev + 1) % IMMERSIVE_EXPLANATIONS.length);
  };

  const handlePrev = () => {
    setActiveHotspot(null);
    setCurrentIndex((prev) => (prev - 1 + IMMERSIVE_EXPLANATIONS.length) % IMMERSIVE_EXPLANATIONS.length);
  };

  const selectTab = (idx: number) => {
    setActiveHotspot(null);
    setCurrentIndex(idx);
  };

  return (
    <section id="decrypter-immersif" className="py-16 bg-[#f7f5f0] border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2">
            EXPLORATION INTERACTIVE · 3 DÉCRYPTAGES VISUELS
          </div>
          <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-stone-900 tracking-tight">
            Les 3 Piliers Technologiques de la TNI Moderne
          </h2>
          <p className="mt-3 text-stone-600 text-sm leading-relaxed">
            Cliquez sur les onglets ci-dessous pour explorer les 3 facettes fondamentales d’une TNI professionnelle. Sur chaque image haute résolution, cliquez sur les <strong>pastilles numérotées</strong> pour révéler les secrets d'ingénierie matérielle et logicielle.
          </p>
        </div>

        {/* 3 Step Tabs Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {IMMERSIVE_EXPLANATIONS.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                onClick={() => selectTab(idx)}
                className={`text-left p-4 rounded-lg border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white border-stone-900 shadow-sm'
                    : 'bg-stone-100/70 border-stone-200 hover:bg-white text-stone-600'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className={`font-medium ${isActive ? 'text-amber-800' : 'text-stone-500'}`}>
                    Décryptage 0{idx + 1}
                  </span>
                  {idx === 0 && <Cpu className="w-3.5 h-3.5 text-stone-400" />}
                  {idx === 1 && <Layers className="w-3.5 h-3.5 text-stone-400" />}
                  {idx === 2 && <Sparkles className="w-3.5 h-3.5 text-stone-400" />}
                </div>
                <div className="text-xs font-semibold text-stone-900 line-clamp-1">
                  {item.title.split(':')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Immersive Canvas Area */}
        <div className="bg-white rounded-xl border border-stone-300 overflow-hidden shadow-sm">
          {/* Top Bar of the Canvas */}
          <div className="px-6 py-4 border-b border-stone-200 flex flex-wrap items-center justify-between gap-4 bg-stone-50/70">
            <div>
              <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
                {currentItem.category}
              </div>
              <h3 className="text-lg sm:text-xl font-editorial font-bold text-stone-900">
                {currentItem.title}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full border border-stone-300 bg-white flex items-center justify-center hover:bg-stone-100 transition-colors cursor-pointer text-stone-700"
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono-code text-stone-500 px-1">
                {currentIndex + 1} / {IMMERSIVE_EXPLANATIONS.length}
              </span>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full border border-stone-300 bg-white flex items-center justify-center hover:bg-stone-100 transition-colors cursor-pointer text-stone-700"
                aria-label="Image suivante"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 rounded-md transition-colors cursor-pointer"
                title="Plein écran haute résolution"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Agrandir HD</span>
              </button>
            </div>
          </div>

          {/* Interactive Image Frame with Hotspots */}
          <div className="relative aspect-[16/9] w-full bg-stone-900 overflow-hidden select-none">
            <img
              src={currentItem.imagePath}
              alt={currentItem.alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500"
            />

            {/* Gradient scrim for top/bottom contrast */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-black/20" />

            {/* Hotspot Markers */}
            {currentItem.hotspots.map((spot, sIdx) => {
              const isSelected = activeHotspot?.id === spot.id;
              return (
                <div
                  key={spot.id}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <button
                    onClick={() => setActiveHotspot(isSelected ? null : spot)}
                    className={`group relative flex items-center justify-center w-8 h-8 rounded-full border-2 text-xs font-bold transition-all transform hover:scale-110 cursor-pointer shadow-lg ${
                      isSelected
                        ? 'bg-amber-400 text-stone-950 border-white ring-4 ring-amber-400/40'
                        : 'bg-stone-900/90 text-white border-amber-400 hover:bg-amber-400 hover:text-stone-900'
                    }`}
                    title={spot.title}
                  >
                    <span>{sIdx + 1}</span>
                    {/* Ring highlight animation */}
                    <span className="absolute -inset-1 rounded-full border border-amber-300/60 animate-ping pointer-events-none opacity-40"></span>
                  </button>

                  {/* Hotspot Floating Tooltip on Hover / Selection */}
                  {isSelected && (
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 sm:w-72 p-3.5 bg-stone-950/95 text-white backdrop-blur-md rounded-lg shadow-2xl border border-amber-400/50 z-30 animate-in fade-in zoom-in-95 duration-150">
                      <div className="flex items-center justify-between text-[10px] text-amber-300 uppercase tracking-widest font-semibold mb-1">
                        <span>Point Clé #{sIdx + 1}</span>
                        <span className="font-mono-code">{spot.keyMetric}</span>
                      </div>
                      <div className="text-xs font-bold text-white mb-0.5">{spot.title}</div>
                      <div className="text-[11px] text-stone-300 font-medium mb-1.5">{spot.subtitle}</div>
                      <p className="text-[11px] text-stone-400 leading-relaxed">{spot.description}</p>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Help Indicator Pill */}
            <div className="absolute bottom-3 left-3 bg-stone-950/80 backdrop-blur-sm text-stone-300 text-[11px] px-3 py-1.5 rounded-full border border-stone-700/60 pointer-events-none flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-amber-400" />
              <span>Cliquez sur les pastilles 1, 2, 3 pour révéler les composants</span>
            </div>
          </div>

          {/* Caption underneath image */}
          <div className="px-6 py-2.5 bg-stone-100 text-xs text-stone-500 font-editorial italic border-b border-stone-200">
            {currentItem.caption}
          </div>

          {/* Detailed Content & Specs Split */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Editorial Explanation */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-4 bg-amber-50/70 rounded-lg border border-amber-200/80 text-xs text-amber-950 leading-relaxed font-medium">
                💡 <span className="font-bold">Synthèse Exécutive :</span> {currentItem.executiveSummary}
              </div>

              <div className="text-xs sm:text-sm text-stone-700 leading-relaxed whitespace-pre-line">
                {currentItem.fullAnalysis}
              </div>

              <div className="pt-3 border-t border-stone-200">
                <span className="text-xs font-bold text-stone-900 uppercase tracking-wider block mb-1">
                  Impact Business & Rentabilité (B2B) :
                </span>
                <p className="text-xs text-stone-600 italic">
                  « {currentItem.b2bImpact} »
                </p>
              </div>
            </div>

            {/* Right Column: Technical Specifications & Hotspot Inspector */}
            <div className="lg:col-span-5 space-y-4">
              {/* Active Hotspot Inspector card */}
              <div className="p-4 bg-stone-50 rounded-lg border border-stone-300">
                <div className="flex items-center justify-between text-xs font-semibold text-stone-900 uppercase tracking-wider mb-2">
                  <span>Détail du composant actif</span>
                  <span className="text-amber-800 font-mono-code">
                    {activeHotspot ? `Point Clé #${currentItem.hotspots.findIndex(h => h.id === activeHotspot.id) + 1}` : 'Sélectionnez un point'}
                  </span>
                </div>

                {activeHotspot ? (
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-stone-900">{activeHotspot.title}</h4>
                    <div className="text-xs font-medium text-stone-700">{activeHotspot.subtitle}</div>
                    <p className="text-xs text-stone-600 leading-relaxed">{activeHotspot.description}</p>
                    <div className="mt-2 pt-2 border-t border-stone-200 flex items-center justify-between text-xs">
                      <span className="text-stone-500">Métrique d'ingénierie :</span>
                      <span className="font-mono-code font-bold text-stone-900 bg-white px-2 py-0.5 rounded border border-stone-200">
                        {activeHotspot.keyMetric}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="py-6 text-center text-xs text-stone-500">
                    Cliquez sur l'une des 3 pastilles sur l'image ci-dessus pour inspecter les métriques du matériel en détail.
                  </div>
                )}
              </div>

              {/* Technical Specifications Table */}
              <div className="border border-stone-200 rounded-lg overflow-hidden">
                <div className="bg-stone-100 px-3.5 py-2 text-xs font-semibold text-stone-800 uppercase tracking-wider">
                  Fiche Technique Officielle
                </div>
                <dl className="divide-y divide-stone-200 text-xs">
                  {currentItem.techSpecs.map((spec, sIdx) => (
                    <div key={sIdx} className="px-3.5 py-2 flex items-center justify-between">
                      <dt className="text-stone-500 font-medium">{spec.label}</dt>
                      <dd className="font-mono-code text-stone-900 font-semibold text-right">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full bg-stone-900 rounded-xl overflow-hidden shadow-2xl border border-stone-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-stone-950 flex items-center justify-between text-white border-b border-stone-800">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
                {currentItem.category} · Vue Plein Écran
              </span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-md text-stone-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-[16/9] w-full bg-black">
              <img
                src={currentItem.imagePath}
                alt={currentItem.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 bg-stone-950 text-stone-400 text-xs font-editorial italic text-center">
              {currentItem.caption}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
