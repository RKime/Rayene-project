import React, { useState } from 'react';
import { Printer, Newspaper, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: 'portal' | 'ideas' | 'immersive' | 'article' | 'whiteboard' | 'defense';
  setActiveTab: (tab: 'portal' | 'ideas' | 'immersive' | 'article' | 'whiteboard' | 'defense') => void;
  onPrint: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onPrint }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: 'portal' | 'ideas' | 'immersive' | 'article' | 'whiteboard' | 'defense') => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#faf9f6]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleNavClick('portal')}
            className="text-left cursor-pointer focus:outline-none"
          >
            <span className="text-lg sm:text-xl font-editorial font-bold tracking-tight text-stone-900 whitespace-nowrap block">
              TECH HORIZON <span className="font-sans text-[11px] uppercase tracking-widest text-amber-800 font-semibold ml-1">· MAG</span>
            </span>
          </button>
        </div>

        {/* Zone 2: Navigation Links (4-5 single-line clean text links, desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-600">
          <button
            onClick={() => handleNavClick('portal')}
            className={`whitespace-nowrap transition-colors cursor-pointer pb-0.5 ${
              activeTab === 'portal'
                ? 'text-stone-900 border-b-2 border-stone-900 font-semibold'
                : 'hover:text-stone-900'
            }`}
          >
            Le Journal
          </button>
          <button
            onClick={() => handleNavClick('article')}
            className={`whitespace-nowrap transition-colors cursor-pointer pb-0.5 ${
              activeTab === 'article'
                ? 'text-stone-900 border-b-2 border-stone-900 font-semibold'
                : 'hover:text-stone-900'
            }`}
          >
            Grand Dossier TNI
          </button>
          <button
            onClick={() => handleNavClick('immersive')}
            className={`whitespace-nowrap transition-colors cursor-pointer pb-0.5 ${
              activeTab === 'immersive'
                ? 'text-stone-900 border-b-2 border-stone-900 font-semibold'
                : 'hover:text-stone-900'
            }`}
          >
            3 Décryptages Immersifs
          </button>
          <button
            onClick={() => handleNavClick('ideas')}
            className={`whitespace-nowrap transition-colors cursor-pointer pb-0.5 ${
              activeTab === 'ideas'
                ? 'text-stone-900 border-b-2 border-stone-900 font-semibold'
                : 'hover:text-stone-900'
            }`}
          >
            Idées TNI & TN
          </button>
          <button
            onClick={() => handleNavClick('whiteboard')}
            className={`whitespace-nowrap transition-colors cursor-pointer pb-0.5 ${
              activeTab === 'whiteboard'
                ? 'text-stone-900 border-b-2 border-stone-900 font-semibold'
                : 'hover:text-stone-900'
            }`}
          >
            Tableau Virtuel
          </button>
          <button
            onClick={() => handleNavClick('defense')}
            className={`whitespace-nowrap transition-colors cursor-pointer pb-0.5 ${
              activeTab === 'defense'
                ? 'text-stone-900 border-b-2 border-stone-900 font-semibold'
                : 'hover:text-stone-900'
            }`}
          >
            Kit Soutenance & ROI
          </button>
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onPrint}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors whitespace-nowrap cursor-pointer border border-stone-300"
            title="Imprimer ou exporter en PDF pour l'évaluation"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>PDF / Print</span>
          </button>

          <button
            onClick={() => handleNavClick('portal')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors whitespace-nowrap cursor-pointer shadow-xs"
          >
            <Newspaper className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">Kiosque Presse</span>
            <span className="sm:hidden">Articles</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-stone-900 rounded-md border border-stone-300 bg-white cursor-pointer focus:outline-none"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Cap height to avoid blocking phone view) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 py-4 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold px-2 mb-1">
            Rubriques & Outils
          </div>
          <button
            onClick={() => handleNavClick('portal')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-xs font-medium flex items-center justify-between ${
              activeTab === 'portal' ? 'bg-stone-900 text-white' : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            <span>📰 Le Journal (Toutes les Innovations)</span>
            <span className="text-[10px] font-mono-code opacity-70">5 articles</span>
          </button>
          <button
            onClick={() => handleNavClick('article')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-xs font-medium flex items-center justify-between ${
              activeTab === 'article' ? 'bg-stone-900 text-white' : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            <span>📖 Grand Dossier TNI</span>
            <span className="text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded">À la une</span>
          </button>
          <button
            onClick={() => handleNavClick('immersive')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-xs font-medium flex items-center justify-between ${
              activeTab === 'immersive' ? 'bg-stone-900 text-white' : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            <span>🖼️ 3 Décryptages Immersifs HD</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          </button>
          <button
            onClick={() => handleNavClick('ideas')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-xs font-medium flex items-center justify-between ${
              activeTab === 'ideas' ? 'bg-stone-900 text-white' : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            <span>💡 Idées de TNI & Comparatif</span>
          </button>
          <button
            onClick={() => handleNavClick('whiteboard')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-xs font-medium flex items-center justify-between ${
              activeTab === 'whiteboard' ? 'bg-stone-900 text-white' : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            <span>✏️ Tableau Virtuel (Lab Tactile)</span>
          </button>
          <button
            onClick={() => handleNavClick('defense')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-xs font-medium flex items-center justify-between ${
              activeTab === 'defense' ? 'bg-stone-900 text-white' : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            <span>📊 Kit Soutenance, SWOT & ROI</span>
          </button>
        </div>
      )}
    </header>
  );
};
