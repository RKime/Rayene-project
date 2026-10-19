import React, { useState } from 'react';
import { TNI_IDEAS, TniIdea } from '../data/tniData';
import { Check, Star, ArrowRight, HelpCircle } from 'lucide-react';

interface IdeaSelectorProps {
  selectedIdeaId: string;
  onSelectIdea: (id: string) => void;
  onGoToImmersive: () => void;
}

export const IdeaSelector: React.FC<IdeaSelectorProps> = ({
  selectedIdeaId,
  onSelectIdea,
  onGoToImmersive
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const selectedIdea = TNI_IDEAS.find((i) => i.id === selectedIdeaId) || TNI_IDEAS[0];

  const categories = [
    { id: 'all', label: 'Toutes les Idées' },
    { id: 'Corporate / B2B', label: 'Corporate & IA' },
    { id: 'EdTech / Éducation', label: 'Éducation & Formation' },
    { id: 'Agile / PME', label: 'Design & Startups' },
    { id: 'Technologie Numérique Émergente', label: 'Option "TN" (Jumeau Numérique)' }
  ];

  const filteredIdeas = activeCategory === 'all'
    ? TNI_IDEAS
    : TNI_IDEAS.filter((item) => item.category === activeCategory);

  return (
    <section className="py-12 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2">
            GUIDE DE SÉLECTION · PROJET ÉTUDIANT
          </div>
          <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-stone-900 tracking-tight">
            Quelle TNI ou TN choisir pour ton article de magazine ?
          </h2>
          <p className="mt-3 text-stone-600 text-sm leading-relaxed">
            Tu te demandes quelle technologie choisir ? Voici notre comparatif des 4 meilleures options de <strong>Tableaux Numériques Interactifs (TNI)</strong> du marché, ainsi qu’une alternative si ton professeur entendait par « TN » une <strong>Technologie Numérique</strong> au sens large.
          </p>
        </div>

        {/* Clarification Callout */}
        <div className="mb-8 p-4 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-3">
          <HelpCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs text-stone-700 leading-relaxed">
            <span className="font-semibold text-stone-900">Clarification TNI vs TN :</span> En France et dans les cursus B2B (Euridis, commerce, ingénierie), <strong>« TNI »</strong> désigne quasi-systématiquement le <em>Tableau Numérique Interactif</em> (ou TBI/Écran Interactif). Cependant, si la consigne abrège <strong>« TN »</strong> pour <em>Technologie Numérique</em>, nous avons également inclus le <strong>Jumeau Numérique</strong> comme alternative stratégique. <strong>Notre recommandation n°1 pour impressionner le jury : le Microsoft Surface Hub 3.</strong>
          </div>
        </div>

        {/* Filter Bar (allowed as functional button bar) */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Idea Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIdeas.map((idea) => {
            const isSelected = idea.id === selectedIdeaId;
            return (
              <div
                key={idea.id}
                onClick={() => onSelectIdea(idea.id)}
                className={`p-6 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-stone-900 bg-stone-50 ring-1 ring-stone-900'
                    : 'border-stone-200 bg-white hover:border-stone-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                    <span>{idea.brand}</span>
                    {idea.isFlagship && (
                      <span className="inline-flex items-center gap-1 font-semibold text-amber-700">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
                        Recommandé #1
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-1">
                    {idea.name}
                  </h3>
                  <div className="text-xs text-stone-500 mb-3">{idea.category}</div>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {idea.headline}
                  </p>

                  <div className="text-xs text-stone-700 mb-3 font-medium">
                    🎯 Pourquoi c’est un excellent sujet :
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed mb-4">
                    {idea.whyChooseThis}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="text-stone-500">Gamme de prix :</span>
                    <span className="font-semibold text-stone-800 font-mono-code">{idea.priceRange}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectIdea(idea.id);
                    }}
                    className={`w-full py-2 px-3 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center justify-center gap-2 ${
                      isSelected
                        ? 'bg-stone-900 text-white'
                        : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Sujet Sélectionné pour l’Article</span>
                      </>
                    ) : (
                      <span>Choisir ce modèle</span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Idea Deep Dive Box */}
        <div className="mt-12 p-8 bg-[#faf9f6] rounded-xl border border-stone-300">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6 border-b border-stone-200">
            <div>
              <div className="text-xs uppercase tracking-widest text-amber-800 font-semibold mb-1">
                FICHE PRODUIT RETENUE POUR L'ARTICLE
              </div>
              <h3 className="text-2xl font-editorial font-bold text-stone-900">
                {selectedIdea.name}
              </h3>
              <p className="text-sm text-stone-600 mt-1 max-w-2xl">
                {selectedIdea.headline}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-3">
              <button
                onClick={onGoToImmersive}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2 shadow-sm"
              >
                <span>Explorer les 3 Décryptages Immersifs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div>
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                Forces Technologiques
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-600">
                {selectedIdea.pros.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                Limites à Défendre à l'Oral
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-600">
                {selectedIdea.cons.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-amber-600 font-bold">!</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                Le Pitch Commercial Clé
              </h4>
              <blockquote className="p-3 bg-white rounded border border-stone-200 text-xs italic text-stone-700 leading-relaxed">
                {selectedIdea.salesPitch}
              </blockquote>
              <div className="mt-2 text-xs text-stone-500">
                Public cible : <span className="font-medium text-stone-800">{selectedIdea.targetAudience}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
