import tniHardwareStylus from '../assets/images/tni_hardware_stylus_1792402036156.jpg';
import tniCollaborationBoardroom from '../assets/images/tni_collaboration_boardroom_1792402037873.jpg';
import tniAiCanvasInterface from '../assets/images/tni_ai_canvas_interface_1792402037231.jpg';
import innovHumanoidRobotics from '../assets/images/innov_humanoid_robotics_1792402530855.jpg';
import innovQuantumChip from '../assets/images/innov_quantum_chip_1792402530609.jpg';

export interface Hotspot {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  title: string;
  subtitle: string;
  description: string;
  keyMetric: string;
}

export interface ImmersiveExplanation {
  id: string;
  title: string;
  category: string;
  imagePath: string;
  alt: string;
  caption: string;
  executiveSummary: string;
  fullAnalysis: string;
  techSpecs: { label: string; value: string }[];
  hotspots: Hotspot[];
  b2bImpact: string;
}

export interface TniIdea {
  id: string;
  name: string;
  brand: string;
  category: 'Corporate / B2B' | 'EdTech / Éducation' | 'Agile / PME' | 'Cloud & Visioconférence' | 'Technologie Numérique Émergente';
  headline: string;
  whyChooseThis: string;
  pros: string[];
  cons: string[];
  targetAudience: string;
  priceRange: string;
  salesPitch: string;
  isFlagship?: boolean;
}

export interface PressArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'TNI & Workplace' | 'Robotique & IA' | 'Deep Tech & Quantique' | 'Innovation Logicielle';
  categoryLabel: string;
  author: string;
  authorRole: string;
  readTime: string;
  publishDate: string;
  featuredImage: string;
  imageAlt: string;
  imageCaption: string;
  summary: string;
  content: {
    heading: string;
    text: string;
  }[];
  keyTakeaway: string;
  isMainHeadline?: boolean;
  relatedTniTopic?: boolean;
}

