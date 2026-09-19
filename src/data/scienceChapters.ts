import { ChapterNote } from '../types';

export const SCIENCE_CHAPTERS: ChapterNote[] = [
  {
    id: 'sci-ch1',
    subject: 'Science',
    chapterNumber: 1,
    chapterTitle: 'Chemical Reactions and Equations',
    tagline: 'Master balancing, reaction types, redox & everyday phenomena',
    estimatedBoardWeightage: '4 - 6 Marks',
    summaryPoints: [
      'Chemical Reaction: A process where one or more substances turn into new substances with different properties.',
      'Chemical Equation: A short way to write a reaction using symbols and formulas of reactants and products.',
      'Law of Conservation of Mass: Mass cannot be created or destroyed, which is why chemical equations must be balanced.',
      'Types of Chemical Reactions:',
      '• Combination: Two or more substances join to make a single product (A + B → AB).',
      '• Decomposition: One reactant breaks down into two or more simpler parts (A → B + C).',
      '• Displacement: A reactive element moves another element out of a compound.',
      '• Double Displacement: Two compounds swap ions to form new compounds.',
      '• Redox (Oxidation-Reduction): Reactions where oxidation (gain of oxygen/loss of electrons) and reduction (loss of oxygen/gain of electrons) happen at the same time.',
      'Effects in Daily Life:',
      '• Corrosion: Metals slowly break down when exposed to air, moisture, or chemicals (like iron rusting).',
      '• Rancidity: Fats and oils spoil when oxidized, changing taste and smell.'
    ],
    topperHandwrittenHighlights: [
      '★ Chemical Reaction: A process where one or more substances turn into new substances with different properties.',
      '★ Chemical Equation & Conservation of Mass: A short way to write a reaction using symbols and formulas. Mass cannot be created or destroyed, which is why chemical equations must be balanced.',
      '★ Types of Chemical Reactions: Combination (A + B → AB) | Decomposition (A → B + C) | Displacement (Reactive element moves another out) | Double Displacement (Ion swap) | Redox (Oxidation = gain of O/loss of e⁻; Reduction = loss of O/gain of e⁻).',
      '★ Effects in Daily Life: Corrosion (Metals slowly break down when exposed to air, moisture, or chemicals like iron rusting) & Rancidity (Fats and oils spoil when oxidized, changing taste and smell).',
      '★ Quicklime vs Slaked Lime: CaO is Quicklime (Calcium Oxide). Ca(OH)₂ is Slaked Lime (Calcium Hydroxide). Whitewashing solution reacts with CO₂ in air to form CaCO₃ (Limestone) after 2-3 days.',
      '★ Color Changes to Memorize: FeSO₄·7H₂O (green) heated → Fe₂O₃ (reddish-brown) + SO₂ + SO₃ (burning sulfur smell).',
      '★ Photolytic Decomposition in Black-and-White Photography: 2AgCl(s) (white) --Sunlight--> 2Ag(s) (grey) + Cl₂(g). Same for 2AgBr.',
      '★ Respiration is an Exothermic Process because glucose combines with oxygen in cells releasing ATP energy.'
    ],
    examinerTraps: [
      'Trap: Confusing displacement with double displacement. Remember: Single element + compound = Displacement; Compound + compound with ion exchange = Double displacement.',
      'Trap: Writing unbalanced chemical equations. CBSE strictly cuts 0.5 to 1 mark if state symbols (s, l, g, aq) or balanced coefficients are omitted in 3-mark questions.'
    ],
    formulasAndReactions: [
      {
        name: 'Formation of Slaked Lime (Exothermic)',
        formula: 'CaO(s) + H₂O(l) → Ca(OH)₂(aq) + Heat',
        where: 'Used for whitewashing walls; vigorous reaction',
        mnemonicOrTip: 'Quicklime is DRY, Slaked lime has SLAKED its thirst with water!'
      },
      {
        name: 'Thermal Decomposition of Lead Nitrate',
        formula: '2Pb(NO₃)₂(s) --Heat--> 2PbO(s) + 4NO₂(g) + O₂(g)',
        where: 'PbO is yellow solid, NO₂ is brown pungent fumes (Board favorite!)',
        mnemonicOrTip: 'Brown fumes always indicate Nitrogen Dioxide (NO₂)!'
      },
      {
        name: 'Electrolysis of Water (Volumetric Ratio)',
        formula: '2H₂O(l) → 2H₂(g) [Cathode] + O₂(g) [Anode]',
        where: 'Ratio of Volume of H₂ to O₂ is 2 : 1',
        mnemonicOrTip: 'Cathode collects Hydrogen (C-H), Anode collects Oxygen (A-O).'
      }
    ],
    pyqs: [
      {
        id: 'pyq-sci-1-1',
        year: 'CBSE 2023 / 2020',
        marks: 3,
        question: 'Identify the reducing agent and oxidizing agent in: MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂.',
        modelAnswer: 'In this reaction: (i) MnO₂ loses oxygen to become MnCl₂, hence MnO₂ undergoes reduction and is the OXIDIZING AGENT. (ii) HCl loses hydrogen to form Cl₂, hence HCl undergoes oxidation and is the REDUCING AGENT.',
        topperTip: 'Always write the definitions of oxidizing and reducing agents in 1 line before identifying to guarantee 3/3 marks.'
      },
      {
        id: 'pyq-sci-1-2',
        year: 'CBSE 2022 Term-1',
        marks: 2,
        question: 'Why does the color of copper sulphate solution change when an iron nail is dipped into it?',
        modelAnswer: 'Iron is more reactive than copper (higher in the reactivity series). It displaces copper from copper sulphate solution: Fe(s) + CuSO₄(aq) [blue] → FeSO₄(aq) [pale light green] + Cu(s) [reddish brown deposit on nail].',
        topperTip: 'Explicitly state both color changes: Blue to Pale Green and Reddish-brown deposit on nail.'
      }
    ]
  },
  {
    id: 'sci-ch2',
    subject: 'Science',
    chapterNumber: 2,
    chapterTitle: 'Acids, Bases and Salts',
    tagline: 'pH scale, Indicators, Chlor-alkali process, and important industrial salts',
    estimatedBoardWeightage: '6 - 8 Marks',
    summaryPoints: [
      'Acids furnish H⁺ (or H₃O⁺ hydronium) ions in aqueous solution; turn blue litmus red; sour taste. Bases furnish OH⁻ ions; turn red litmus blue; bitter & soapy.',
      'Natural indicators: Litmus (lichen), Turmeric (turns reddish-brown in base). Synthetic: Phenolphthalein (colorless in acid, pink in base), Methyl orange (red in acid, yellow in base). Olfactory: Vanilla, onion, clove lose smell in base.',
      'Acid + Metal → Salt + H₂ gas (pop sound test). Base + Metal → Salt + H₂ gas (e.g. 2NaOH + Zn → Na₂ZnO₂ [Sodium Zincate] + H₂↑).',
      'Acid + Carbonate/Bicarbonate → Salt + H₂O + CO₂↑ (turns lime water milky due to CaCO₃, milky color disappears on excess CO₂ due to soluble Ca(HCO₃)₂).',
      'pH scale: 0 to 14. Neutral pH = 7. Acidic < 7, Basic > 7. Gastric juice ~1.2, Pure water ~7.4, Milk of Magnesia ~10, NaOH ~14.',
      'Chlor-Alkali Process: Electrolysis of brine (aqueous NaCl) produces NaOH at cathode, Cl₂ at anode, and H₂ at cathode.',
      'Important Salts: Bleaching Powder (CaOCl₂), Baking Soda (NaHCO₃), Washing Soda (Na₂CO₃·10H₂O), Plaster of Paris (CaSO₄·½H₂O), Gypsum (CaSO₄·2H₂O).'
    ],
    topperHandwrittenHighlights: [
      '★ Water of Crystallization: Fixed number of water molecules chemically attached to one formula unit (CuSO₄·5H₂O blue → white on heating; FeSO₄·7H₂O green; Na₂CO₃·10H₂O).',
      '★ POP Preparation: CaSO₄·2H₂O heated strictly at 373 K (100°C) forms CaSO₄·½H₂O (POP). If heated above 373 K, dead burnt plaster (anhydrous CaSO₄) forms!',
      '★ Dilution Rule: Always add ACID to WATER slowly with constant stirring. Never add water to acid (highly exothermic, can splash acid on face).',
      '★ Antacid: NaHCO₃ or Mg(OH)₂ (Milk of Magnesia) neutralizes excess HCl in stomach.'
    ],
    examinerTraps: [
      'Trap: Writing formula of Plaster of Paris as CaSO₄·H₂O or 2H₂O. It has HALF water of crystallization: CaSO₄·½H₂O or 2CaSO₄·H₂O.',
      'Trap: Missing the equation for excess CO₂ in lime water test: CaCO₃ + H₂O + CO₂ → Ca(HCO₃)₂ (soluble, milkiness disappears).'
    ],
    formulasAndReactions: [
      {
        name: 'Chlor-Alkali Process',
        formula: '2NaCl(aq) + 2H₂O(l) → 2NaOH(aq) + Cl₂(g) [anode] + H₂(g) [cathode]',
        where: 'Electrolysis of concentrated brine solution',
        mnemonicOrTip: 'Anode = Cl₂ (An-Ox, non-metal), Cathode = H₂ and NaOH'
      },
      {
        name: 'Bleaching Powder Preparation',
        formula: 'Ca(OH)₂(s) + Cl₂(g) → CaOCl₂(s) + H₂O(l)',
        where: 'Action of chlorine gas on dry slaked lime',
        mnemonicOrTip: 'Dry slaked lime + chlorine = bleaching power with strong chlorine smell'
      },
      {
        name: 'Plaster of Paris Hydration',
        formula: 'CaSO₄·½H₂O + 1½ H₂O → CaSO₄·2H₂O (Gypsum hard mass)',
        where: 'Setting of fractures and statue casting',
        mnemonicOrTip: 'POP + 1.5 water molecules = Rock hard Gypsum!'
      }
    ],
    pyqs: [
      {
        id: 'pyq-sci-2-1',
        year: 'CBSE 2024 / 2023',
        marks: 5,
        question: 'A compound X is used in the kitchen for making crispy pakoras. On heating, it releases gas Y which turns lime water milky. Identify X, Y, and write the reaction on heating.',
        modelAnswer: '(a) Compound X is Baking Soda (Sodium Hydrogen Carbonate, NaHCO₃). (b) Gas Y is Carbon Dioxide (CO₂). (c) Reaction: 2NaHCO₃ --Heat--> Na₂CO₃ + H₂O + CO₂↑. The released CO₂ turns lime water milky by forming CaCO₃ precipitate.',
        topperTip: 'Mention the use of Baking Powder (NaHCO₃ + mild edible tartaric acid) to make cakes soft and spongy without bitter taste.'
      }
    ]
  },
  {
    id: 'sci-ch3',
    subject: 'Science',
    chapterNumber: 3,
    chapterTitle: 'Metals and Non-Metals',
    tagline: 'Reactivity series, Ionic bonding, Metallurgy extraction, and Corrosion prevention',
    estimatedBoardWeightage: '6 - 7 Marks',
    summaryPoints: [
      'Physical properties: Metals are lustrous, malleable, ductile, sonorous, good conductors of heat and electricity. Exceptions: Mercury is liquid at room temp; Sodium/Potassium can be cut with knife; Lead and Mercury are poor heat conductors; Diamond is non-metal with highest melting point.',
      'Chemical properties: Metal + Oxygen → Basic/Amphoteric Metal Oxide (Al₂O₃ and ZnO are amphoteric oxides reacting with both acids and bases).',
      'Reactivity Series: K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au.',
      'Ionic Compounds: Formed by transfer of electrons from metal to non-metal (e.g. NaCl, MgCl₂). High melting/boiling points, soluble in water, conduct electricity in molten/solution state due to free mobile ions.',
      'Metallurgy: Extraction of metals based on reactivity. Low reactivity: Roasting of sulfide ores (e.g. Cinnabar HgS). Medium reactivity: Calcination (carbonate ores in absence of air) vs Roasting (sulfide ores in presence of air) followed by reduction with Carbon or Thermite reaction (Fe₂O₃ + 2Al → 2Fe(l) + Al₂O₃ + heat). High reactivity: Electrolytic reduction of molten chlorides (Na at cathode, Cl₂ at anode).',
      'Corrosion: Rusting of iron requires both air (O₂) and water (moisture). Prevention: Galvanization (zinc coating), anodizing, electroplating, alloying (Stainless steel: Fe + Cr + Ni + C).'
    ],
    topperHandwrittenHighlights: [
      '★ Amphoteric Oxides Equation: Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O and Al₂O₃ + 2NaOH → 2NaAlO₂ (Sodium Aluminate) + H₂O.',
      '★ Thermite Reaction: Fe₂O₃(s) + 2Al(s) → 2Fe(l) + Al₂O₃(s) + Heat. Liquid molten iron joins railway tracks on the spot!',
      '★ Aqua Regia: Freshly prepared mixture of Concentrated HCl and Concentrated HNO₃ in 3 : 1 ratio. Dissolves gold and platinum.',
      '★ Anodizing: Forming a thick protective layer of aluminium oxide on aluminium using dilute H₂SO₄ electrolysis.'
    ],
    examinerTraps: [
      'Trap: Confusing Roasting with Calcination. Roasting = Sulfide ore heated with excess air. Calcination = Carbonate ore heated in limited/no air. Remember: C for Carbonate, C for Calcination!',
      'Trap: Thinking ionic compounds conduct electricity in solid state. Solid state has rigid crystal lattice; no free ions! Only conduct when molten or dissolved.'
    ],
    formulasAndReactions: [
      {
        name: 'Thermite Process for Railway Tracks',
        formula: 'Fe₂O₃(s) + 2Al(s) → 2Fe(l) + Al₂O₃(s) + Huge Heat',
        where: 'Highly exothermic reduction of iron(III) oxide by aluminium',
        mnemonicOrTip: 'Aluminium steals oxygen violently, melting iron into liquid joints!'
      },
      {
        name: 'Amphoteric Reaction with Base',
        formula: 'Al₂O₃ + 2NaOH → 2NaAlO₂ (Sodium Aluminate) + H₂O',
        where: 'Proves aluminium oxide is amphoteric',
        mnemonicOrTip: 'Forms Sodium Aluminate soluble salt'
      }
    ],
    pyqs: [
      {
        id: 'pyq-sci-3-1',
        year: 'CBSE 2023 / 2021',
        marks: 3,
        question: 'Differentiate between Roasting and Calcination with one balanced chemical equation for each.',
        modelAnswer: '1. Roasting: Process of heating sulfide ores strongly in the presence of excess air to convert them into oxides. Example: 2ZnS(s) [Zinc blende] + 3O₂(g) --Heat--> 2ZnO(s) + 2SO₂(g). 2. Calcination: Process of heating carbonate ores strongly in limited or no air to convert into oxides. Example: ZnCO₃(s) [Calamine] --Heat--> ZnO(s) + CO₂(g).',
        topperTip: 'Always name the ore (Zinc blende and Calamine) to fetch maximum marks.'
      }
    ]
  },
  {
    id: 'sci-ch4',
    subject: 'Science',
    chapterNumber: 4,
    chapterTitle: 'Carbon and Its Compounds',
    tagline: 'Covalent bonding, homologous series, functional groups, ethanol & ethanoic acid',
    estimatedBoardWeightage: '6 - 8 Marks',
    summaryPoints: [
      'Versatile Nature of Carbon: Covalent bonding due to tetravalency (valency 4) and catenation (unique ability to form long stable C-C chains, branched chains, or rings).',
      'Allotropes of Carbon: Diamond (rigid 3D tetrahedral, hardest substance, non-conductor), Graphite (hexagonal layers held by weak van der Waals forces, soft, slippery, conducts electricity), Fullerenes (C-60 soccer-ball buckyball).',
      'Hydrocarbons: Saturated (Alkanes CnH2n+2, single bonds) vs Unsaturated (Alkenes CnH2n double bond, Alkynes CnH2n-2 triple bond).',
      'Functional Groups: Alcohol (-OH), Aldehyde (-CHO), Ketone (>C=O), Carboxylic Acid (-COOH), Halogens (-Cl, -Br).',
      'Homologous Series: Family of compounds having the same functional group and similar chemical properties; successive members differ by -CH₂- unit and 14 u molecular mass.',
      'Chemical Reactions of Carbon: Combustion, Oxidation (alkaline KMnO₄ / acidified K₂Cr₂O₇ oxidizes alcohols to carboxylic acids), Addition (hydrogenation of vegetable oil using Ni catalyst), Substitution (CH₄ + Cl₂ in sunlight).',
      'Ethanol & Ethanoic Acid: Ethanol (C₂H₅OH) reacts with Na to give H₂ gas. Ethanoic acid (CH₃COOH) reacts with ethanol in presence of conc. H₂SO₄ to form sweet-smelling Ester (Esterification).',
      'Soaps and Detergents: Soap molecule has hydrophilic ionic head (-COO⁻Na⁺) and hydrophobic hydrocarbon tail. Forms micelle in oily water to clean dirt. Hard water has Ca²⁺ and Mg²⁺ forming insoluble scum with soap; detergents do not form scum.'
    ],
    topperHandwrittenHighlights: [
      '★ Esterification vs Saponification: Esterification: Carboxylic acid + Alcohol --Conc H₂SO₄--> Ester + Water (fruity smell). Saponification: Ester + NaOH --> Soap (Sodium salt of acid) + Alcohol.',
      '★ Hydrogenation: Vegetable oils (unsaturated liquid fats) + H₂ --Ni catalyst--> Vanaspati Ghee (saturated solid fat). Saturated fats are bad for health!',
      '★ Litmus test: Ethanoic acid turns blue litmus red; Ethanol has NO effect on litmus (neutral)!',
      '★ Sodium bicarbonate test: Ethanoic acid + NaHCO₃ → brisk effervescence of CO₂ gas. Ethanol does NOT give effervescence.'
    ],
    examinerTraps: [
      'Trap: Drawing electron dot structures without showing sharing circles. Always clearly draw the shared pairs between atoms.',
      'Trap: Writing acetic acid instead of IUPAC name Ethanoic acid. Practice IUPAC rules for aldehydes (propanal) vs ketones (propanone).'
    ],
    formulasAndReactions: [
      {
        name: 'Esterification Reaction',
        formula: 'CH₃COOH + C₂H₅OH --Conc. H₂SO₄--> CH₃COOC₂H₅ (Ethyl Ethanoate) + H₂O',
        where: 'Production of sweet fruity smelling esters for perfumes and flavors',
        mnemonicOrTip: 'Acid + Alcohol with Sulfuric acid catalyst drops water and creates fruity ester!'
      },
      {
        name: 'Saponification (Soap Preparation)',
        formula: 'CH₃COOC₂H₅ + NaOH → CH₃COONa (Sodium ethanoate soap) + C₂H₅OH',
        where: 'Alkaline hydrolysis of ester producing soap',
        mnemonicOrTip: 'Soap is the sodium or potassium salt of long chain fatty acids'
      }
    ],
    pyqs: [
      {
        id: 'pyq-sci-4-1',
        year: 'CBSE 2024 / 2020',
        marks: 5,
        question: 'Explain the mechanism of cleaning action of soaps with a neat labeled diagram of a micelle.',
        modelAnswer: 'A soap molecule consists of two parts: (i) A long hydrophobic (water-repelling / oil-loving) hydrocarbon tail, and (ii) A short hydrophilic (water-loving) ionic head (COO⁻Na⁺). When soap is added to oily dirt on cloth in water: The hydrophobic tails dissolve in the oil droplet at the center, while the hydrophilic ionic heads point outwards into the water. This forms a spherical cluster called a MICELLE. The micelle remains suspended as a colloid due to ion-ion repulsion. Agitating the water rinses the oily dirt away.',
        topperTip: 'Label the Hydrophobic tail, Hydrophilic ionic head, and Central oil droplet clearly in the diagram.'
      }
    ]
  },
  {
    id: 'sci-ch5',
    subject: 'Science',
    chapterNumber: 5,
    chapterTitle: 'Life Processes',
    tagline: 'Nutrition, Respiration, Transportation & Excretion in plants and human beings',
    estimatedBoardWeightage: '8 - 10 Marks',
    summaryPoints: [
      'Autotrophic Nutrition: Photosynthesis equation: 6CO₂ + 12H₂O --Chlorophyll & Sunlight--> C₆H₁₂O₆ + 6O₂ + 6H₂O. Stomata guard cells swell when water enters (opening pore) and shrink when water leaves (closing pore).',
      'Human Digestion: Salivary amylase breaks starch → maltose. Stomach secretes HCl (acidic medium & kills germs), Pepsin (digests proteins), Mucus (protects inner wall). Liver secretes Bile juice (alkaline medium & emulsifies large fat globules). Pancreas secretes Trypsin (proteins → peptides) and Lipase (emulsified fats → fatty acids + glycerol). Small intestine villi absorb nutrients.',
      'Respiration: Glucose (6C) in cytoplasm → Pyruvate (3C). Pyruvate in absence of O₂ (yeast) → Ethanol + CO₂ + 2 ATP (Fermentation). In lack of O₂ (muscle cells) → Lactic acid + 2 ATP (causes cramps). In presence of O₂ (mitochondria) → 6CO₂ + 6H₂O + 38 ATP.',
      'Transportation: Human double circulation (Systemic & Pulmonary). Left side carries oxygenated blood; Right side carries deoxygenated blood. Valves prevent backflow. Xylem transports water/minerals (unidirectional, transpiration pull). Phloem translocates sucrose (bidirectional, requires ATP energy).',
      'Excretion: Nephron is structural & functional unit of kidney. Filtration: Glomerulus & Bowman capsule (filtrate has glucose, amino acids, salts, urea). Selective Reabsorption in tubular part. Urine contains urea, uric acid, excess salts and water.'
    ],
    topperHandwrittenHighlights: [
      '★ Blood Pressure: Systolic = 120 mm Hg, Diastolic = 80 mm Hg. Measured by Sphygmomanometer.',
      '★ Villi Function: Finger-like projections in small intestine increase surface area for rapid absorption of digested food and are richly supplied with blood vessels.',
      '★ Transpiration Pull: Evaporation of water from stomata creates a suction force that pulls water from roots through xylem in tall trees during the day.',
      '★ Alveoli vs Nephron: Alveoli are functional units of lungs for gaseous exchange; Nephrons are functional units of kidney for nitrogenous waste excretion.'
    ],
    examinerTraps: [
      'Trap: Writing that bile juice contains digestive enzymes. Bile contains NO digestive enzymes! It acts mechanically by emulsification and setting alkaline pH.',
      'Trap: Forgetting that xylem transport is purely physical (transpiration pull and root pressure), whereas phloem translocation is active and consumes ATP.'
    ],
    formulasAndReactions: [
      {
        name: 'Photosynthesis Master Equation',
        formula: '6CO₂ + 12H₂O --Chlorophyll + Sunlight--> C₆H₁₂O₆ + 6O₂ + 6H₂O',
        where: 'Chloroplasts in mesophyll cells of green leaves',
        mnemonicOrTip: 'Carbon Dioxide + Water yields Glucose + Oxygen + Water'
      },
      {
        name: 'Anaerobic Breakdown in Muscle Cells',
        formula: 'Pyruvate (3-Carbon) --Lack of Oxygen in muscles--> Lactic Acid (3-Carbon) + Energy',
        where: 'During sudden heavy physical sprinting or exercise',
        mnemonicOrTip: 'Lactic acid buildup leads to painful muscle fatigue and cramps!'
      }
    ],
    pyqs: [
      {
        id: 'pyq-sci-5-1',
        year: 'CBSE 2023 / 2022',
        marks: 5,
        question: 'Draw a neat labeled diagram of human alimentary canal and explain the role of: (i) Bile juice, (ii) Pepsin, (iii) Trypsin, (iv) Villi.',
        modelAnswer: '(i) Bile juice: Emulsifies large fat globules into tiny droplets for lipase to act, and converts acidic chyme into alkaline medium. (ii) Pepsin: Secreted in stomach; digests proteins into peptones in an acidic medium (activated by HCl). (iii) Trypsin: Secreted by pancreas into small intestine; digests remaining proteins into peptides in alkaline medium. (iv) Villi: Tiny finger-like projections in the small intestine that immensely increase surface area for nutrient absorption.',
        topperTip: 'Highlight whether the enzyme functions in acidic (pepsin) or alkaline (trypsin) medium.'
      }
    ]
  },
  {
    id: 'sci-ch6',
    subject: 'Science',
    chapterNumber: 6,
    chapterTitle: 'Control and Coordination',
    tagline: 'Neurons, reflex arc, human brain, plant hormones (phytohormones) & tropisms',
    estimatedBoardWeightage: '5 - 6 Marks',
    summaryPoints: [
      'Nervous System: Neuron is the structural unit. Dendrite receives signal → Cyton (cell body) → Axon carries impulse → Axon terminal. Synapse is microscopic gap between two neurons where electrical impulse is converted into neurotransmitter chemical signal.',
      'Reflex Arc: Involuntary, instantaneous response to stimulus. Pathway: Receptor (sense organ) → Sensory neuron → Spinal Cord (relay neuron) → Motor neuron → Effector (muscle/gland). Brain is not directly involved in reflex action to save reaction time.',
      'Human Brain: Forebrain (Cerebrum: seat of intelligence, memory, voluntary actions, sensory interpretation). Midbrain (auditory and visual reflexes). Hindbrain: Cerebellum (body balance, posture, precision of voluntary actions like riding a bicycle), Medulla (involuntary actions: heartbeat, blood pressure, salivation, vomiting), Pons (regulates respiration).',
      'Plant Hormones: Auxin (promotes cell elongation, bends stem towards light - phototropism), Gibberellins (stem growth), Cytokinins (cell division, found in fruits/seeds), Abscisic Acid (stress hormone, growth inhibitor, wilting of leaves).',
      'Tropic Movements: Directional growth movements (Phototropism, Geotropism, Hydrotropism, Chemotropism e.g. pollen tube growth towards ovule). Nastic movements: Non-directional (e.g. thigmonasty in Mimosa pudica touch-me-not leaf folding due to turgor pressure change).'
    ],
    topperHandwrittenHighlights: [
      '★ Synapse Transmission: Electrical impulse reaches axon tip → releases neurotransmitter chemical → chemical diffuses across synaptic cleft → triggers electrical impulse in dendrite of next neuron.',
      '★ Cerebellum vs Medulla: Cerebellum controls voluntary motor balance (walking in straight line); Medulla controls involuntary life survival (BP, peristalsis, vomiting).',
      '★ Iodine Importance: Iodine is essential for thyroid gland to produce Thyroxin hormone which regulates carbohydrate, protein, and fat metabolism. Deficiency causes Goitre (swollen neck).',
      '★ Insulin & Diabetes: Secreted by Pancreas. Regulates blood sugar level. Deficiency causes Diabetes mellitus.'
    ],
    examinerTraps: [
      'Trap: Confusing cerebrum with cerebellum. Cerebrum = Thinking, memory, sensory centers. Cerebellum = Balance, equilibrium, posture precision.',
      'Trap: Writing that Abscisic Acid promotes growth. ABA is an INHIBITOR (wilting of leaves, seed dormancy)!'
    ],
    formulasAndReactions: [
      {
        name: 'Reflex Arc Nerve Circuit',
        formula: 'Stimulus → Receptor → Sensory Neuron → Spinal Cord (Relay) → Motor Neuron → Effector (Muscle)',
        where: 'Protective rapid spinal response',
        mnemonicOrTip: 'S-R-S-S-M-E: Stimulus, Receptor, Sensory, Spinal, Motor, Effector!'
      }
    ],
    pyqs: [
      {
        id: 'pyq-sci-6-1',
        year: 'CBSE 2024 / 2020',
        marks: 3,
        question: 'Trace the sequence of events that occur when a bright light is focused on your eyes.',
        modelAnswer: 'Sequence of events: (1) Receptor: Photoreceptors in the retina of the eye detect the intense bright light. (2) Sensory neuron: Carries the sensory impulse to the brain (midbrain reflex center). (3) Relay neuron: Processes the signal. (4) Motor neuron: Carries the motor command to the effector. (5) Effector: Circular muscles of the iris contract, causing the pupil to constrict and decrease the light entering the eye.',
        topperTip: 'Flowchart format fetches guaranteed full marks in nerve pathway questions.'
      }
    ]
  },
  {
    id: 'sci-ch7',
    subject: 'Science',
    chapterNumber: 7,
    chapterTitle: 'How do Organisms Reproduce?',
    tagline: 'Asexual reproduction, flower reproduction, human reproductive system & contraception',
    estimatedBoardWeightage: '6 - 8 Marks',
    summaryPoints: [
      'Importance of Variation: DNA copying is essential during reproduction. Inaccurate copying causes genetic variation, enabling species to survive drastic environmental changes (niche survival).',
      'Asexual Reproduction: Binary fission (Amoeba in any plane, Leishmania along longitudinal axis), Multiple fission (Plasmodium inside cyst), Fragmentation (Spirogyra), Regeneration (Planaria, Hydra by specialized cells), Budding (Hydra, Yeast), Vegetative Propagation (Bryophyllum leaf notches, Rose grafting), Spore Formation (Rhizopus bread mould with sporangia).',
      'Sexual Reproduction in Flowering Plants: Flower parts: Sepals, Petals, Stamen (male: anther + filament producing pollen grains), Carpel/Pistil (female: stigma, style, ovary containing ovule). Pollination (transfer of pollen from anther to stigma). Double Fertilization: 1 sperm + egg cell → Zygote (embryo); 1 sperm + 2 polar nuclei → Triploid Endosperm (nutrition).',
      'Human Male Reproductive System: Testes in scrotum (2-2.5°C lower than core body temp for sperm formation), produces Testosterone (sperm production & secondary sexual traits), Vas deferens, Prostate gland & Seminal vesicles (add fluid for sperm nutrition and mobility).',
      'Human Female Reproductive System: Ovaries produce estrogen & progesterone, and release one mature ovum every 28 days. Fallopian tube (oviduct) is site of fertilization. Uterus is where embryo implants. Placenta is disc-like vascular tissue providing glucose and O₂ from mother and removing wastes.',
      'Menstruation: Occurs if egg is not fertilized; inner uterine lining (endometrium) along with blood vessels breaks down and discharges through vagina (lasts 3-5 days).',
      'Contraception Methods: Barrier (Condoms, diaphragms; prevent STDs like HIV/AIDS, Gonorrhoea, Syphilis), Chemical (Oral pills altering hormonal balance), Intrauterine devices (Copper-T in uterus), Surgical (Vasectomy in males - cutting vas deferens; Tubectomy in females - cutting fallopian tubes).'
    ],
    topperHandwrittenHighlights: [
      '★ Scrotum Temperature: Lies outside the abdominal cavity because sperm maturation requires 2 to 2.5 °C lower than normal core body temperature (37°C).',
      '★ Site of Fertilization: Ampulla of the Fallopian Tube (Oviduct). Never write uterus (uterus is site of implantation!).',
      '★ Placenta Architecture: Finger-like villi on the embryo side in contact with maternal blood spaces provide vast surface area for exchange of glucose, oxygen, and metabolic wastes (urea).',
      '★ Vasectomy vs Tubectomy: Vasectomy = Vas deferens ligated (Male). Tubectomy = Fallopian Tube ligated (Female).'
    ],
    examinerTraps: [
      'Trap: Confusing Fragmentation with Regeneration. Fragmentation occurs in simple multicellular organisms with unspecialized body design (Spirogyra). Regeneration requires specialized regenerative cells capable of proliferating into different tissues (Planaria).',
      'Trap: Forgetting that barrier contraceptive methods (condoms) are the ONLY method that prevents Sexually Transmitted Infections (STIs).'
    ],
    formulasAndReactions: [
      {
        name: 'Double Fertilization in Angiosperms',
        formula: 'Syngamy (Sperm + Egg → 2n Zygote) + Triple Fusion (Sperm + 2 Polar Nuclei → 3n Endosperm)',
        where: 'Female gametophyte (embryo sac) inside plant ovary',
        mnemonicOrTip: 'Double fertilization yields both baby embryo and its nutrient lunchbox (endosperm)!'
      }
    ],
    pyqs: [
      {
        id: 'pyq-sci-7-1',
        year: 'CBSE 2024 / 2023',
        marks: 5,
        question: 'Draw a longitudinal section of a flower showing growth of pollen tube towards the ovule. Describe the post-fertilization changes.',
        modelAnswer: 'Post-fertilization changes: (1) Zygote divides repeatedly to form an embryo within the ovule. (2) The ovule develops a tough protective coat and gradually converts into a SEED. (3) The ovary grows rapidly and ripens to form a FRUIT. (4) Petals, sepals, stamens, style, and stigma shrivel and fall off.',
        topperTip: 'Remember: Ovule becomes the Seed, Ovary becomes the Fruit. This 1-mark objective fact is tested every year.'
      }
    ]
  },
  {
    id: 'sci-ch8',
    subject: 'Science',
    chapterNumber: 8,
    chapterTitle: 'Heredity and Evolution',
    tagline: 'Mendelian genetics, Monohybrid and Dihybrid crosses, and Sex determination in humans',
    estimatedBoardWeightage: '4 - 5 Marks',
    summaryPoints: [
      'Heredity: Transmission of genetically determined characteristics from parents to offspring.',
      'Mendel’s Experiments: Chose Garden Pea (Pisum sativum) due to easily observable contrasting characters, short lifespan, self-pollinating nature, and large progeny.',
      'Monohybrid Cross: Cross involving one pair of contrasting traits (Tall TT × Dwarf tt). F1 generation: 100% Tall (Tt) phenotype. F2 generation (selfing F1): Phenotypic ratio = 3 Tall : 1 Dwarf (3 : 1). Genotypic ratio = 1 TT : 2 Tt : 1 tt (1 : 2 : 1). Proves Law of Segregation.',
      'Dihybrid Cross: Cross involving two pairs of contrasting traits (Round Yellow RRYY × Wrinkled Green rryy). F1: All Round Yellow (RrYy). F2 Phenotypic ratio = 9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green (9 : 3 : 3 : 1). Proves Law of Independent Assortment.',
      'Sex Determination in Humans: Humans have 23 pairs of chromosomes (22 pairs of autosomes + 1 pair of sex chromosomes). Females have XX (homomorphic), produce only X ova. Males have XY (heteromorphic), produce 50% X-bearing and 50% Y-bearing sperms.',
      'Father Determines Sex: If X-sperm fertilizes egg → XX (Girl). If Y-sperm fertilizes egg → XY (Boy). The sex of the child is entirely determined by the father’s sperm, never the mother.'
    ],
    topperHandwrittenHighlights: [
      '★ Monohybrid Ratios: Phenotypic = 3 : 1, Genotypic = 1 : 2 : 1.',
      '★ Dihybrid Ratio: 9 : 3 : 3 : 1 (9 Round Yellow, 3 Round Green, 3 Wrinkled Yellow, 1 Wrinkled Green).',
      '★ Sex Determination Probability: Exactly 50% probability (1:1) of getting a male or female child in every pregnancy, regardless of previous children.',
      '★ Dominant vs Recessive: Dominant allele expresses in both homozygous (TT) and heterozygous (Tt) states; Recessive allele expresses ONLY in homozygous state (tt).'
    ],
    examinerTraps: [
      'Trap: Confusing phenotypic ratio (what it looks like) with genotypic ratio (actual genetic makeup TT : Tt : tt).',
      'Trap: Writing that mothers are responsible for the gender of a child. Scientifically, women produce only X ova; the sperm from the father (X or Y) decides the sex.'
    ],
    formulasAndReactions: [
      {
        name: 'Monohybrid Punnett Square',
        formula: 'F2 Cross (Tt × Tt) → 1 TT (Tall) + 2 Tt (Tall) + 1 tt (Dwarf)',
        where: 'Monohybrid inheritance testing single gene allele',
        mnemonicOrTip: 'Phenotype 3:1 | Genotype 1:2:1'
      }
    ],
    pyqs: [
      {
        id: 'pyq-sci-8-1',
        year: 'CBSE 2023 / 2022',
        marks: 3,
        question: 'A man with blood group A marries a woman with blood group O and their daughter has blood group O. Is this information enough to tell which trait is dominant? Explain with sex determination in humans.',
        modelAnswer: 'No, this information alone is not enough to conclude whether blood group A or O is dominant because: (i) If blood group A is dominant, father could be heterozygous (Iᴬi) and mother (ii); daughter inherits "i" from both parents and has O group. (ii) If O were dominant, similar combinations could occur. For sex determination: Human males produce 50% X and 50% Y sperms, while females produce only X ova. Fusion of X-sperm with X-egg produces a female (XX), while Y-sperm with X-egg produces a male (XY). Thus, the father determines the biological sex.',
        topperTip: 'Always draw the sex determination cross diagram (XY × XX) with clear gamete labels.'
      }
    ]
  },
  {
    id: 'sci-ch9',
    subject: 'Science',
    chapterNumber: 9,
    chapterTitle: 'Light - Reflection and Refraction',
    tagline: 'Mirror & lens formulas, ray diagrams, sign conventions, power of lens, Snell law',
    estimatedBoardWeightage: '7 - 10 Marks',
    summaryPoints: [
      'Laws of Reflection: Angle of incidence (i) = Angle of reflection (r). Incident ray, normal, and reflected ray all lie in the same plane.',
      'Spherical Mirrors: Concave mirror (converging) vs Convex mirror (diverging). Radius of curvature R = 2f.',
      'Mirror Formula: 1/f = 1/v + 1/u. Magnification m = -v/u = h\'/h.',
      'Laws of Refraction: Incident ray, refracted ray, and normal at point of incidence lie in same plane. Snell’s Law: sin i / sin r = constant (n₂₁ = v₁/v₂). Refractive index of medium 2 w.r.t 1.',
      'Absolute Refractive Index: n = c / v (where c = 3 × 10⁸ m/s). Diamond has highest refractive index (n = 2.42).',
      'Spherical Lenses: Convex lens (converging) vs Concave lens (diverging). Lens Formula: 1/f = 1/v - 1/u. Magnification m = +v/u = h\'/h.',
      'Power of Lens: P = 1 / f (in meters). Unit is Dioptre (D). Convex lens has +P; Concave lens has -P. Combination of lenses: P = P₁ + P₂ + P₃.'
    ],
    topperHandwrittenHighlights: [
      '★ Sign Convention Golden Rule (New Cartesian): Object distance (u) is ALWAYS NEGATIVE for both mirrors and lenses.',
      '★ Concave Mirror Special Case (Object between P and F): Produces Virtual, Erect, and Enlarged image BEHIND the mirror (used as shaving mirror and dentist mirror!).',
      '★ Convex Mirror Usage: Rear-view mirrors in vehicles because it ALWAYS forms an erect, diminished virtual image and provides a much wider field of view.',
      '★ Magnification Signs: If m is NEGATIVE → Real & Inverted. If m is POSITIVE → Virtual & Erect. If |m| > 1 → Enlarged. If |m| < 1 → Diminished.'
    ],
    examinerTraps: [
      'Trap: Mixing up Mirror Formula (1/f = 1/v + 1/u with m = -v/u) and Lens Formula (1/f = 1/v - 1/u with m = +v/u).',
      'Trap: Calculating power with focal length in cm without converting to meters: P = 100 / f (in cm).'
    ],
    formulasAndReactions: [
      {
        name: 'Mirror Formula & Magnification',
        formula: '1/f = 1/v + 1/u ; m = h\'/h = -v/u',
        where: 'Spherical concave & convex mirrors',
        mnemonicOrTip: 'Mirrors have PLUS in formula, MINUS in magnification!'
      },
      {
        name: 'Lens Formula & Magnification',
        formula: '1/f = 1/v - 1/u ; m = h\'/h = +v/u',
        where: 'Spherical concave & convex lenses',
        mnemonicOrTip: 'Lenses have MINUS in formula, PLUS in magnification!'
      },
      {
        name: 'Lens Power Formula',
        formula: 'P = 1 / f (in meters) = 100 / f (in cm) [Dioptres]',
        where: 'Prescription spectacles power calculation',
        mnemonicOrTip: 'Focal length MUST be in meters before dividing!'
      }
    ],
    pyqs: [
      {
        id: 'pyq-sci-9-1',
        year: 'CBSE 2023 / 2020',
        marks: 5,
        question: 'An object 4 cm in height is placed at 15 cm in front of a concave mirror of focal length 10 cm. At what distance should a screen be placed to obtain a sharp image? Find the nature and size of the image.',
        modelAnswer: 'Given: h = +4 cm, u = -15 cm, f = -10 cm (concave mirror). Using mirror formula: 1/f = 1/v + 1/u ⇒ 1/v = 1/f - 1/u = 1/(-10) - 1/(-15) = -1/10 + 1/15 = (-3 + 2)/30 = -1/30. Therefore, v = -30 cm. The screen should be placed 30 cm in front of the mirror. Magnification: m = -v/u = -(-30)/(-15) = -2. Image height: h\' = m × h = -2 × 4 = -8 cm. Nature: Real, inverted, and magnified (twice the object size).',
        topperTip: 'State the final conclusions clearly: Distance = 30 cm in front of mirror; Nature = Real and Inverted; Size = 8 cm tall.'
      }
    ]
  },
  {
    id: 'sci-ch10',
    subject: 'Science',
    chapterNumber: 10,
    chapterTitle: 'The Human Eye and the Colourful World',
    tagline: 'Defects of vision & correction, dispersion, atmospheric refraction, and scattering',
    estimatedBoardWeightage: '4 - 5 Marks',
    summaryPoints: [
      'Human Eye Structure: Cornea (refracts incoming light), Iris (controls size of pupil), Pupil (regulates amount of light), Crystalline lens (fine focusing), Ciliary muscles (adjust focal length - Power of Accommodation), Retina (screen with rods for light intensity & cones for color), Optic nerve.',
      'Least distance of distinct vision: 25 cm for normal human eye. Far point is infinity.',
      'Defects of Vision: (1) Myopia (Near-sightedness): Can see near objects clearly, cannot see distant objects. Image forms IN FRONT of retina. Causes: Excessive curvature of eye lens or elongation of eyeball. Correction: Concave lens of suitable focal length. (2) Hypermetropia (Far-sightedness): Can see distant clearly, cannot see near. Image forms BEHIND retina. Causes: Focal length too long or eyeball too small. Correction: Convex lens. (3) Presbyopia (Old age): Weakening of ciliary muscles; corrected by Bifocal lenses (upper concave for distance, lower convex for reading).',
      'Refraction through Glass Prism: Angle of deviation (D). White light splits into 7 colors: VIBGYOR (Dispersion). Red deviates least (longest wavelength); Violet deviates most (shortest wavelength). Recombination of spectrum using inverted identical prism (Newton’s experiment).',
      'Atmospheric Refraction: Twinkling of stars (continuous change in refractive index of turbulent air layers), Advanced sunrise (2 min earlier) and Delayed sunset (2 min later) causing total day extension of 4 minutes, Apparent flattening of sun at sunrise/sunset.',
      'Scattering of Light (Tyndall Effect): Rayleigh scattering Intensity ∝ 1/λ⁴. Blue color of sky (fine air particles scatter shorter blue wavelength more than red). Red color of danger signals (red has longest wavelength, scattered least by fog and smoke, travels maximum distance). Reddish appearance of sun at sunrise and sunset.'
    ],
    topperHandwrittenHighlights: [
      '★ Myopia Correction Trick: Near-sighted needs DIVERGING lens (Concave lens). Hypermetropia needs CONVERGING lens (Convex lens).',
      '★ Why Planets Do Not Twinkle: Planets are much closer to Earth and act as an extended source of light (collection of large number of point-sized light sources). Fluctuations from different points cancel each other out, so total amount of light entering eye is constant.',
      '★ Rainbow Formation: Three physical phenomena occur in order: (1) Refraction and Dispersion at front drop surface, (2) Total Internal Reflection at rear drop surface, (3) Refraction out of drop into observer’s eye.',
      '★ Danger Signals are Red: Red color has the longest wavelength in the visible spectrum. According to Rayleigh\'s law, it is scattered the least by smoke and fog, remaining visible from the greatest distance.'
    ],
    examinerTraps: [
      'Trap: Explaining rainbow formation without mentioning Internal Reflection inside the water droplet.',
      'Trap: Confusing the causes of Myopia (eyeball too long, lens too thick) with Hypermetropia (eyeball too short, lens too thin).'
    ],
    formulasAndReactions: [
      {
        name: 'Myopia Correction Focal Length',
        formula: 'f = -d (where d is the defective far point of the myopic eye)',
        where: 'Prescription of concave lens for near-sighted student',
        mnemonicOrTip: 'A concave lens creates virtual image of distant object at student\'s far point'
      },
      {
        name: 'Rayleigh Scattering Law',
        formula: 'Scattering Intensity ∝ 1 / λ⁴ (Wavelength to power 4)',
        where: 'Explains blue sky, red danger lights, red sunrise/sunset',
        mnemonicOrTip: 'Shorter wavelength (blue) scatters 16 times more than long wavelength (red)!'
      }
    ],
    pyqs: [
      {
        id: 'pyq-sci-10-1',
        year: 'CBSE 2023 / 2022',
        marks: 3,
        question: 'A student unable to see clearly the blackboard from the last bench. Name the defect of vision. State two causes and draw ray diagrams for the defect and its correction.',
        modelAnswer: 'The defect is Myopia (Near-sightedness). Two causes: (1) Excessive curvature of the eye lens (thick lens), (2) Elongation of the eyeball. Correction: A concave lens of suitable focal length is placed in front of the eye. The concave lens diverges the parallel rays coming from the blackboard so they appear to come from the student\'s far point, focusing the image sharply ON THE RETINA.',
        topperTip: 'Draw three clear diagrams: (1) Far point of myopic eye, (2) Myopic eye forming image in front of retina, (3) Corrected eye with concave lens.'
      }
    ]
  },
  {
    id: 'sci-ch11',
    subject: 'Science',
    chapterNumber: 11,
    chapterTitle: 'Electricity',
    tagline: 'Ohm’s Law, resistance factors, series & parallel circuits, Joule’s heating, electrical power',
    estimatedBoardWeightage: '7 - 9 Marks',
    summaryPoints: [
      'Electric Current: I = Q / t. Unit is Ampere (A). 1 Ampere = 1 Coulomb / 1 Second. Measured by Ammeter (connected in series, low resistance).',
      'Electric Potential Difference: V = W / Q. Unit is Volt (V). 1 Volt = 1 Joule / 1 Coulomb. Measured by Voltmeter (connected in parallel, high resistance).',
      'Ohm’s Law: V = I × R (at constant temperature). V-I graph is a straight line passing through origin, its slope gives resistance R.',
      'Resistance Factors: R = ρ × (l / A). Resistance is directly proportional to length (l), inversely proportional to cross-sectional area (A), and depends on material resistivity (ρ) and temperature.',
      'Resistivity (ρ): Characteristic property of material. Unit is Ohm-meter (Ω·m). Metals have very low resistivity (10⁻⁸ Ω·m). Alloys like Nichrome have high resistivity and do not oxidize at high temp, used in heating elements.',
      'Resistors in Series: Rs = R₁ + R₂ + R₃. Current I remains constant through each resistor; total voltage V = V₁ + V₂ + V₃.',
      'Resistors in Parallel: 1/Rp = 1/R₁ + 1/R₂ + 1/R₃. Voltage V is same across each branch; total current I = I₁ + I₂ + I₃. Parallel combination gives minimum equivalent resistance.',
      'Joule’s Law of Heating: H = I²Rt = VIt = (V²/R)t. Unit is Joules (J).',
      'Electric Power: P = VI = I²R = V²/R. Unit is Watt (W). Commercial unit of electric energy = 1 Kilowatt-hour (1 kWh) = 1 Unit = 3.6 × 10⁶ Joules.'
    ],
    topperHandwrittenHighlights: [
      '★ Why Domestic Circuits are in Parallel: (1) Each appliance gets full mains voltage (220 V), (2) If one appliance fuses or is turned off, others continue working independently, (3) Total circuit resistance is minimized, allowing appropriate current to each device.',
      '★ Filament of Bulb: Tungsten is used because of very high melting point (3380°C) and high resistivity; filled with inactive nitrogen/argon to prevent oxidation.',
      '★ Electric Fuse: Safety device made of lead-tin alloy with low melting point; connected in SERIES with LIVE wire. Melts when current exceeds safe limit, breaking the circuit.',
      '★ Commercial Energy Conversion: 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J.'
    ],
    examinerTraps: [
      'Trap: Stretching a wire to double its length: When length becomes 2l, area becomes A/2! Hence new resistance R\' = ρ(2l)/(A/2) = 4R (increases 4 times, not 2 times!).',
      'Trap: Using P = I²R instead of P = V²/R in parallel household calculations where voltage is constant.'
    ],
    formulasAndReactions: [
      {
        name: 'Ohm’s Law & Resistance Factor',
        formula: 'V = IR ; R = ρ (l / A)',
        where: 'Universal circuit calculations',
        mnemonicOrTip: 'V on top of the Ohm triangle: V = I × R'
      },
      {
        name: 'Joule’s Heat and Power Formulas',
        formula: 'H = I²Rt ; P = VI = I²R = V²/R',
        where: 'Heating appliances (heaters, irons, toasters)',
        mnemonicOrTip: 'Power is Volts times Amps; Heat is Power times Time!'
      }
    ],
    pyqs: [
      {
        id: 'pyq-sci-11-1',
        year: 'CBSE 2023 / 2021',
        marks: 3,
        question: 'A wire of resistance R is cut into five equal parts. These parts are then connected in parallel. If the equivalent resistance of this combination is R\', find the ratio R / R\'.',
        modelAnswer: 'When the wire of resistance R is cut into 5 equal parts, the resistance of each part becomes r = R / 5. When these 5 resistors are connected in parallel: 1/R\' = 1/r + 1/r + 1/r + 1/r + 1/r = 5 / r = 5 / (R/5) = 25 / R. Cross-multiplying: R / R\' = 25. Therefore, the ratio R / R\' is 25.',
        topperTip: 'Be careful whether the question asks for R/R\' (25) or R\'/R (1/25).'
      }
    ]
  },
  {
    id: 'sci-ch12',
    subject: 'Science',
    chapterNumber: 12,
    chapterTitle: 'Magnetic Effects of Electric Current',
    tagline: 'Magnetic field lines, Right-Hand Thumb Rule, Solenoid, Fleming’s Left-Hand Rule & Domestic safety',
    estimatedBoardWeightage: '6 - 7 Marks',
    summaryPoints: [
      'Magnetic Field Lines: Imaginary lines representing direction and strength of magnetic field. Properties: Emerge from North pole and enter South pole outside magnet (enter South and exit North inside); continuous closed loops; degree of closeness shows field strength; NEVER intersect (if they did, compass would point in two directions simultaneously, which is impossible).',
      'Right-Hand Thumb Rule (Maxwell): Grasp current-carrying straight wire with right hand such that thumb points in direction of current, then curled fingers indicate direction of magnetic field lines (concentric circles).',
      'Magnetic Field due to Solenoid: A long coil of many circular turns of insulated copper wire. Field lines inside solenoid are parallel straight lines, showing uniform magnetic field throughout. Soft iron core inserted inside creates an Electromagnet.',
      'Fleming’s Left-Hand Rule: Stretch Thumb, Forefinger, and Middle finger of left hand mutually perpendicular. Forefinger = Magnetic Field (B), Middle finger = Current (I), Thumb = Force/Motion (F). Used in Electric Motor.',
      'Domestic Electric Circuit: 220 V AC, 50 Hz in India. Three wires: Live wire (Red insulation, 220 V), Neutral wire (Black insulation, 0 V), Earth wire (Green insulation, safety ground).',
      'Safety Devices: Earth wire conducts accidental leakage current directly into ground, protecting user from severe electric shock. Short Circuit (Live and neutral touch directly, resistance drops to zero, massive current flows). Overloading (too many high-power appliances switched on simultaneously exceeding current rating).'
    ],
    topperHandwrittenHighlights: [
      '★ FBI Left-Hand Rule: Forefinger = Field, Central/Middle finger = Current (I), Thumb = Force (Motion). Think FBI (Force, B-Field, I-Current)!',
      '★ Field inside Solenoid is UNIFORM: Field lines are parallel straight lines, behaving exactly like a strong bar magnet.',
      '★ Why Two Field Lines Never Cross: At intersection point, a compass needle would have to point in two different directions at once, which is physically impossible.',
      '★ Earthing Principle: Connected to a metal plate buried deep in the ground; provides low-resistance path for leakage current so appliance potential remains safe.'
    ],
    examinerTraps: [
      'Trap: Forgetting that magnetic field lines are closed loops that continue INSIDE the magnet from South to North.',
      'Trap: Confusing Fleming’s Left-Hand Rule (used for motor/force on conductor) with Right-Hand Thumb Rule (used for direction of circular field around wire).'
    ],
    formulasAndReactions: [
      {
        name: 'Force on a Current-Carrying Conductor',
        formula: 'F = B × I × L × sin(θ) [Maximum when θ = 90° (perpendicular)]',
        where: 'Interaction between external magnetic field and electric current',
        mnemonicOrTip: 'Force is maximum when wire is perpendicular to magnetic field lines!'
      }
    ],
    pyqs: [
      {
        id: 'pyq-sci-12-1',
        year: 'CBSE 2024 / 2023',
        marks: 3,
        question: 'State Fleming’s Left-Hand Rule. Name one device that works on this principle and mention why two magnetic field lines never intersect.',
        modelAnswer: '(1) Fleming’s Left-Hand Rule: Stretch the thumb, forefinger, and middle finger of your left hand mutually perpendicular to each other. If the forefinger points in the direction of the magnetic field and the middle finger in the direction of electric current, then the thumb points in the direction of motion or mechanical force acting on the conductor. (2) Working device: Electric Motor. (3) Why field lines never intersect: If they intersected, at the point of intersection a compass needle would have to point in two different directions simultaneously, which is impossible.',
        topperTip: 'Always mention "mutually perpendicular to each other" in the rule statement.'
      }
    ]
  },
  {
    id: 'sci-ch13',
    subject: 'Science',
    chapterNumber: 13,
    chapterTitle: 'Our Environment',
    tagline: 'Ecosystems, trophic levels, 10% energy law, biological magnification, and ozone layer depletion',
    estimatedBoardWeightage: '3 - 5 Marks',
    summaryPoints: [
      'Ecosystem: Structural and functional unit of biosphere consisting of biotic components (producers, consumers, decomposers) and abiotic components (temperature, rainfall, soil, minerals).',
      'Food Chain & Web: Series of organisms feeding on one another. Interconnected network of food chains forms a Food Web.',
      '10% Law of Energy Transfer (Lindeman): Only 10% of the energy entering a trophic level is available for transfer to the next trophic level. 90% is lost as heat, respiration, and life processes. Because of this steep energy loss, food chains rarely exceed 4-5 trophic levels.',
      'Biological Magnification: Progressive accumulation of non-biodegradable harmful chemicals (pesticides like DDT) at each successive trophic level in a food chain. Maximum concentration is always found in top predators (humans).',
      'Ozone Layer (O₃) Depletion: Stratospheric ozone shields Earth from harmful UV rays (prevents skin cancer, cataract, damaged immune system). Formed by: O₂ --UV--> O + O, then O + O₂ → O₃. Depletion caused by Chlorofluorocarbons (CFCs) used in refrigerators and fire extinguishers. Montreal Protocol (1987) froze CFC production.',
      'Waste Management: Biodegradable (broken down by decomposer bacteria/fungi e.g. fruit peels, paper) vs Non-biodegradable (cannot be broken down e.g. plastics, glass, metals). Methods: Composting, Landfills, Incineration, 5 R’s (Refuse, Reduce, Reuse, Repurpose, Recycle).'
    ],
    topperHandwrittenHighlights: [
      '★ Sun to Producer Energy Capture: Terrestrial green plants capture only about 1% of the solar energy falling on their leaves and convert it into chemical food energy!',
      '★ 10% Rule Calculation: If Grass has 10,000 J of energy → Deer gets 1,000 J → Tiger gets 100 J!',
      '★ Top Trophic Level has Maximum Chemical: Because DDT is non-biodegradable and fat-soluble, it cannot be excreted and magnifies up the chain (Biomagnification).',
      '★ UV Ray Types: UV-B causes skin cancer, cataract, and destroys marine phytoplankton.'
    ],
    examinerTraps: [
      'Trap: Confusing 1% sunlight capture by plants with the 10% energy transfer rule between trophic levels.',
      'Trap: Stating that decomposers participate in the 10% linear chain. Decomposers operate at ALL trophic levels, recycling nutrients.'
    ],
    formulasAndReactions: [
      {
        name: 'Ozone Formation in Stratosphere',
        formula: 'O₂ --UV Radiation--> O + O ; O + O₂ → O₃ (Ozone)',
        where: 'Upper atmosphere ozone layer barrier',
        mnemonicOrTip: 'High-energy UV splits oxygen molecule into free atoms, which bond to form ozone'
      },
      {
        name: '10 Percent Energy Flow Pyramid',
        formula: 'Energy at Level n+1 = 0.10 × Energy at Level n',
        where: 'Trophic level calculation',
        mnemonicOrTip: 'Every jump upwards loses a zero (90% lost to heat)'
      }
    ],
    pyqs: [
      {
        id: 'pyq-sci-13-1',
        year: 'CBSE 2024 / 2023',
        marks: 3,
        question: 'What is biological magnification? If 20,000 J of solar energy falls on green plants in a terrestrial food chain, how much energy will be available to the hawk in: Plants → Grasshopper → Frog → Snake → Hawk?',
        modelAnswer: '(1) Biological Magnification: The phenomenon of progressive increase in the concentration of non-biodegradable toxic chemicals (e.g. DDT) at each successive trophic level of a food chain. (2) Energy calculation: Plants capture 1% of solar energy: 1% of 20,000 J = 200 J (Plants). Applying 10% Law: Grasshopper receives: 10% of 200 J = 20 J. Frog receives: 10% of 20 J = 2 J. Snake receives: 10% of 2 J = 0.2 J. Hawk receives: 10% of 0.2 J = 0.02 J.',
        topperTip: 'Remember to apply 1% for solar energy to green plants first, and then 10% for subsequent animal levels.'
      }
    ]
  }
];
