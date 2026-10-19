import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, ArrowDown, Lightbulb } from 'lucide-react';

interface HeroEditorialProps {
  onExploreImmersive: () => void;
  onExploreIdeas: () => void;
}

export const HeroEditorial: React.FC<HeroEditorialProps> = ({
  onExploreImmersive,
  onExploreIdeas
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <section className="border-b border-stone-200 bg-[#faf9f6] pt-12 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Masthead Header */}
        <div className="text-center pb-8 border-b border-stone-300">
          <div className="text-xs uppercase tracking-widest text-stone-500 font-medium mb-3">
            REVUE DES TECHNOLOGIES NUMÉRIQUES · HORS-SÉRIE N°14 · PROJET ÉTUDIANT
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-bold text-stone-900 tracking-tight leading-[1.15] text-balance max-w-4xl mx-auto">
            L’Écran Vivant : Comment le Tableau Numérique Interactif (TNI) Réinvente la Pensée Collective
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed">
            Autrefois simple tableau d’écolier rétroprojeté, l’écran interactif nouvelle génération s’est imposé comme le centre névralgique des comités de direction et des amphis modernes. Décryptage technologique à travers 3 ruptures immersives.
          </p>

          {/* Clean Unboxed Metadata */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-stone-500">
            <span className="font-medium text-stone-800">Dossier Spécial TNI</span>
            <span aria-hidden="true">·</span>
            <span>Focus Matériel : Surface Hub 3 & Écrans Tactiles IA</span>
            <span aria-hidden="true">·</span>
            <span>Temps de lecture : 7 min</span>
            <span aria-hidden="true">·</span>
            <span>3 Explanations Immersives HD</span>
          </div>
        </div>

        {/* Audio Briefing & Action Strip */}
        <div className="mt-6 py-4 px-6 bg-stone-100/80 rounded-lg border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={toggleAudio}
              className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-stone-800 transition-colors shrink-0 cursor-pointer shadow-sm"
              aria-label={isPlayingAudio ? 'Mettre en pause le résumé audio' : 'Écouter le résumé audio'}
            >
              {isPlayingAudio ? (
                <VolumeX className="w-4 h-4 text-amber-300 animate-pulse" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
            <div className="text-xs">
              <div className="font-semibold text-stone-900">
                {isPlayingAudio ? 'Audio en lecture : Introduction du dossier TNI' : 'Écouter le briefing audio du dossier'}
              </div>
              <div className="text-stone-500">
                {isPlayingAudio ? 'Durée : 01:45 min · Synthèse vocale HD' : 'Synthèse des 3 ruptures technologiques (1 min 45)'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onExploreIdeas}
              className="px-3.5 py-1.5 text-xs font-medium text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 rounded-md transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
              <span>Voir les Idées de TNI</span>
            </button>
            <button
              onClick={onExploreImmersive}
              className="px-4 py-1.5 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors cursor-pointer inline-flex items-center gap-1.5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>3 Décryptages Immersifs</span>
              <ArrowDown className="w-3 h-3" />
            </button>
          </div>
        </div>

        {isPlayingAudio && (
          <div className="mt-3 p-4 bg-amber-50/80 border border-amber-200 rounded-lg text-xs text-amber-900 leading-relaxed transition-all">
            <div className="font-semibold mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-600"></span>
              Extrait du briefing :
            </div>
            « Bienvenue dans ce hors-série consacré à la TNI, le Tableau Numérique Interactif. Nous explorons comment trois piliers technologiques — le verre optique collé zéro-parallaxe, les caméras IA à cadrage automatique et la vectorisation sémantique en temps réel — ont métamorphosé cet outil en copilote d'intelligence collective pour les entreprises du monde entier. »
          </div>
        )}
      </div>
    </section>
  );
};