export const PRESS_ARTICLES: PressArticle[] = [
  {
    id: 'art-tni-main',
    slug: 'tni-ecran-interactif-revolution-collaboration',
    title: 'L’Écran Vivant : Comment le Tableau Numérique Interactif (TNI) Réinvente la Pensée Collective',
    subtitle: 'Enquête au cœur de la mutation des salles de réunion et des campus : quand le verre optique collé, la latence sub-millimétrique et l’IA générative remplacent le paperboard jetable.',
    category: 'TNI & Workplace',
    categoryLabel: 'Dossier Spécial TNI & Collaboration',
    author: 'Raphaël K. & La Rédaction Tech',
    authorRole: 'Spécialiste B2B Digital & Innovation Euridis',
    readTime: '7 min',
    publishDate: '19 Octobre 2026',
    featuredImage: tniCollaborationBoardroom,
    imageAlt: 'Équipe de direction réunie autour d’un grand écran interactif 4K à Paris avec visioconférence et plans d’architecture',
    imageCaption: 'Fig. 01 — Réunion exécutive en salle connectée : collaboration synchrone entre intervenants sur site et collaborateurs distants à Paris.',
    summary: 'Autrefois simple rétroprojecteur d’écolier, le Tableau Numérique Interactif (TNI) est devenu l’épicentre névralgique des comités de direction et des universités. Analyse des 3 ruptures matérielles et logicielles qui transforment la décision d’entreprise.',
    isMainHeadline: true,
    relatedTniTopic: true,
    keyTakeaway: 'Le passage au TNI connecté avec IA réduit de 35% les déplacements professionnels tout en assurant 100% de comptes-rendus immédiatement actionnables.',
    content: [
      {
        heading: '01. La fin du paperboard jetable et des feutres secs',
        text: 'Pendant plus de deux décennies, les réunions d’affaires se sont résumées à une friction : des feutres Velleda à sec, des photos floues de tableaux blancs jamais relues et une asymétrie totale entre les collaborateurs en salle et ceux connectés à distance. La TNI moderne (Tableau Numérique Interactif) change radicalement la donne grâce à des écrans 4K tactiles multipoints et une intégration cloud native.'
      },
      {
        heading: '02. L’optique sans parallaxe et la réactivité au millimètre',
        text: 'Grâce à la technique de l’Optical Bonding (collage optique sous vide), le verre de protection antireflet 7H est soudé aux cristaux liquides sans interstice d’air. Le cerveau perçoit un tracé instantané (< 15 ms), éliminant toute sensation de décalage artificiel entre la pointe du stylet et l’encre numérique.'
      },
      {
        heading: '03. L’Intelligence Artificielle en copilote de réunion',
        text: 'Désormais, un TNI ne stocke plus une image passive : il comprend ce que vous dessinez. Un croquis à main levée est instantanément converti en schéma vectoriel d’architecture cloud, tandis que les modèles multimodaux résument les arbitrages et génèrent un compte-rendu exécutif dès que la session prend fin.'
      }
    ]
  },
  {
    id: 'art-robotics-humanoid',
    slug: 'robotique-humanoide-industrie-et-commerce',
    title: 'L’Avènement des Humanoïdes Collaboratifs : Quand la Robotique Incarnée Quitte les Laboratoires',
    subtitle: 'Dotés d’une vision par ordinateur biomimétique et de mains à 22 degrés de liberté, les nouveaux assistants robotiques s’intègrent aux côtés des techniciens dans les usines de pointe.',
    category: 'Robotique & IA',
    categoryLabel: 'Robotique & Industrie 5.0',
    author: 'Elena Vance',
    authorRole: 'Analyste Systèmes Autonomes & Mécatronique',
    readTime: '5 min',
    publishDate: '18 Octobre 2026',
    featuredImage: innovHumanoidRobotics,
    imageAlt: 'Robot humanoïde d’ingénierie travaillant en collaboration avec une ingénieure dans un laboratoire technologique moderne',
    imageCaption: 'Fig. 02 — Cohabitation homme-robot dans un laboratoire d’innovation : manipulation fine de composants électroniques et retour haptique.',
    summary: 'La convergence entre grands modèles de langage et corps robotiques bipèdes propulse l’automatisation dans une ère inédite. Les robots n’exécutent plus seulement des boucles préprogrammées : ils comprennent le langage naturel et s’adaptent en temps réel aux aléas de l’atelier.',
    isMainHeadline: false,
    keyTakeaway: 'Les usines équipées de cobots humanoïdes constatent une baisse de 60% des troubles musculo-squelettiques (TMS) sur les lignes d’assemblage complexe.',
    content: [
      {
        heading: 'De la programmation rigide au dialogue naturel',
        text: 'Alors que les bras robotiques industriels des années 1990 exigeaient des semaines de programmation en code machine, les nouveaux humanoïdes sont pilotés par des modèles de fondation multimodaux. Un opérateur peut désormais dire simplement : « Prépare ce faisceau de câbles et vérifie la tension sur le connecteur 4 », et le robot décompose la tâche en sous-actions motrices fluides.'
      },
      {
        heading: 'L’enjeu tactile de la préhension fine',
        text: 'La rupture la plus spectaculaire concerne les mains artificielles. Grâce à des capteurs de pression piézoélectriques intégrés sous un revêtement synthétique souple, le robot ajuste sa force au milligramme près, capable de manipuler aussi bien un œuf fragile qu’une clé à cliquet de mécanique lourde.'
      }
    ]
  },
  {
    id: 'art-quantum-chip',
    slug: 'calcul-quantique-puces-supraconductrices-cryptographie',
    title: 'Puces Supraconductrices & Qubits Logiques : La Fin des Limites du Silicium',
    subtitle: 'Plongée à 15 millikelvins dans les cryostats à dilution : comment les processeurs quantiques ouvrent la voie à la simulation moléculaire et aux batteries du futur.',
    category: 'Deep Tech & Quantique',
    categoryLabel: 'Deep Tech & Calcul Quantique',
    author: 'Marc de Boissieu',
    authorRole: 'Chercheur associé en Physique Quantique Appliquée',
    readTime: '6 min',
    publishDate: '17 Octobre 2026',
    featuredImage: innovQuantumChip,
    imageAlt: 'Processeur quantique supraconducteur dans un cryostat avec câblage coaxial doré',
    imageCaption: 'Fig. 03 — Cœur d’un processeur quantique supraconducteur opérant à 15 millikelvins au sein d’un cryostat à dilution étagé.',
    summary: 'La course à la suprématie quantique utile franchit une étape décisive avec l’apparition des premiers qubits logiques tolérants aux erreurs. Enseignement, chimie verte et logistique mondiale sont aux premières loges.',
    isMainHeadline: false,
    keyTakeaway: 'Le calcul quantique promet de réduire de 15 ans à 6 mois le temps de modélisation informatique de nouvelles molécules pharmaceutiques et d’électrolytes de batteries solides.',
    content: [
      {
        heading: 'Le zéro absolu comme chambre d’expérimentation',
        text: 'Pour maintenir la cohérence quantique de ces puces miniatures, les processeurs doivent être refroidis à une température plus froide que le vide spatial profond (-273,13 °C). À cette échelle, les électrons forment des paires de Cooper et circulent sans aucune résistance électrique, permettant la superposition d’états (0 et 1 simultanément).'
      },
      {
        heading: 'Impacts concrets pour l’économie et la transition énergétique',
        text: 'Loin d’être un simple exploit de physique théorique, cette puissance de calcul brute permet de simuler avec une fidélité atomique la réaction de fixation de l’azote ou la dégradation d’une batterie au lithium, ouvrant la voie à des accumulateurs deux fois plus denses et sans métaux rares.'
      }
    ]
  },
  {
    id: 'art-inking-hardware',
    slug: 'sensorique-tactile-verre-optique-zero-parallaxe',
    title: 'Optical Bonding & Latence 15ms : L’Ingénierie Secrète de l’Écriture Numérique',
    subtitle: 'Comment les fabricants d’écrans interactifs sont parvenus à tromper la perception humaine en reproduisant au micron près la sensation d’un feutre de calligraphie.',
    category: 'TNI & Workplace',
    categoryLabel: 'Ingénierie Matérielle & Tactile',
    author: 'Sarah Bensoussan',
    authorRole: 'Ingénieure Ergonomie & Interfaces Homme-Machine',
    readTime: '4 min',
    publishDate: '16 Octobre 2026',
    featuredImage: tniHardwareStylus,
    imageAlt: 'Gros plan macro d’un stylet actif touchant la dalle tactile en verre avec tracé lumineux ultra-net',
    imageCaption: 'Fig. 04 — Résolution sub-pixel : la pointe en résine active délivre un retour haptique haute fréquence sans latence perçue.',
    summary: 'Le cerveau humain détecte un retard tactile dès 40 millisecondes. Décryptage des algorithmes d’interpolation prédictive et des matrices capacitives à 400 Hz qui ont rendu le stylet numérique aussi naturel qu’un crayon HB.',
    isMainHeadline: false,
    relatedTniTopic: true,
    keyTakeaway: 'Grâce à l’anticipation par réseau neuronal local, l’écran calcule la trajectoire future de la main 10 ms avant l’impact physique.',
    content: [
      {
        heading: 'La barrière des 15 millisecondes franchie',
        text: 'Longtemps, l’écriture sur écran souffrait d’un effet d’élastique : le trait suivait le stylet avec un retard disgracieux. Les contrôleurs modernes intègrent désormais de minuscules accélérateurs d’IA qui prédisent la courbe de la main humaine selon la vitesse d’approche, traçant le pixel avant même que le calcul complet ne soit validé par le système d’exploitation.'
      },
      {
        heading: 'Traitement antireflet et verre micro-gravé',
        text: 'Pour éviter que le stylet ne glisse comme sur une vitre de salle de bain, le verre subit une gravure chimique microscopique. Ce micro-relief crée un frottement contrôlé simulant parfaitement la résistance mécanique d’une feuille de papier haut de gamme.'
      }
    ]
  },
  {
    id: 'art-ai-canvas-synthesis',
    slug: 'ia-vectorisation-semantique-whiteboard-canvas',
    title: 'De l’Esquisse au Schéma Vectoriel : L’IA Multimodale au Cœur du Tableau Blanc',
    subtitle: 'Fini les photos floues de fin de réunion : découvrez comment les algorithmes de computer vision structurent la pensée brute en flux de données exploitables.',
    category: 'Innovation Logicielle',
    categoryLabel: 'Logiciel & IA Multimodale',
    author: 'Raphaël K.',
    authorRole: 'Chroniqueur Innovations Numériques',
    readTime: '5 min',
    publishDate: '15 Octobre 2026',
    featuredImage: tniAiCanvasInterface,
    imageAlt: 'Interface de tableau blanc intelligent transformant des schémas dessinés à la main en diagrammes vectoriels précis',
    imageCaption: 'Fig. 05 — Moteur de vectorisation IA : reconnaissance de formes géométriques et typographie automatisée en direct.',
    summary: 'L’encre numérique n’est plus un fichier image inerte. Les tableaux modernes analysent la sémantique de vos croquis, relient les concepts et génèrent automatiquement des tickets Jira et des pages Notion en temps réel.',
    isMainHeadline: false,
    relatedTniTopic: true,
    keyTakeaway: 'Plus de 80% des entreprises interrogées déclarent avoir supprimé l’étape de retranscription manuelle des brainstormings grâce aux TNI dotées d’IA.',
    content: [
      {
        heading: 'Reconnaissance sémantique des diagrammes',
        text: 'Lorsque vous tracez deux rectangles reliés par une flèche avec l’inscription « API » au milieu, le logiciel n’enregistre pas des traits de couleur : il crée un objet relationnel dans une base de données vectorielle. Le schéma peut être exporté directement en format SVG, draw.io ou dans une documentation technique formelle.'
      },
      {
        heading: 'La fin du syndrome de la réunion stérile',
        text: 'En reliant le tableau blanc au compte d’entreprise (Microsoft 365, Google Workspace), l’IA assigne les tâches aux personnes présentes en s’appuyant sur la reconnaissance vocale et l’annuaire interne, garantissant qu’aucune décision ne reste lettre morte.'
      }
    ]
  }
];

