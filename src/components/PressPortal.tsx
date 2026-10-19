import React, { useState } from 'react';
import { PRESS_ARTICLES, PressArticle } from '../data/tniData';
import { Search, ArrowRight, Clock, Calendar, Sparkles } from 'lucide-react';

interface PressPortalProps {
  onSelectArticle: (article: PressArticle) => void;
  onExploreTniDossier: () => void;
}

export const PressPortal: React.FC<PressPortalProps> = ({
  onSelectArticle,
  onExploreTniDossier
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Toutes les Actualités' },
    { id: 'TNI & Workplace', label: 'TNI & Workplace' },
    { id: 'Robotique & IA', label: 'Robotique & Industrie' },
    { id: 'Deep Tech & Quantique', label: 'Deep Tech & Quantique' },
    { id: 'Innovation Logicielle', label: 'Logiciel & IA' }
  ];

  const filteredArticles = PRESS_ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const mainHeadline = PRESS_ARTICLES.find((a) => a.isMainHeadline) || PRESS_ARTICLES[0];
  const gridArticles = filteredArticles.filter((a) => a.id !== mainHeadline.id || searchQuery !== '' || selectedCategory !== 'all');

  return (
    <section className="py-8 sm:py-12 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Editorial Subheader & Search Ribbon */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-200">
          <div>
            <div className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-1">
              PORTAIL PRESSE & INVESTIGATION
            </div>
            <h2 className="text-xl sm:text-2xl font-editorial font-bold text-stone-900">
              Le Journal des Ruptures Technologiques
            </h2>
          </div>

          {/* Search Box & Mobile-friendly filter bar */}
          <div className="flex items-center gap-2 max-w-md w-full">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Rechercher une innovation, TNI, IA, robotique..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-stone-900 text-stone-800 placeholder-stone-400"
              />
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="px-2.5 py-2 text-xs bg-stone-200 hover:bg-stone-300 rounded text-stone-700 cursor-pointer"
              >
                Effacer
              </button>
            )}
          </div>
        </div>

        {/* Category Filters (Mobile Touch Friendly) */}
        <div className="py-4 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-medium rounded-md whitespace-nowrap cursor-pointer transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Lead Story Marquee (Only on default view) */}
        {selectedCategory === 'all' && searchQuery === '' && (
          <div className="mt-4 mb-12">
            <div
              onClick={() => onSelectArticle(mainHeadline)}
              className="group bg-white rounded-xl border border-stone-300 overflow-hidden shadow-xs hover:shadow-md transition-shadow cursor-pointer grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Media Container */}
              <div className="lg:col-span-7 relative aspect-[16/9] sm:aspect-[16/10] lg:aspect-auto overflow-hidden bg-stone-900">
                <img
                  src={mainHeadline.featuredImage}
                  alt={mainHeadline.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-md text-amber-300 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                  ★ Grand Dossier à la Une · TNI 2026
                </div>
              </div>

              {/* Text Area */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-amber-800 font-semibold mb-2">
                    {mainHeadline.categoryLabel}
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-editorial font-bold text-stone-900 leading-tight group-hover:text-stone-700 transition-colors">
                    {mainHeadline.title}
                  </h3>
                  <p className="mt-3 text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-4">
                    {mainHeadline.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-stone-200 mt-6">
                  {/* Clean unboxed metadata with · */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
                    <span className="font-medium text-stone-800">{mainHeadline.author}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {mainHeadline.readTime}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {mainHeadline.publishDate}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-stone-900 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Lire l’article complet & 3 Décryptages <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onExploreTniDossier();
                      }}
                      className="px-3 py-1.5 text-[11px] font-medium bg-amber-50 text-amber-900 border border-amber-300 rounded hover:bg-amber-100 transition-colors inline-flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      Lab & Soutenance
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid (Fully responsive on phone, tablet, desktop) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-editorial font-bold text-stone-900">
              {searchQuery ? `Résultats de recherche (${filteredArticles.length})` : 'Toutes les Éditions & Découvertes'}
            </h3>
            <span className="text-xs text-stone-500">
              {filteredArticles.length} article(s) disponible(s)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="group bg-white rounded-xl border border-stone-200 hover:border-stone-400 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Article Card Image */}
                  <div className="relative aspect-[16/9] w-full bg-stone-100 overflow-hidden">
                    <img
                      src={article.featuredImage}
                      alt={article.imageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-stone-900/85 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded">
                      {article.category}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-5">
                    <div className="text-[11px] uppercase tracking-wider text-amber-800 font-semibold mb-1">
                      {article.categoryLabel}
                    </div>
                    <h4 className="text-base sm:text-lg font-editorial font-bold text-stone-900 group-hover:text-amber-900 transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="mt-2 text-xs text-stone-600 leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>
                </div>

                {/* Footer Metadata */}
                <div className="px-5 pb-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <div className="flex items-center gap-1.5">
                    <span className="font-medium text-stone-700 truncate max-w-[120px]">{article.author}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <span className="font-medium text-stone-900 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Lire <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16 bg-white rounded-xl border border-stone-200 p-8">
              <p className="text-sm text-stone-500">Aucun article ne correspond à votre recherche « {searchQuery} ».</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-4 py-2 bg-stone-900 text-white rounded-md text-xs cursor-pointer font-medium"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
