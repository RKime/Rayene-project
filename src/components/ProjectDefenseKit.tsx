import React, { useState } from 'react';
import { SWOT_DATA, JURY_QUESTIONS } from '../data/tniData';
import { Calculator, Award, CheckCircle2, AlertTriangle, TrendingUp, ShieldAlert, ChevronDown, ChevronUp } from 'lucide-react';

export const ProjectDefenseKit: React.FC = () => {
  // ROI Calculator States
  const [roomCount, setRoomCount] = useState<number>(3);
  const [screenCost, setScreenCost] = useState<number>(11000);
  const [avoidedTripsPerYear, setAvoidedTripsPerYear] = useState<number>(8);
  const [avgTripCost, setAvgTripCost] = useState<number>(650);
  const [hoursTranscribingSavedPerWeek, setHoursTranscribingSavedPerWeek] = useState<number>(4);
  const [hourlyWage, setHourlyWage] = useState<number>(45);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Calculations
  const totalInvestment = roomCount * screenCost;
  const annualTravelSavings = roomCount * avoidedTripsPerYear * avgTripCost;
  const annualLaborSavings = roomCount * hoursTranscribingSavedPerWeek * 46 * hourlyWage;
  const annualTotalSavings = annualTravelSavings + annualLaborSavings;
  const paybackMonths = annualTotalSavings > 0 ? ((totalInvestment / annualTotalSavings) * 12).toFixed(1) : 'N/A';
  const threeYearRoi = totalInvestment > 0 ? (((annualTotalSavings * 3 - totalInvestment) / totalInvestment) * 100).toFixed(0) : '0';

  return (
    <section className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2">
            GUIDE POUR L'ÉVALUATION · DOSSIER DE SOUTENANCE ÉTUDIANT
          </div>
          <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-stone-900 tracking-tight">
            Le Kit d'Excellence : SWOT, Simulateur de ROI & Questions du Jury
          </h2>
          <p className="mt-3 text-stone-600 text-sm leading-relaxed">
            Pour réussir votre article de magazine et votre présentation orale (contexte école de commerce / tech sales Euridis), voici les outils quantitatifs et stratégiques pour convaincre n'importe quel jury d'examen.
          </p>
        </div>

        {/* 1. Interactive ROI Calculator */}
        <div className="mb-16 p-8 bg-[#faf9f6] rounded-xl border border-stone-300">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-200">
            <div className="w-9 h-9 rounded-lg bg-stone-900 text-white flex items-center justify-center">
              <Calculator className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-900">
                Simulateur de Rentabilité Financière (Business Case B2B)
              </h3>
              <p className="text-xs text-stone-500">
                Ajustez les paramètres d'équipement pour justifier le retour sur investissement auprès d'une direction financière (DSI / DAF).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-4 text-xs">
              <div>
                <div className="flex justify-between font-medium text-stone-700 mb-1">
                  <span>Nombre de salles équipées :</span>
                  <span className="font-mono-code font-bold text-stone-900">{roomCount} salles</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={roomCount}
                  onChange={(e) => setRoomCount(Number(e.target.value))}
                  className="w-full accent-stone-900 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between font-medium text-stone-700 mb-1">
                  <span>Coût moyen par TNI + accessoires (€) :</span>
                  <span className="font-mono-code font-bold text-stone-900">{screenCost.toLocaleString()} €</span>
                </div>
                <input
                  type="range"
                  min="2500"
                  max="25000"
                  step="500"
                  value={screenCost}
                  onChange={(e) => setScreenCost(Number(e.target.value))}
                  className="w-full accent-stone-900 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between font-medium text-stone-700 mb-1">
                  <span>Voyages d'affaires évités par salle / an (visio collaborative 4K) :</span>
                  <span className="font-mono-code font-bold text-stone-900">{avoidedTripsPerYear} voyages</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="30"
                  value={avoidedTripsPerYear}
                  onChange={(e) => setAvoidedTripsPerYear(Number(e.target.value))}
                  className="w-full accent-stone-900 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between font-medium text-stone-700 mb-1">
                  <span>Heures de compte-rendu / retranscription économisées par semaine (IA) :</span>
                  <span className="font-mono-code font-bold text-stone-900">{hoursTranscribingSavedPerWeek} h / sem</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={hoursTranscribingSavedPerWeek}
                  onChange={(e) => setHoursTranscribingSavedPerWeek(Number(e.target.value))}
                  className="w-full accent-stone-900 cursor-pointer"
                />
              </div>
            </div>

            {/* Calculated Output Card */}
            <div className="lg:col-span-6 p-6 bg-white rounded-lg border border-stone-300 space-y-4">
              <div className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
                Résultats du Modèle Économique
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-stone-50 rounded border border-stone-200">
                  <div className="text-[11px] text-stone-500">Investissement Total Initial</div>
                  <div className="text-lg font-bold font-mono-code text-stone-900">
                    {totalInvestment.toLocaleString()} €
                  </div>
                </div>

                <div className="p-3 bg-stone-50 rounded border border-stone-200">
                  <div className="text-[11px] text-stone-500">Économies Annuelles Récurrentes</div>
                  <div className="text-lg font-bold font-mono-code text-emerald-700">
                    +{annualTotalSavings.toLocaleString()} € / an
                  </div>
                </div>

                <div className="p-3 bg-amber-50 rounded border border-amber-200">
                  <div className="text-[11px] text-amber-800">Délai d'Amortissement (Payback)</div>
                  <div className="text-xl font-bold font-mono-code text-amber-950">
                    {paybackMonths} mois
                  </div>
                </div>

                <div className="p-3 bg-emerald-50 rounded border border-emerald-200">
                  <div className="text-[11px] text-emerald-800">ROI Net sur 3 ans</div>
                  <div className="text-xl font-bold font-mono-code text-emerald-950">
                    +{threeYearRoi} %
                  </div>
                </div>
              </div>

              <div className="text-xs text-stone-600 leading-relaxed pt-2 border-t border-stone-200">
                <strong>Argument Massue pour l’Oral :</strong> L'investissement dans {roomCount} écran(s) interactif(s) est intégralement rentabilisé en <strong>{paybackMonths} mois</strong> grâce à la seule suppression des déplacements d'affaires et au gain de productivité apporté par l'IA de synthèse de réunion.
              </div>
            </div>
          </div>
        </div>

        {/* 2. SWOT Matrix */}
        <div className="mb-16">
          <div className="max-w-2xl mb-6">
            <h3 className="text-xl font-editorial font-bold text-stone-900">
              Matrice Stratégique SWOT : Le Bilan Complet de la TNI
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Analyse complète à intégrer dans votre rapport écrit pour démontrer votre esprit critique face au matériel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Strengths */}
            <div className="p-6 bg-white rounded-xl border border-emerald-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Forces (Strengths)</span>
              </div>
              <ul className="space-y-2 text-xs text-stone-700">
                {SWOT_DATA.strengths.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Weaknesses */}
            <div className="p-6 bg-white rounded-xl border border-amber-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider mb-3">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Faiblesses (Weaknesses)</span>
              </div>
              <ul className="space-y-2 text-xs text-stone-700">
                {SWOT_DATA.weaknesses.map((w, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opportunities */}
            <div className="p-6 bg-white rounded-xl border border-blue-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-wider mb-3">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span>Opportunités (Opportunities)</span>
              </div>
              <ul className="space-y-2 text-xs text-stone-700">
                {SWOT_DATA.opportunities.map((o, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Threats */}
            <div className="p-6 bg-white rounded-xl border border-red-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-red-800 font-bold text-xs uppercase tracking-wider mb-3">
                <ShieldAlert className="w-4 h-4 text-red-600" />
                <span>Menaces (Threats)</span>
              </div>
              <ul className="space-y-2 text-xs text-stone-700">
                {SWOT_DATA.threats.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Jury Tricky Questions & Bulletproof Answers */}
        <div className="mb-16">
          <div className="max-w-2xl mb-6">
            <div className="flex items-center gap-2 text-amber-800 font-semibold text-xs uppercase tracking-wider mb-1">
              <Award className="w-4 h-4" />
              <span>Préparation Orale</span>
            </div>
            <h3 className="text-xl font-editorial font-bold text-stone-900">
              Les 4 Questions Pièges Fréquentes du Jury et Vos Réponses
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Les évaluateurs d'écoles technologiques et commerciales posent souvent ces questions pour tester si vous maîtrisez la réalité du terrain.
            </p>
          </div>

          <div className="space-y-3">
            {JURY_QUESTIONS.map((q, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-lg border border-stone-300 bg-white overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50"
                  >
                    <span className="text-xs sm:text-sm font-bold text-stone-900">
                      {q.question}
                    </span>
                    <span className="shrink-0 text-stone-500">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="p-4 pt-0 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                      <div className="font-semibold text-amber-900 mb-1">
                        🎯 Stratégie de réponse recommandée :
                      </div>
                      <p>{q.keyAnswer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Presentation Structure in 3 Parts */}
        <div className="p-8 bg-stone-900 text-white rounded-xl">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
              PLAN DE SOUTENANCE RECOMMANDÉ (10 MINUTES)
            </div>
            <h3 className="text-xl font-editorial font-bold text-white mb-4">
              Comment structurer votre présentation orale
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-300">
              <div className="p-4 bg-stone-800/80 rounded-lg border border-stone-700">
                <div className="font-bold text-amber-300 mb-1">Partie 1 (2 min 30)</div>
                <div className="text-white font-medium mb-1">Le Contexte & Le Problème</div>
                <p className="leading-relaxed text-stone-400">
                  Expliquer la fin de la réunion passive et la fatigue des visios isolées. Présenter pourquoi vous avez choisi le Surface Hub 3 (ou la TNI choisie).
                </p>
              </div>

              <div className="p-4 bg-stone-800/80 rounded-lg border border-stone-700">
                <div className="font-bold text-amber-300 mb-1">Partie 2 (5 min)</div>
                <div className="text-white font-medium mb-1">Les 3 Piliers Technologiques</div>
                <p className="leading-relaxed text-stone-400">
                  Projeter les 3 décryptages immersifs (le verre optique collé, la fusion hybride caméra/son et la vectorisation IA du canevas).
                </p>
              </div>

              <div className="p-4 bg-stone-800/80 rounded-lg border border-stone-700">
                <div className="font-bold text-amber-300 mb-1">Partie 3 (2 min 30)</div>
                <div className="text-white font-medium mb-1">Le Business Case & Clôture</div>
                <p className="leading-relaxed text-stone-400">
                  Montrer la rentabilité calculée (amortissement en moins d'un an) et répondre avec assurance aux objections du jury.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