export const TNI_IDEAS: TniIdea[] = [
  {
    id: 'surface-hub-3',
    name: 'Microsoft Surface Hub 3',
    brand: 'Microsoft Enterprise',
    category: 'Corporate / B2B',
    headline: 'Le titan de la collaboration hybride avec IA Copilot intégrée',
    whyChooseThis: 'Idéal pour un projet d’école ou d’article tech : écosystème Teams omniprésent en entreprise, pivot d’écran 50" paysage/portrait (Smart Rotation), stylet avec zéro parallaxe et intégration de Copilot Whiteboard.',
    pros: [
      'Smart Rotation native (passe de l’horizontal au vertical en 1 geste)',
      'Intégration directe Microsoft 365, Teams Rooms & Copilot IA',
      'Caméra intelligente IA 4K avec cadrage automatisé des intervenants',
      'Double stylet actif avec sensibilité à 4096 niveaux de pression'
    ],
    cons: [
      'Prix élevé (> 10 000 € avec stand et licence)',
      'Dépendance totale à l’écosystème Windows / Microsoft'
    ],
    targetAudience: 'Comités de direction, cabinets d’architectes, grandes entreprises du CAC 40, universités d’élite',
    priceRange: '10 500 € – 24 000 € (selon taille 50" ou 85")',
    salesPitch: '« Vous n’achetez pas un simple écran, mais une salle de téléportation collaborative où la distance géographique s’efface grâce à l’IA. »',
    isFlagship: true,
  },
  {
    id: 'promethean-activpanel-9',
    name: 'Promethean ActivPanel 9 Premium',
    brand: 'Promethean EdTech',
    category: 'EdTech / Éducation',
    headline: 'La référence absolue du monde éducatif et de la formation professionnelle',
    whyChooseThis: 'Parfait si ton article veut s’orienter vers la pédagogie moderne, les écoles supérieures et la transformation des cours magistraux en ateliers interactifs.',
    pros: [
      'Technologie tactile exclusive Vellum (écriture fluide sans décalage)',
      'Reconnaissance automatique de la paume et différenciation stylet/doigt',
      'Verre trempé antibactérien 7H résistant aux chocs',
      'Logiciel ActivInspire plébiscité par des millions d’enseignants'
    ],
    cons: [
      'Interface parfois un peu typée « école » pour un board corporate strict',
      'Moins de puissance graphique native sans module PC OPS dédié'
    ],
    targetAudience: 'Écoles supérieures, lycées, centres de formation, organismes EdTech',
    priceRange: '2 800 € – 6 500 € (65" à 86")',
    salesPitch: '« Transformez un auditoire passif en acteurs engagés grâce au standard d’interactivité le plus fiable au monde. »'
  },
  {
    id: 'samsung-flip-pro',
    name: 'Samsung Flip Pro (WMB)',
    brand: 'Samsung Display',
    category: 'Agile / PME',
    headline: 'L’écran tactile ultra-réactif pour agences créatives et startups agiles',
    whyChooseThis: 'Superbe sujet axé sur le design, l’ergonomie et la rapidité : latence d’écriture record de 26 ms, 20 points de contact simultanés et mirroring sans fil multi-appareils (AirPlay 2, SmartView, Windows).',
    pros: [
      'Latence record de 26 ms avec logique d’anticipation prédictive',
      'Capacité de partage multi-écrans jusqu’à 4 terminaux en simultané',
      'Mode peinture aquarelle et pinceau avec détection de pression d’huile',
      'Excellent rapport qualité/prix pour les espaces de coworking'
    ],
    cons: [
      'Système d’exploitation Tizen parfois fermé pour certaines apps tierces',
      'Capteurs de visioconférence vendus séparément en option'
    ],
    targetAudience: 'Agences de design, startups tech, incubateurs, PME innovantes',
    priceRange: '2 200 € – 4 900 € (55" à 85")',
    salesPitch: '« La spontanéité du paperboard papier alliée à la puissance illimitée du cloud 4K. »'
  },
  {
    id: 'google-meet-board-65',
    name: 'Google Meet Series One Board 65',
    brand: 'Google & Avocor',
    category: 'Cloud & Visioconférence',
    headline: 'L’épure collaborative centrée sur Google Workspace et l’audio TrueVoice',
    whyChooseThis: 'Idéal si tu souhaites analyser comment Google rivalise avec Microsoft dans les salles de travail connectées en s’appuyant sur ses puces TPU.',
    pros: [
      'Puces Coral M.2 avec accélération matérielle de l’IA vocale Google',
      'Isolation vocale TrueVoice éliminant 100% des bruits parasites (claviers, travaux)',
      'Écran tactile 65" 4K antireflet et anti-traces de doigts',
      'Synchronisation instantanée avec Google Drive et Google Vibe'
    ],
    cons: [
      'Taille unique de 65 pouces',
      'Nécessite un abonnement annuel Google Workspace Enterprise'
    ],
    targetAudience: 'Scale-ups, entreprises Google-first, cabinets de conseil internationaux',
    priceRange: '6 800 € + licence annuelle Google Meet',
    salesPitch: '« Lancez une session de travail d’un seul tapotement, sans jamais configurer un câble vidéo ou un micro. »'
  },
  {
    id: 'jumeau-numerique-tn',
    name: 'Le Jumeau Numérique Industriel (Alternative TN)',
    brand: 'Concept Technologie Numérique (TN)',
    category: 'Technologie Numérique Émergente',
    headline: 'Si ton sujet porte sur les "Technologies Numériques" (TN) au sens large',
    whyChooseThis: 'Si ton professeur parlait de "TN" pour Technologie Numérique (ou NTIC) plutôt que de TNI (Tableau Numérique), le Jumeau Numérique est l’un des sujets les plus valorisés en B2B : réplique virtuelle temps réel d’une usine ou d’un bâtiment couplée à l’IoT.',
    pros: [
      'Sujet hautement stratégique pour Euridis et les grands comptes industriels',
      'Convergence IoT, Big Data, IA prédictive et modélisation 3D',
      'Économies massives en maintenance prédictive (-30% de pannes)'
    ],
    cons: [
      'Projet plus abstrait qu’un écran physique interactif'
    ],
    targetAudience: 'Usines automobiles, aéronautique (Airbus, Safran), hôpitaux intelligents, Smart Cities',
    priceRange: 'De 50 000 € à plusieurs millions d’euros selon l’usine',
    salesPitch: '« Simulez dix ans de fatigue industrielle en deux minutes avant même de poser la première brique. »'
  }
];

