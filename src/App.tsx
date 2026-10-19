import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroEditorial } from './components/HeroEditorial';
import { PressPortal } from './components/PressPortal';
import { PressArticleReader } from './components/PressArticleReader';
import { IdeaSelector } from './components/IdeaSelector';
import { ImmersiveExploration } from './components/ImmersiveExploration';
import { ArticleReader } from './components/ArticleReader';
import { InteractiveWhiteboard } from './components/InteractiveWhiteboard';
import { ProjectDefenseKit } from './components/ProjectDefenseKit';
import { Footer } from './components/Footer';
import { PRESS_ARTICLES, PressArticle } from './data/tniData';

export default function App() {
  const [activeTab, setActiveTab] = useState<'portal' | 'ideas' | 'immersive' | 'article' | 'whiteboard' | 'defense'>('portal');
  const [selectedIdeaId, setSelectedIdeaId] = useState<string>('surface-hub-3');
  const [currentArticle, setCurrentArticle] = useState<PressArticle>(PRESS_ARTICLES[0]);
  const [isReadingSingleArticle, setIsReadingSingleArticle] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleOpenArticle = (article: PressArticle) => {
    setCurrentArticle(article);
    if (article.id === 'art-tni-main') {
      setActiveTab('article');
      setIsReadingSingleArticle(false);
    } else {
      setIsReadingSingleArticle(true);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-stone-900 flex flex-col selection:bg-amber-200 selection:text-amber-950 font-sans-ui">
      {/* Top Bar with Top Bar Contract */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setIsReadingSingleArticle(false);
        }}
        onPrint={handlePrint}
      />

      <main className="flex-1">
        {/* Magazine Editorial Hero always sets the prestige atmosphere */}
        {activeTab === 'portal' && !isReadingSingleArticle && (
          <HeroEditorial
            onExploreImmersive={() => {
              setActiveTab('immersive');
              setIsReadingSingleArticle(false);
            }}
            onExploreIdeas={() => {
              setActiveTab('ideas');
              setIsReadingSingleArticle(false);
            }}
          />
        )}

        {/* View Switcher Ribbon (Desktop & Tablet) */}
        {!isReadingSingleArticle && (
          <div className="sticky top-[53px] z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 py-2 px-4 sm:px-6 no-print shadow-xs">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
              <div className="flex items-center gap-1 overflow-x-auto text-xs font-medium py-0.5 scrollbar-none">
                <button
                  onClick={() => setActiveTab('portal')}
                  className={`px-3 py-1.5 rounded-md whitespace-nowrap cursor-pointer transition-colors ${
                    activeTab === 'portal'
                      ? 'bg-stone-900 text-white font-semibold shadow-xs'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  📰 Le Journal (Tous les Articles)
                </button>
                <button
                  onClick={() => setActiveTab('article')}
                  className={`px-3 py-1.5 rounded-md whitespace-nowrap cursor-pointer transition-colors ${
                    activeTab === 'article'
                      ? 'bg-stone-900 text-white font-semibold shadow-xs'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  📖 Grand Dossier TNI
                </button>
                <button
                  onClick={() => setActiveTab('immersive')}
                  className={`px-3 py-1.5 rounded-md whitespace-nowrap cursor-pointer transition-colors ${
                    activeTab === 'immersive'
                      ? 'bg-stone-900 text-white font-semibold shadow-xs'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  🖼️ 3 Décryptages Immersifs (HD)
                </button>
                <button
                  onClick={() => setActiveTab('ideas')}
                  className={`px-3 py-1.5 rounded-md whitespace-nowrap cursor-pointer transition-colors ${
                    activeTab === 'ideas'
                      ? 'bg-stone-900 text-white font-semibold shadow-xs'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  💡 Idées TNI & Comparatif
                </button>
                <button
                  onClick={() => setActiveTab('whiteboard')}
                  className={`px-3 py-1.5 rounded-md whitespace-nowrap cursor-pointer transition-colors ${
                    activeTab === 'whiteboard'
                      ? 'bg-stone-900 text-white font-semibold shadow-xs'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  ✏️ Lab Virtuel (Tableau Tactile)
                </button>
                <button
                  onClick={() => setActiveTab('defense')}
                  className={`px-3 py-1.5 rounded-md whitespace-nowrap cursor-pointer transition-colors ${
                    activeTab === 'defense'
                      ? 'bg-stone-900 text-white font-semibold shadow-xs'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  📊 Kit Soutenance & ROI
                </button>
              </div>

              <div className="hidden xl:flex items-center gap-2 text-xs text-stone-500 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Optimisé Ordinateur & Téléphone</span>
              </div>
            </div>
          </div>
        )}

        {/* 1. News Portal (All Press Articles on Tech Innovation) */}
        {activeTab === 'portal' && !isReadingSingleArticle && (
          <div className="animate-in fade-in duration-200">
            <PressPortal
              onSelectArticle={handleOpenArticle}
              onExploreTniDossier={() => setActiveTab('article')}
            />
          </div>
        )}

        {/* 2. Single Article Reader Mode */}
        {isReadingSingleArticle && (
          <div className="animate-in fade-in duration-200">
            <PressArticleReader
              article={currentArticle}
              onBackToPortal={() => setIsReadingSingleArticle(false)}
              onSelectArticle={(art) => {
                setCurrentArticle(art);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenWhiteboard={() => {
                setIsReadingSingleArticle(false);
                setActiveTab('whiteboard');
              }}
            />
          </div>
        )}

        {/* 3. Grand Dossier TNI Magazine Article */}
        {activeTab === 'article' && !isReadingSingleArticle && (
          <div className="animate-in fade-in duration-200">
            <ArticleReader
              onOpenWhiteboard={() => setActiveTab('whiteboard')}
              onOpenDefenseKit={() => setActiveTab('defense')}
            />
            {/* 3 Immersive Explanations in HD */}
            <div className="pt-4">
              <ImmersiveExploration />
            </div>
            {/* Student Project Defense & ROI Calculator */}
            <ProjectDefenseKit />
          </div>
        )}

        {/* 4. 3 Immersive Breakdowns Directly */}
        {activeTab === 'immersive' && !isReadingSingleArticle && (
          <div className="animate-in fade-in duration-200">
            <ImmersiveExploration />
            <div className="py-12 bg-white text-center border-t border-stone-200">
              <div className="max-w-xl mx-auto px-6">
                <h4 className="text-lg font-editorial font-bold text-stone-900 mb-2">
                  Prêt à tester le tableau vous-même ?
                </h4>
                <p className="text-xs text-stone-600 mb-4">
                  Manipulez l'encre numérique, placez des notes adhésives virtuelles et simulez la vectorisation intelligente dans notre laboratoire interactif.
                </p>
                <button
                  onClick={() => setActiveTab('whiteboard')}
                  className="px-5 py-2.5 bg-stone-900 text-white text-xs font-semibold rounded-md hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  Ouvrir le Laboratoire Tableau Virtuel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 5. Ideas for TNI & Selection */}
        {activeTab === 'ideas' && !isReadingSingleArticle && (
          <div className="animate-in fade-in duration-200">
            <IdeaSelector
              selectedIdeaId={selectedIdeaId}
              onSelectIdea={(id) => setSelectedIdeaId(id)}
              onGoToImmersive={() => setActiveTab('immersive')}
            />
          </div>
        )}

        {/* 6. Virtual Whiteboard Lab */}
        {activeTab === 'whiteboard' && !isReadingSingleArticle && (
          <div className="animate-in fade-in duration-200">
            <InteractiveWhiteboard />
          </div>
        )}

        {/* 7. Student Defense Toolkit */}
        {activeTab === 'defense' && !isReadingSingleArticle && (
          <div className="animate-in fade-in duration-200">
            <ProjectDefenseKit />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
