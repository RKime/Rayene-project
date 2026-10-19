import React, { useState } from 'react';
import { PressArticle, PRESS_ARTICLES } from '../data/tniData';
import { ArrowLeft, Clock, Calendar, Share2, Sparkles, Check, ZoomIn, ZoomOut } from 'lucide-react';
import { ImmersiveExploration } from './ImmersiveExploration';
import { ProjectDefenseKit } from './ProjectDefenseKit';

interface PressArticleReaderProps {
  article: PressArticle;
  onBackToPortal: () => void;
  onSelectArticle: (article: PressArticle) => void;
  onOpenWhiteboard: () => void;
}

export const PressArticleReader: React.FC<PressArticleReaderProps> = ({
  article,
  onBackToPortal,
  onSelectArticle,
  onOpenWhiteboard
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [copiedShare, setCopiedShare] = useState(false);

  const currentIndex = PRESS_ARTICLES.findIndex((a) => a.id === article.id);
  const nextArticle = PRESS_ARTICLES[(currentIndex + 1) % PRESS_ARTICLES.length];
  const prevArticle = PRESS_ARTICLES[(currentIndex - 1 + PRESS_ARTICLES.length) % PRESS_ARTICLES.length];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.subtitle,
          url: window.location.href
        });
      } catch {
        // user cancelled or share failed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  const getProseSizeClass = () => {
    switch (fontSize) {
      case 'large':
        return 'text-lg sm:text-xl leading-relaxed';
      case 'xlarge':
        return 'text-xl sm:text-2xl leading-loose';
      default:
        return 'text-base sm:text-lg leading-relaxed';
    }
  };

  return (
    <article className="py-6 sm:py-12 bg-[#faf9f6]">
      {/* Top Reading Navigation Bar (Sticky for comfortable phone & desktop reading) */}
      <div className="sticky top-[57px] z-30 bg-[#faf9f6]/95 backdrop-blur-md border-b border-stone-200 py-2.5 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={onBackToPortal}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-stone-900 transition-colors cursor-pointer py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Retour aux actualités</span>
            <span className="sm:hidden">Actualités</span>
          </button>

          <div className="flex items-center gap-2">
            {/* Font Size Adjuster for Mobile Readability */}
            <div className="flex items-center border border-stone-300 rounded-md bg-white p-0.5 text-xs">
              <button
                onClick={() => setFontSize(fontSize === 'xlarge' ? 'large' : 'normal')}
                className="px-2 py-1 text-stone-600 hover:text-stone-900 rounded cursor-pointer"
                title="Diminuer la taille du texte"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="px-1 text-[11px] font-mono-code text-stone-400">Aa</span>
              <button
                onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'xlarge')}
                className="px-2 py-1 text-stone-600 hover:text-stone-900 rounded cursor-pointer"
                title="Augmenter la taille du texte"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 rounded-md transition-colors cursor-pointer"
            >
              {copiedShare ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedShare ? 'Lien copié !' : 'Partager'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-6 sm:mt-10">
        {/* Category & Headline */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-widest text-amber-800 font-semibold mb-3">
            {article.categoryLabel}
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-editorial font-bold text-stone-900 tracking-tight leading-[1.2] text-balance">
            {article.title}
          </h1>
          <p className="mt-4 text-base sm:text-xl text-stone-600 leading-relaxed font-light">
            {article.subtitle}
          </p>

          {/* Clean Unboxed Metadata */}
          <div className="mt-6 pt-4 border-t border-stone-200 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-stone-500">
            <span className="font-semibold text-stone-900">{article.author}</span>
            <span aria-hidden="true">·</span>
            <span>{article.authorRole}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {article.publishDate}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-10 rounded-xl overflow-hidden border border-stone-300 shadow-xs bg-stone-900">
          <div className="relative aspect-[16/9] w-full">
            <img
              src={article.featuredImage}
              alt={article.imageAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-3 bg-stone-100 text-xs font-editorial italic text-stone-600 border-t border-stone-200">
            {article.imageCaption}
          </div>
        </div>

        {/* Key Takeaway Callout */}
        <div className="mb-10 p-5 bg-amber-50/80 rounded-xl border border-amber-200/90 text-amber-950">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
            À Retenir pour vos dossiers & examens :
          </div>
          <p className="text-xs sm:text-sm font-medium leading-relaxed">
            {article.keyTakeaway}
          </p>
        </div>

        {/* Body Narrative Content */}
        <div className={`space-y-8 text-stone-800 font-normal ${getProseSizeClass()}`}>
          {/* First Paragraph with Drop Cap */}
          <p className="first-letter:text-5xl first-letter:font-editorial first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-stone-900">
            {article.summary}
          </p>

          {article.content.map((sec, sIdx) => (
            <div key={sIdx} className="space-y-3 pt-4">
              <h2 className="text-xl sm:text-2xl font-editorial font-bold text-stone-900">
                {sec.heading}
              </h2>
              <p className="text-stone-700 leading-relaxed">
                {sec.text}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Add-on for TNI articles: Whiteboard & Immersive Explorer */}
        {article.relatedTniTopic && (
          <div className="mt-14 pt-10 border-t border-stone-300 space-y-12">
            <div className="p-6 bg-stone-900 text-white rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Expérimentation Interactive Directe
                </div>
                <h3 className="text-lg font-editorial font-bold text-white">
                  Testez le Tableau Numérique Virtuel en Ligne
                </h3>
                <p className="text-xs text-stone-300 mt-1 max-w-lg">
                  Dessinez, annotez, placez des post-its et testez l'algorithme de conversion de croquis en schéma vectoriel.
                </p>
              </div>
              <button
                onClick={onOpenWhiteboard}
                className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold rounded-lg text-xs cursor-pointer whitespace-nowrap transition-colors shadow-sm"
              >
                Ouvrir le Tableau Virtuel
              </button>
            </div>

            {/* 3 Immersive Breakdowns directly inside the article */}
            <ImmersiveExploration />

            {/* Student Project Toolkit & ROI Calculator */}
            <ProjectDefenseKit />
          </div>
        )}

        {/* Previous & Next Article Navigation */}
        <div className="mt-16 pt-8 border-t border-stone-300 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            onClick={() => onSelectArticle(prevArticle)}
            className="p-4 bg-white rounded-lg border border-stone-200 hover:border-stone-400 cursor-pointer transition-colors"
          >
            <div className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold mb-1">
              ← Article précédent
            </div>
            <div className="text-xs font-bold text-stone-900 line-clamp-2">
              {prevArticle.title}
            </div>
          </div>

          <div
            onClick={() => onSelectArticle(nextArticle)}
            className="p-4 bg-white rounded-lg border border-stone-200 hover:border-stone-400 cursor-pointer transition-colors text-right"
          >
            <div className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold mb-1">
              Article suivant →
            </div>
            <div className="text-xs font-bold text-stone-900 line-clamp-2">
              {nextArticle.title}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