export const IMMERSIVE_EXPLANATIONS: ImmersiveExplanation[] = [
  {
    id: 'hardware-sensorique',
    title: 'Anatomie du Contact : Du Verre Optique à l’Encre Sub-Millimétrique',
    category: 'Décryptage N°1 · Matériel & Sensorique',
    imagePath: tniHardwareStylus,
    alt: 'Macro photographie d’un stylet actif sur un écran tactile 4K avec tracé lumineux de précision',
    caption: 'Fig. 01 — Tracé sub-pixel sur dalle 4K avec optical bonding et stylet électromagnétique actif (4096 niveaux de pression).',
    executiveSummary: 'Ce qui séparait autrefois le tableau classique du numérique était la latence et l’effet de « parallaxe ». Les dalles modernes résolvent cette friction grâce au collage optique sans interstice et au rejet intelligent de la paume.',
    fullAnalysis: `Pour qu'un utilisateur adopte un tableau interactif, la friction cognitive doit être nulle : le cerveau humain perçoit un décalage dès 50 millisecondes. 
    Sur les générations actuelles, le verre de protection antireflet est directement fusionné à la matrice LCD par polymérisation sous vide (procédé d'Optical Bonding). Cette prouesse élimine la réfraction de l'air et donne la sensation magique que l'encre numérique s'écoule directement sous la pointe physique du stylet.
    
    Couplé à une fréquence d'échantillonnage tactile de 400 Hz, le contrôleur différencie instantanément la pulpe d'un doigt (pour faire défiler ou zoomer), la tranche de la paume (rejetée sans trace) et l'impulsion électromagnétique du stylet (pour un trait calligraphique au micron près).`,
    techSpecs: [
      { label: 'Technologie Tactile', value: 'Capacitif Projeté (PCAP) & EMR actif' },
      { label: 'Temps de réponse tactile', value: '< 15 ms (Fluidité naturelle)' },
      { label: 'Échantillonnage', value: '400 Hz (400 lectures/sec)' },
      { label: 'Niveaux de pression', value: '4 096 échelons gradués' },
      { label: 'Épaisseur de verre', value: '3.2 mm trempé avec traitement anti-microbien 7H' }
    ],
    hotspots: [
      {
        id: 'h1',
        x: 62,
        y: 48,
        title: 'Pointe de Stylet Active à Résonance EMR',
        subtitle: 'Précision chirurgicale sans batterie',
        description: 'La pointe génère un champ électromagnétique capté par la matrice inférieure, permettant d’écrire avec une précision de 0.2 mm et une inclinaison jusqu’à 45 degrés.',
        keyMetric: '0.2 mm de précision'
      },
      {
        id: 'h2',
        x: 48,
        y: 56,
        title: 'Zero-Parallax Optical Bonding',
        subtitle: 'Suppression totale de l’entrefer d’air',
        description: 'Le verre de protection est collé directement sur les sous-pixels OLED/LCD par résine UV. L’encre numérique semble affleurer la surface du verre sans aucun décalage angulaire.',
        keyMetric: '0 mm d’écart perçu'
      },
      {
        id: 'h3',
        x: 18,
        y: 42,
        title: 'Châssis en Alliage d’Aluminium Usiné',
        subtitle: 'Dissipation thermique passive & rigidité',
        description: 'Pour maintenir un silence absolu en réunion, la chaleur des processeurs est dissipée sur l’ensemble du cadre métallique sans aucun ventilateur audible.',
        keyMetric: '0 dB de bruit résiduel'
      }
    ],
    b2bImpact: 'Supprime la réticence des dirigeants et conférenciers : 94% des utilisateurs affirment retrouver la sensation tactile d’un feutre de haute qualité.'
  },
  {
    id: 'collaboration-hybride',
    title: 'La Rupture Spatiale : Quand la Salle de Conseil Fusionne avec le Monde',
    category: 'Décryptage N°2 · Écosystème & Hybridation',
    imagePath: tniCollaborationBoardroom,
    alt: 'Vue d’une salle de réunion moderne à Paris avec grand écran interactif affichant plans et visio d’équipe',
    caption: 'Fig. 02 — Déploiement en salle exécutive : collaboration simultanée entre intervenants sur site et collaborateurs distants.',
    executiveSummary: 'Le TNI n’est plus un écran d’affichage passif : c’est le pont central entre les collaborateurs présents dans la pièce et les équipes distantes, éliminant la fracture entre présentiel et télétravail.',
    fullAnalysis: `Avant l'avènement des écrans collaboratifs tout-en-un, une salle de réunion nécessitait cinq équipements disparates : un vidéoprojecteur bruyant, une caméra de visioconférence fixe, une pieuvre téléphonique centrale, un tableau blanc Veleda et un PC hôte truffé de câbles HDMI.
    
    Aujourd'hui, une TNI moderne intègre dans son corps un processeur puissant, un réseau de micros à formation de faisceaux (beamforming) capables de capter une voix à 8 mètres sans écho, et des caméras grand angle 4K avec cadrage automatisé basé sur la vision par ordinateur. Les participants distants voient les annotations en direct sur leur propre écran comme s'ils se trouvaient devant le tableau.`,
    techSpecs: [
      { label: 'Résolution d’Affichage', value: '4K UHD (3840 x 2160 pixels) @ 60 Hz' },
      { label: 'Champ de vision caméra', value: '136° Ultra Grand Angle avec AI Speaker Framing' },
      { label: 'Réseau de micros', value: '8 micros MEMS avec réduction de bruit par IA' },
      { label: 'Connectivité sans fil', value: 'Wi-Fi 6E, Miracast, AirPlay 2, Google Cast, NFC' },
      { label: 'Partage simultané', value: 'Jusqu’à 4 flux d’écrans simultanés côte à côte' }
    ],
    hotspots: [
      {
        id: 'h4',
        x: 18,
        y: 45,
        title: 'Canevas Collaboratif Infini & Partagé',
        subtitle: 'Plans architecturaux annotables en temps réel',
        description: 'Les intervenants annotent directement sur les modèles 3D BIM et maquettes CAO, synchronisés instantanément sur les tablettes des ingénieurs sur le chantier.',
        keyMetric: 'Synchronisation cloud < 20ms'
      },
      {
        id: 'h5',
        x: 15,
        y: 64,
        title: 'Galerie Distante & Galerie Égalitaire (Front Row)',
        subtitle: 'Visages à échelle humaine 1:1',
        description: 'Plutôt que des miniatures tassées en bas d’écran, les participants distants apparaissent à la hauteur des yeux des personnes assises autour de la table.',
        keyMetric: 'Égalité de présence garantie'
      },
      {
        id: 'h6',
        x: 38,
        y: 52,
        title: 'Cadrage IA & Suivi Automatisé du Présentateur',
        subtitle: 'L’œil invisible du réalisateur IA',
        description: 'La caméra identifie automatiquement l’intervenant debout devant le tableau et effectue un travelling numérique fluide sans aucun bruit mécanique.',
        keyMetric: 'Zoom 4K sans perte'
      }
    ],
    b2bImpact: 'Réduit les déplacements professionnels de 35% tout en doublant la vitesse de validation des revues de projets complexes.'
  },
  {
    id: 'ia-whiteboard-vector',
    title: 'L’Intelligence Générative : Du Croquis Hésitant au Schéma d’Architecture',
    category: 'Décryptage N°3 · Intelligence Artificielle & Synthèse',
    imagePath: tniAiCanvasInterface,
    alt: 'Écran interactif intelligent convertissant des croquis manuels en schémas d’architecture vectoriels clairs',
    caption: 'Fig. 03 — Moteur IA de vectorisation en temps réel : conversion de la réflexion brute en actifs numériques exploitables.',
    executiveSummary: 'La véritable révolution logicielle réside dans la reconnaissance sémantique : le tableau n’enregistre plus de simples pixels noirs, mais comprend la structure logique de ce que vous dessinez et écrivez.',
    fullAnalysis: `Combien de séances de remue-méninges (brainstorming) se sont achevées par une photo floue d'un tableau blanc envoyée par email et jamais relue ? 
    
    Les TNI de nouvelle génération embarquent des modèles de vision et de langage multimodaux. Lorsque vous esquissez un cercle bancal avec une flèche pointant vers un rectangle, l'algorithme convertit automatiquement ce geste en composant vectoriel parfait (boîte d'API, base de données, flux de transactions).
    
    Mieux encore : en fin de session, l'intelligence artificielle résume les décisions prises, extrait les actions prioritaires, assigne les tâches aux personnes présentes via l'annuaire d'entreprise et compile un compte-rendu exécutif en quelques secondes.`,
    techSpecs: [
      { label: 'Moteur de Vectorisation', value: 'Shape & Ink Recognition IA locale' },
      { label: 'OCR Multilingue', value: 'Reconnaissance manuscrite dans 45 langues' },
      { label: 'Synthèse sémantique', value: 'Génération de comptes-rendus et cartes mentales' },
      { label: 'Export universel', value: 'PDF vectoriel, SVG, JSON, Notion, Confluence, Teams' },
      { label: 'Chiffrement des données', value: 'Puce TPM 2.0 matérielle & BitLocker' }
    ],
    hotspots: [
      {
        id: 'h7',
        x: 21,
        y: 42,
        title: 'Zone d’Idéation Brute & Croquis Manuscrits',
        subtitle: 'Spontanéité de la pensée humaine',
        description: 'L’utilisateur trace ses idées librement au feutre virtuel. Le système analyse les relations spatiales entre les mots-clés et les flèches directionnelles.',
        keyMetric: 'Zéro contrainte d’interface'
      },
      {
        id: 'h8',
        x: 48,
        y: 46,
        title: 'Conversion Vectorielle Automatique en Temps Réel',
        subtitle: 'Le croquis devient schéma technique prêt pour la prod',
        description: 'Dès que le geste s’achève, l’IA remplace le tracé à main levée par une icône cloud officielle, un conteneur et des connecteurs orthogonaux propres.',
        keyMetric: 'Gain de 4h de retranscription'
      },
      {
        id: 'h9',
        x: 64,
        y: 35,
        title: 'Télémétrie & Données de Projet Connectées',
        subtitle: 'Widgets dynamiques branchés aux serveurs',
        description: 'Le tableau affiche des jauges de performance réelles et des métriques de projet en temps réel sans quitter l’espace de brainstorming.',
        keyMetric: 'Synchronisation API directe'
      }
    ],
    b2bImpact: 'Élimine le syndrome du « travail jetable » : 100% des ateliers de travail produisent immédiatement un livrable actionnable.'
  }
];

