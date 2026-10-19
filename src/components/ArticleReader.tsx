import React from 'react';
import { Quote, Sparkles } from 'lucide-react';

interface ArticleReaderProps {
  onOpenWhiteboard: () => void;
  onOpenDefenseKit: () => void;
}

export const ArticleReader: React.FC<ArticleReaderProps> = ({
  onOpenWhiteboard,
  onOpenDefenseKit
}) => {
  return (
    <article className="py-16 bg-[#faf9f6]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Article Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2">
            GRAND FORMAT · INVESTIGATION MATÉRIELLE & USAGES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-stone-900 tracking-tight leading-tight">
            L'Adieu au Tableau Noir : Radiographie d'une Révolution Invisible
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-stone-500 pb-6 border-b border-stone-200">
            <span className="font-semibold text-stone-800">Par la Rédaction Tech</span>
            <span aria-hidden="true">·</span>
            <span>Publié en Édition Spéciale</span>
            <span aria-hidden="true">·</span>
            <span>Euridis Tech Business Review</span>
            <span aria-hidden="true">·</span>
            <span>8 min de lecture</span>
          </div>
        </div>

        {/* 2-Column Asymmetric Grid: Main Prose (70%) + Margin Notes (30%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Reading Column */}
          <div className="lg:col-span-8 space-y-8 text-stone-800 text-base leading-relaxed font-normal">
            {/* Opening with Drop Cap */}
            <p className="first-letter:text-5xl first-letter:font-editorial first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-stone-900 text-lg leading-relaxed text-stone-900">
              Pendant plus de deux siècles, la craie et l'ardoise ont constitué le médium universel de la transmission du savoir et de la négociation stratégique. Puis vint le tableau blanc effaçable, avec son cortège de feutres secs et d'effaceurs noircis. Mais en 2026, l'irruption du Tableau Numérique Interactif (TNI) ne représente pas une simple transition de support : c’est une métamorphose cognitive de la réunion de travail.
            </p>

            <h3 className="text-2xl font-editorial font-bold text-stone-900 pt-6">
              01. De la Craie à l’Encre Numérique : Le Triomphe de la Latence Zéro
            </h3>
            <p>
              Les premiers pas des tableaux interactifs dans les années 2000 étaient marqués par une friction exaspérante. Un vidéoprojecteur encombrant projetait une image floue sur une toile fragile ; l'utilisateur devait constamment recalibrer quatre points aux coins de l’écran, et le trait apparaissait avec un retard perceptible de plus de 150 millisecondes. Pour l’esprit humain, habitué à la réponse immédiate d’un stylo sur du papier, cette désynchronisation brisait toute spontanéité créative.
            </p>
            <p>
              Le tournant technologique s'est opéré par l'abandon des rétroprojecteurs au profit de dalles <strong>OLED et Direct LED 4K collées sous vide (Optical Bonding)</strong>. En supprimant l'épaisseur d'air située entre le verre de protection et les sous-pixels lumineux, les ingénieurs ont annihilé l'effet de parallaxe. Quand vous posez la pointe en résine sur l'écran, le photon s'allume au micron précis où se trouve votre main.
            </p>

            {/* Pull Quote */}
            <figure className="my-8 py-6 border-y border-stone-300 text-center">
              <Quote className="w-6 h-6 text-amber-700/60 mx-auto mb-2" />
              <blockquote className="text-xl sm:text-2xl font-editorial italic text-stone-900 max-w-xl mx-auto leading-relaxed">
                « Un écran tactile classique se contente d'afficher. Une TNI de nouvelle génération écoute, structure et libère le flux de pensée collectif. »
              </blockquote>
              <figcaption className="mt-3 text-xs uppercase tracking-widest text-stone-500 font-sans">
                — Direction de l'Innovation Collaborative
              </figcaption>
            </figure>

            <h3 className="text-2xl font-editorial font-bold text-stone-900 pt-6">
              02. L'Hybridation Spatiale : Quand la Distance Disparaît
            </h3>
            <p>
              Avec la généralisation du travail nomade et des campus distribués, le TNI est devenu l’ancrage matériel de l'équipe éclatée. La grande supercherie des réunions en visioconférence sur ordinateur portable était l’asymétrie : les participants distants étaient réduits à de minuscules vignettes silencieuses, tandis que ceux présents en salle monopolisaient la parole.
            </p>
            <p>
              Sur un <strong>Microsoft Surface Hub 3</strong> ou un <strong>Google Series One Board</strong>, la configuration spatiale change la donne. Grâce à des caméras 4K à très grand angle couplées à des algorithmes de vision par ordinateur, la caméra effectue un cadrage individualisé de chaque participant. Lorsqu'un ingénieur se lève pour dessiner un schéma technique sur la vitre, le système ne se contente pas de filmer sa silhouette : il numérise le canevas en direct et l'envoie en synchronisation temps réel aux participants distants, effaçant le corps pour rendre le tracé lisible.
            </p>

            <h3 className="text-2xl font-editorial font-bold text-stone-900 pt-6">
              03. L'Arrivée des Copilotes IA : L'Ère de la Vectorisation Vivante
            </h3>
            <p>
              Mais le bond le plus vertigineux réside dans le logiciel. Jusqu'ici, un tableau interactif stockait des images matricielles statiques (des JPEG ou des PNG d’encre virtuelle). Aujourd'hui, les modèles multimodaux intégrés transforment le canevas en un environnement de travail sémantique.
            </p>
            <p>
              Tracez un organigramme à main levée : l'IA reconnaît immédiatement les relations hiérarchiques, aligne les boîtes, transforme le texte manuscrit en typographie soignée et vérifie la cohérence du schéma. En fin de réunion, une simple commande génère la synthèse exécutif des arbitrages et exporte la feuille de route directement dans les outils de gestion de projet (Jira, Notion, Microsoft Planner).
            </p>

            <h3 className="text-2xl font-editorial font-bold text-stone-900 pt-6">
              04. Quel Modèle Économique pour les Entreprises ?
            </h3>
            <p>
              Pour les directeurs des systèmes d’information (DSI) et les directeurs commerciaux formés à l'école de la négociation B2B, l'investissement dans un parc de TNI n'est plus envisagé comme un poste de dépense bureautique, mais comme un accélérateur de vélocité business. La suppression d'un seul voyage transatlantique par mois compense l'amortissement d'un écran 85 pouces en moins d'une année.
            </p>

            {/* In-Article Action Cards */}
            <div className="my-8 p-6 bg-white rounded-xl border border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div>
                <div className="text-xs uppercase tracking-widest text-amber-800 font-semibold mb-1">
                  EXPÉRIMENTATION PRATIQUE
                </div>
                <div className="text-base font-bold text-stone-900">
                  Testez le Tableau Virtuel Directement
                </div>
                <p className="text-xs text-stone-600 mt-1">
                  Prenez en main le canevas tactile, dessinez et simulez la conversion IA de vos croquis.
                </p>
              </div>
              <button
                onClick={onOpenWhiteboard}
                className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors cursor-pointer shrink-0"
              >
                Ouvrir le Tableau Blanc
              </button>
            </div>
          </div>

          {/* Right Margin Rail: Side notes, figure previews, citations */}
          <aside className="lg:col-span-4 space-y-6 lg:border-l lg:border-stone-200 lg:pl-8">
            {/* Note 1 */}
            <div className="p-4 bg-white rounded-lg border border-stone-200 text-xs">
              <div className="text-[10px] uppercase tracking-widest text-amber-800 font-semibold mb-1">
                POINT D'HISTOIRE · NOTE DE MARGE
              </div>
              <h4 className="font-bold text-stone-900 mb-1">1991 : Le SMART Board pionnier</h4>
              <p className="text-stone-600 leading-relaxed">
                Le premier tableau interactif commercial fut conçu par David Martin et Nancy Knowlton (SMART Technologies). Il utilisait une matrice résistive reliée à un projecteur LCD monochrome.
              </p>
            </div>

            {/* Note 2: Market Data */}
            <div className="p-4 bg-white rounded-lg border border-stone-200 text-xs">
              <div className="text-[10px] uppercase tracking-widest text-amber-800 font-semibold mb-1">
                CHIFFRE DU MARCHÉ MONDIAL
              </div>
              <div className="text-2xl font-bold font-mono-code text-stone-900 my-1">
                9,8 Mds $
              </div>
              <p className="text-stone-600 leading-relaxed">
                Taille estimée du marché mondial des écrans interactifs en 2026, avec un taux de croissance annuel composé (TCAC) de +8,4%.
              </p>
            </div>

            {/* Note 3: Pedagogical Impact */}
            <div className="p-4 bg-stone-100 rounded-lg border border-stone-300 text-xs">
              <div className="text-[10px] uppercase tracking-widest text-stone-600 font-semibold mb-1">
                IMPACT COGNITIF & PÉDAGOGIQUE
              </div>
              <h4 className="font-bold text-stone-900 mb-1">+42% d'attention active</h4>
              <p className="text-stone-600 leading-relaxed">
                Selon les études universitaires menées sur l'EdTech, l'usage d'une TNI couplée à la manipulation tactile directe décuple le taux de mémorisation par rapport à une projection diapositive passive (PowerPoint).
              </p>
            </div>

            {/* Note 4: Callout to Student Defense */}
            <div className="p-4 bg-amber-50/80 rounded-lg border border-amber-300 text-xs">
              <div className="flex items-center gap-1.5 text-amber-800 font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Pour votre Oral d'Examen</span>
              </div>
              <p className="text-amber-900 leading-relaxed mb-3">
                Consultez notre matrice SWOT détaillée, le calculateur de rentabilité (ROI) et les 4 questions pièges du jury.
              </p>
              <button
                onClick={onOpenDefenseKit}
                className="w-full py-1.5 px-3 bg-amber-900 text-white rounded font-medium hover:bg-amber-800 transition-colors cursor-pointer text-center block"
              >
                Voir le Kit Soutenance
              </button>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
};
