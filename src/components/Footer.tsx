import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1c1917] text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-800">
          <div>
            <div className="text-lg font-editorial font-bold text-white tracking-wide">
              REVUE TECH · HORS-SÉRIE TNI
            </div>
            <p className="text-xs text-stone-400 mt-1 max-w-md">
              Publication universitaire et technologique dédiée à l’analyse comparative des Tableaux Numériques Interactifs et des technologies collaboratives d'entreprise.
            </p>
          </div>
          <div className="text-xs text-stone-400 space-y-1">
            <div>Cadre d'évaluation : Projet d'étude Euridis & Écoles Tech B2B</div>
            <div>Sources : Microsoft Tech Community, IEEE Computer Society, EdTech France</div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <div>
            © 2026 Revue des Technologies Numériques · Réalisé pour le projet d'article magazine TNI.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-stone-300">Optical Bonding 4K</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-stone-300">PCAP Sensorics</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-stone-300">Copilot Inking Engine</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