export const SWOT_DATA = {
  strengths: [
    'Gain d’engagement spectaculaire des équipes et apprenants (+40% de rétention)',
    'Suppression du papier, des consommables feutres et des impressions grand format',
    'Hybridation parfaite présentiel/distanciel avec affichage 4K immersif',
    'Valorisation immédiate de l’image d’innovation de l’entreprise ou de l’école'
  ],
  weaknesses: [
    'Coût d’acquisition initial important (matériel, support mobile, installation)',
    'Courbe d’apprentissage pour les collaborateurs réfractaires au numérique',
    'Dépendance au réseau Wi-Fi / Ethernet et aux mises à jour de sécurité'
  ],
  opportunities: [
    'Intégration fulgurante des IA génératives (synthèse vocale, OCR intelligent)',
    'Marché B2B en pleine explosion porté par les politiques de flex-office',
    'Subventions publiques pour la digitalisation des écoles et universités'
  ],
  threats: [
    'Risque de sous-utilisation si les équipes ne sont pas formées (« syndrome du bel écran noir »)',
    'Obsolescence des modules PC (OPS) après 5 à 7 ans si non modulaires',
    'Concurrence des casques de réalité mixte (Apple Vision Pro, Meta Quest)'
  ]
};

export const JURY_QUESTIONS = [
  {
    question: "« Pourquoi choisir une TNI plutôt qu'un grand téléviseur connecté classique à 800 € ? »",
    keyAnswer: "Un téléviseur classique est un récepteur passif unidirectionnel. La TNI est un atelier de production bidirectionnel : elle apporte la captation tactile sub-millimétrique, la différenciation stylet/doigt/paume, des microphones beamforming et surtout un OS collaboratif interactif qui transforme une réunion d'observation en séance de co-création active."
  },
  {
    question: "« Quel est le principal frein à l'achat pour un client B2B et comment le lever ? »",
    keyAnswer: "Le frein n'est pas tant le prix d'achat que la peur de la sous-utilisation (« l'écran que personne ne sait allumer »). L'argumentaire clé consiste à vendre une offre packagée comprenant la formation certifiante des utilisateurs, l'interfaçage transparent avec les outils existants (Office 365 / Google Workspace) et la garantie d'un démarrage en 1 seul clic."
  },
  {
    question: "« En quoi l'Intelligence Artificielle transforme-t-elle l'usage d'une TNI en 2026 ? »",
    keyAnswer: "L'IA transforme l'encre numérique en sémantique : elle convertit les croquis brouillons en diagrammes vectoriels normalisés, transcrit et traduit les propos oraux en temps réel, et génère automatiquement un compte-rendu structuré avec actions à mener dès la fermeture de la session."
  },
  {
    question: "« Quel est le modèle économique (Business Model) pour un revendeur ou intégrateur IT ? »",
    keyAnswer: "Le business ne repose pas seulement sur la marge matérielle (Hardware, 12 à 20%), mais sur les revenus récurrents (ARR) : contrats de maintenance de salle, abonnements aux suites logicielles collaboratives, licences de sécurité MDM (Mobile Device Management) et prestations d'onboarding/formation."
  }
];
