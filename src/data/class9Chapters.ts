import { ChapterNote } from '../types';

export const CLASS_9_CHAPTERS: ChapterNote[] = [
  {
    id: 'c9-sci-ch1',
    classLevel: 9,
    subject: 'Science',
    chapterNumber: 1,
    chapterTitle: 'Matter in Our Surroundings',
    tagline: 'Particle nature of matter, states, latent heat & factors affecting evaporation',
    estimatedBoardWeightage: '4 - 6 Marks (Annual Exams)',
    isPremium: true,
    summaryPoints: [
      'Matter is anything that occupies space and has mass. It is composed of tiny particles that have spaces between them, continuously move, and attract each other.',
      'Three Physical States: Solid (fixed shape, fixed volume, negligible compressibility), Liquid (no fixed shape, fixed volume, fluidity), Gas (no fixed shape/volume, high compressibility).',
      'Diffusion: Spontaneous intermixing of particles of two different substances. Rate of diffusion increases with temperature due to increased kinetic energy.',
      'Change of State: Solid ↔ Liquid (Melting/Fusion), Liquid ↔ Gas (Boiling/Vaporization), Solid ↔ Gas directly (Sublimation and Deposition).',
      'Latent Heat: Hidden heat energy absorbed without temperature change. Latent Heat of Fusion (solid to liquid at melting point) and Latent Heat of Vaporization (liquid to gas at boiling point).',
      'Steam at 100°C causes more severe burns than boiling water at 100°C because steam particles have extra latent heat of vaporization (22.6 × 10⁵ J/kg).',
      'Evaporation: Surface phenomenon occurring at temperatures below boiling point. Causes cooling because remaining particles lose energy.',
      'Factors increasing evaporation: Increase in surface area, increase in temperature, decrease in humidity, increase in wind speed.'
    ],
    topperHandwrittenHighlights: [
      '★ Steam vs Boiling Water: Steam has higher energy than water at 100°C due to Latent Heat of Vaporization (examiner favorite 2-marker!).',
      '★ Sublimation Examples to Remember: Ammonium Chloride (NH₄Cl), Camphor, Naphthalene balls, Anthracene, and Dry Ice (solid CO₂).',
      '★ Evaporation vs Boiling: Evaporation is a SURFACE PHENOMENON at any temp below B.P.; Boiling is a BULK PHENOMENON at a fixed B.P.',
      '★ Cotton clothes in summer: Cotton is a good water absorber; absorbs sweat exposing it to atmosphere for rapid evaporative cooling.'
    ],
    examinerTraps: [
      'Trap: Writing that evaporation occurs only at 100°C. Evaporation takes place at ALL temperatures below the boiling point.',
      'Trap: Forgetting the unit when converting Celsius to Kelvin: K = °C + 273.15 (0°C = 273.15 K). Never put a degree sign on Kelvin (write K, not °K).'
    ],
    formulasAndReactions: [
      {
        name: 'Temperature Scale Conversion',
        formula: 'T(K) = T(°C) + 273.15',
        where: 'Used for thermal calculations; SI unit of temperature is Kelvin (K)',
        mnemonicOrTip: 'Add 273 to go from Celsius to Kelvin; Subtract 273 to go back!'
      },
      {
        name: 'Sublimation of Ammonium Chloride',
        formula: 'NH₄Cl(s) ⇌ NH₄Cl(g) (on heating)',
        where: 'Separation of sublimable volatile component from non-sublimable impurity (salt)',
        mnemonicOrTip: 'Direct transition Solid to Gas without liquid state = Sublimation'
      }
    ],
    pyqs: [
      {
        id: 'pyq-c9-sci-1-1',
        year: 'Class 9 Annual Exam 2024 / 2023',
        marks: 3,
        question: 'Why does a desert cooler cool better on a hot dry day? Explain the scientific principle involved.',
        modelAnswer: 'On a hot dry day: (1) Temperature is high and humidity (water vapor in air) is very low. (2) Both high temperature and low humidity accelerate the rate of evaporation of water from the desert cooler pads. (3) During evaporation, water absorbs latent heat of vaporization from the incoming hot air and surrounding chamber. (4) As heat is absorbed, the air becomes cool and moist, resulting in effective and pleasant cooling.',
        topperTip: 'Mention both factors: (i) High temperature and (ii) Low humidity, and use the keyword "Latent Heat of Vaporization".'
      },
      {
        id: 'pyq-c9-sci-1-2',
        year: 'Class 9 Annual Exam 2023',
        marks: 2,
        question: 'Why does water kept in an earthen pot (matka) become cool during summer?',
        modelAnswer: 'An earthen pot (matka) has numerous microscopic pores on its surface. Water constantly oozes out through these tiny pores and evaporates from the outer surface. The heat required for evaporation (latent heat of vaporization) is drawn from the pot and the water remaining inside. Consequently, the internal temperature decreases and the water becomes cool.',
        topperTip: 'Always identify the source of heat: Heat is absorbed from the remaining water inside the pot.'
      }
    ],
    mindMapNodes: [
      { title: 'States of Matter', children: ['Solid: Rigid, fixed volume', 'Liquid: Fluid, fixed volume', 'Gas: Highly compressible, no fixed shape'] },
      { title: 'Phase Changes & Latent Heat', children: ['Fusion (Melting)', 'Vaporization (Boiling)', 'Sublimation (Solid ↔ Gas)', 'Latent heat causes no temp rise'] },
      { title: 'Evaporation Factors', children: ['Surface Area (Direct)', 'Temperature (Direct)', 'Humidity (Inverse)', 'Wind Speed (Direct)'] }
    ]
  },
  {
    id: 'c9-sci-ch2',
    classLevel: 9,
    subject: 'Science',
    chapterNumber: 2,
    chapterTitle: 'Is Matter Around Us Pure',
    tagline: 'Pure substances, mixtures, true solutions, colloids, suspensions & Tyndall effect',
    estimatedBoardWeightage: '4 - 5 Marks',
    isPremium: true,
    summaryPoints: [
      'Pure Substance: Consists of only one type of constituent particles (Elements or Compounds). Elements cannot be broken down chemically (Metals, Non-metals, Metalloids).',
      'Mixtures: Contain more than one substance physically mixed in any ratio. Homogeneous (uniform composition, e.g., sugar solution) and Heterogeneous (non-uniform, e.g., sand + salt).',
      'True Solution: Homogeneous mixture of solute and solvent. Particle size < 1 nm (10⁻⁹ m). Particles do not settle down and cannot be seen by naked eye. Does NOT scatter light.',
      'Suspension: Heterogeneous mixture where solute particles remain suspended throughout the bulk. Particle size > 100 nm. Unstable (particles settle on standing), scatters light.',
      'Colloid (Colloidal Solution): Heterogeneous mixture with particle size intermediate between 1 nm and 100 nm. Stable, particles do not settle, scatters light showing Tyndall Effect (e.g., milk, fog, blood).',
      'Tyndall Effect: Scattering of a beam of light by colloidal particles when light passes through a colloid or through dense forest canopy.',
      'Physical Change: No new substance formed, reversible (e.g., melting of ice, cutting of trees). Chemical Change: New substances with different chemical properties formed (e.g., burning of wood, rusting of iron).'
    ],
    topperHandwrittenHighlights: [
      '★ Tyndall Effect Condition: Particle size of colloidal particles must be comparable to the wavelength of incident light.',
      '★ Dispersed Phase vs Dispersion Medium: In Milk: Dispersed Phase is Liquid Fat, Dispersion Medium is Water (Emulsion). In Fog: Liquid water in Gas air (Aerosol).',
      '★ Burning of Candle is BOTH a physical (wax melts) and chemical (wax vapors burn with oxygen) change!',
      '★ Concentration Formula: Mass % = (Mass of solute / Mass of solution) × 100.'
    ],
    examinerTraps: [
      'Trap: Calculating mass % using mass of solvent instead of mass of SOLUTION. Remember: Mass of solution = Mass of solute + Mass of solvent!',
      'Trap: Calling a colloid homogeneous. Colloids APPEAR homogeneous to the naked eye but are scientifically HETEROGENEOUS.'
    ],
    formulasAndReactions: [
      {
        name: 'Mass Percentage of Solution',
        formula: 'Mass % = [Mass of Solute / (Mass of Solute + Mass of Solvent)] × 100',
        where: 'Calculating concentration of aqueous solutions',
        mnemonicOrTip: 'Denominator must ALWAYS be total solution (solute + solvent)!'
      },
      {
        name: 'Volume Percentage of Solution',
        formula: 'Volume % = [Volume of Solute / Total Volume of Solution] × 100',
        where: 'Liquid in liquid solutions like alcohol in water',
        mnemonicOrTip: 'Total volume is the denominator.'
      }
    ],
    pyqs: [
      {
        id: 'pyq-c9-sci-2-1',
        year: 'Class 9 Annual Exam 2024',
        marks: 3,
        question: 'Differentiate between True Solution, Colloidal Solution, and Suspension based on: (a) Particle Size, (b) Stability, and (c) Tyndall Effect.',
        modelAnswer: '(a) Particle Size: True Solution < 1 nm; Colloidal Solution between 1 nm and 100 nm; Suspension > 100 nm.\n(b) Stability: True Solution is completely stable (particles do not settle); Colloid is stable (does not settle on standing); Suspension is unstable (particles settle down under gravity).\n(c) Tyndall Effect: True solution does NOT scatter light (no Tyndall effect); Colloid scatters light (shows distinct Tyndall effect); Suspension scatters light while particles remain suspended.',
        topperTip: 'Present comparisons in a neat 3-column table with criteria clearly stated on the left.'
      }
    ],
    mindMapNodes: [
      { title: 'Classification of Matter', children: ['Pure Substances (Elements & Compounds)', 'Mixtures (Homogeneous & Heterogeneous)'] },
      { title: 'Types of Mixtures', children: ['True Solution (< 1 nm, no scatter)', 'Colloid (1-100 nm, Tyndall effect)', 'Suspension (> 100 nm, unstable)'] }
    ]
  },
  {
    id: 'c9-sci-ch3',
    classLevel: 9,
    subject: 'Science',
    chapterNumber: 3,
    chapterTitle: 'Atoms and Molecules',
    tagline: 'Laws of chemical combination, Dalton’s theory, mole concept & chemical formula writing',
    estimatedBoardWeightage: '6 - 7 Marks',
    isPremium: true,
    summaryPoints: [
      'Law of Conservation of Mass: Mass can neither be created nor destroyed in a chemical reaction (Lavoisier). Total mass of reactants = Total mass of products.',
      'Law of Constant Proportions (Definite Proportions): In a chemical substance, the elements are always present in definite proportions by mass (Proust). E.g., in water (H₂O), ratio of mass of H to O is always 1 : 8.',
      'Dalton’s Atomic Theory: All matter is made of indivisible atoms; atoms of a given element are identical in mass and properties; atoms combine in small whole-number ratios to form compounds.',
      'Atomic Mass Unit (u): One atomic mass unit is defined as exactly 1/12th the mass of one carbon-12 atom (¹²C = 12 u).',
      'Molecule: Smallest particle of an element or compound capable of independent existence. Atomicity: Number of atoms constituting a molecule (Monoatomic: He, Ar; Diatomic: O₂, N₂, HCl; Polyatomic: P₄, S₈).',
      'Writing Chemical Formulas: Write symbols, place valencies below, and criss-cross the valencies. Example: Al³⁺ and O²⁻ gives Al₂O₃; Ca²⁺ and OH⁻ gives Ca(OH)₂.',
      'Molecular Mass & Mole Concept: 1 Mole = 6.022 × 10²³ entities (Avogadro Constant Nₐ). Molar mass = Mass of 1 mole of particles in grams.'
    ],
    topperHandwrittenHighlights: [
      '★ Water Mass Ratio: H₂O has 2 H (2 u) and 1 O (16 u) ⇒ Ratio = 2 : 16 = 1 : 8 by mass always.',
      '★ Ammonia Mass Ratio: NH₃ has 1 N (14 u) and 3 H (3 u) ⇒ Ratio = 14 : 3 by mass.',
      '★ Formula of Polyatomic Ions: Always enclose polyatomic ion in brackets when subscript is > 1. Write Ca(OH)₂, NEVER CaOH₂!',
      '★ Mole Formulas: Number of moles (n) = Given Mass (m) / Molar Mass (M) = Given number of particles (N) / Avogadro Number (Nₐ).'
    ],
    examinerTraps: [
      'Trap: Writing bracket missing for polyatomic compounds: NH₄⁺ with SO₄²⁻ is (NH₄)₂SO₄, not NH₄₂SO₄.',
      'Trap: Confusing atomic mass with molar mass. Atomic mass has unit "u", whereas Molar mass has unit "g/mol".'
    ],
    formulasAndReactions: [
      {
        name: 'Mole Relationship Formula',
        formula: 'n = m / M = N / Nₐ',
        where: 'm = given mass (g), M = molar mass (g/mol), N = particle count, Nₐ = 6.022 × 10²³',
        mnemonicOrTip: 'n = Mass/Molar = Count/Avogadro'
      },
      {
        name: 'Criss-Cross Formula Writing',
        formula: 'Aˣ + Bʸ → AᵧBₓ',
        where: 'Balancing charges/valencies for neutral chemical compound',
        mnemonicOrTip: 'Swap the valencies, drop the signs, and simplify ratios!'
      }
    ],
    pyqs: [
      {
        id: 'pyq-c9-sci-3-1',
        year: 'Class 9 Annual Exam 2024 / 2023',
        marks: 3,
        question: 'Calculate the number of moles and molecules present in 4.4 g of Carbon Dioxide (CO₂). [Given: Atomic mass of C = 12 u, O = 16 u, Nₐ = 6.022 × 10²³]',
        modelAnswer: 'Step 1: Calculate Molar mass of CO₂:\nM = 12 + (2 × 16) = 12 + 32 = 44 g/mol.\n\nStep 2: Calculate Number of Moles (n):\nn = Given Mass (m) / Molar Mass (M) = 4.4 g / 44 g/mol = 0.1 mole.\n\nStep 3: Calculate Number of Molecules (N):\nN = n × Nₐ = 0.1 × 6.022 × 10²³ = 6.022 × 10²² molecules.',
        topperTip: 'Always write down the formula first, substitute values with units, and double-underline the final numerical answer.'
      }
    ],
    mindMapNodes: [
      { title: 'Chemical Combination Laws', children: ['Conservation of Mass', 'Definite Proportions (Proust)'] },
      { title: 'Atomic Theory & Formulas', children: ['Dalton Atomic Theory', 'Carbon-12 standard', 'Valency criss-cross'] },
      { title: 'Mole Concept', children: ['1 Mole = 6.022 × 10²³ particles', 'n = m / M', 'Gram molecular mass'] }
    ]
  },
  {
    id: 'c9-sci-ch4',
    classLevel: 9,
    subject: 'Science',
    chapterNumber: 4,
    chapterTitle: 'The Fundamental Unit of Life (Cell)',
    tagline: 'Cell structure, plasma membrane, osmosis, cell organelles & division',
    estimatedBoardWeightage: '6 - 8 Marks',
    isPremium: true,
    summaryPoints: [
      'Cell is the basic structural and functional unit of all living organisms. Discovered by Robert Hooke in 1665 in cork cells. Nucleus discovered by Robert Brown (1831).',
      'Cell Theory: Proposed by Schleiden and Schwann (1838-1839); expanded by Rudolf Virchow (1855): "Omnis cellula-e cellula" (all cells arise from pre-existing cells).',
      'Plasma Membrane: Selectively permeable membrane made of lipids and proteins (Fluid Mosaic model). Allows entry and exit of selected substances via Diffusion and Osmosis.',
      'Osmosis: Movement of water molecules from a region of higher water concentration to lower water concentration through a selectively permeable membrane.',
      'Tonicity: Hypotonic solution (cell gains water and swells/bursts), Hypertonic solution (cell loses water and shrinks/plasmolysed), Isotonic solution (no net movement).',
      'Cell Wall: Rigid outer covering found only in plant cells, fungi, and bacteria, composed of cellulose; prevents bursting in hypotonic medium.',
      'Key Organelles: Mitochondria ("Powerhouse of cell", generates ATP, has own DNA and ribosomes), Plastids (Chloroplasts for photosynthesis, own DNA), Lysosomes ("Suicide bags", contain digestive enzymes), Endoplasmic Reticulum (RER with ribosomes for proteins, SER for lipids/detoxification), Golgi apparatus (packaging and secretion).'
    ],
    topperHandwrittenHighlights: [
      '★ Semi-Autonomous Organelles: Mitochondria and Plastids are the ONLY organelles with their own circular DNA and 70S ribosomes!',
      '★ Why Lysosomes are "Suicide Bags": When cell gets damaged, lysosomes burst and their hydrolytic digestive enzymes digest their own cell.',
      '★ Plasmolysis: Shrinkage of cytoplasm away from cell wall when a live plant cell loses water in a hypertonic solution.',
      '★ Prokaryotic vs Eukaryotic: Prokaryotes lack membrane-bound nucleus (nucleoid) and organelles; Eukaryotes have well-defined nucleus and organelles.'
    ],
    examinerTraps: [
      'Trap: Saying animal cells plasmolysed. Animal cells lack a cell wall, so in hypertonic medium they shrink (crenate), but PLASMOLYSIS strictly applies to walled plant cells.',
      'Trap: Confusing RER and SER functions. RER has ribosomes and synthesizes proteins; SER synthesizes lipids/steroids and detoxifies poisons in liver cells.'
    ],
    formulasAndReactions: [
      {
        name: 'Osmotic Movement Direction',
        formula: 'Water Flow = High Water Potential (Dilute) → Low Water Potential (Concentrated)',
        where: 'Determining endosmosis (swelling) vs exosmosis (shrinkage)',
        mnemonicOrTip: 'Hypotonic = Swell like a Hippo; Hypertonic = Shrink away!'
      }
    ],
    pyqs: [
      {
        id: 'pyq-c9-sci-4-1',
        year: 'Class 9 Annual Exam 2024 / 2023',
        marks: 3,
        question: 'Why are Mitochondria known as the powerhouse of the cell? Mention two unique structural features that make them semi-autonomous.',
        modelAnswer: '(1) Mitochondria are called the powerhouse of the cell because they produce energy in the form of ATP (Adenosine Triphosphate) molecules through cellular respiration, which powers all metabolic activities.\n(2) Two unique structural features:\n  (i) They possess their own genetic material (DNA).\n  (ii) They have their own ribosomes, enabling them to synthesize some of their own proteins independently.',
        topperTip: 'Full form of ATP (Adenosine Triphosphate) must be written at least once in the answer.'
      }
    ],
    mindMapNodes: [
      { title: 'Cell Architecture', children: ['Plasma Membrane (Selectively permeable)', 'Cell Wall (Plant cellulose)', 'Nucleus (Control center, DNA)'] },
      { title: 'Cytoplasmic Organelles', children: ['Mitochondria (ATP, own DNA)', 'Plastids (Chloroplasts, own DNA)', 'Lysosomes (Suicide bags, enzymes)', 'ER & Golgi (Synthesis & packaging)'] }
    ]
  },
  {
    id: 'c9-sci-ch5',
    classLevel: 9,
    subject: 'Science',
    chapterNumber: 5,
    chapterTitle: 'Motion',
    tagline: 'Distance, displacement, velocity, acceleration & graphical derivation of equations of motion',
    estimatedBoardWeightage: '6 - 8 Marks',
    isPremium: true,
    summaryPoints: [
      'Distance vs Displacement: Distance is the actual path length traveled (scalar, always positive or zero). Displacement is the shortest straight-line distance between initial and final positions (vector, can be positive, negative, or zero).',
      'Uniform vs Non-Uniform Motion: Uniform motion covers equal distances in equal intervals of time (straight-line distance-time graph). Non-uniform motion covers unequal distances in equal intervals of time.',
      'Speed and Velocity: Speed = Distance / Time (scalar, m/s). Velocity = Displacement / Time (vector, m/s). Average Velocity = (u + v) / 2 for uniform acceleration.',
      'Acceleration: Rate of change of velocity: a = (v - u) / t (Unit: m/s²). Negative acceleration is called Retardation or Deceleration.',
      'Three Equations of Motion (for uniformly accelerated motion):',
      '1. v = u + at (Velocity-Time Relation)',
      '2. s = ut + ½ at² (Position-Time Relation)',
      '3. v² = u² + 2as (Position-Velocity Relation)',
      'Uniform Circular Motion: When an object moves in a circular path with constant speed, its direction changes continuously, so it is an accelerated motion. Speed v = 2πr / t.'
    ],
    topperHandwrittenHighlights: [
      '★ Slope of Graphs: Slope of Distance-Time graph gives SPEED. Slope of Velocity-Time graph gives ACCELERATION.',
      '★ Area under Graphs: Area under Velocity-Time graph gives DISPLACEMENT / DISTANCE!',
      '★ Initial & Final Velocity Clues: "Starts from rest" means u = 0. "Comes to stop / brakes applied" means v = 0.',
      '★ Free Fall sign convention: Moving upward: a = -g (-9.8 m/s²); Dropped freely: u = 0 and a = +g (+9.8 m/s²).'
    ],
    examinerTraps: [
      'Trap: Forgetting to convert speed from km/h to m/s. Multiply by 5/18! (e.g., 72 km/h = 72 × 5/18 = 20 m/s).',
      'Trap: Graphical derivation missing labels: Always mark axis variables (v, t), origin (O), and shaded trapezoid area clearly.'
    ],
    formulasAndReactions: [
      {
        name: 'Kinematic Equations of Motion',
        formula: 'v = u + at  |  s = ut + ½at²  |  v² = u² + 2as',
        where: 'Valid strictly when acceleration a is CONSTANT',
        mnemonicOrTip: 'u = initial velocity, v = final velocity, a = acceleration, t = time, s = distance'
      },
      {
        name: 'Circular Motion Speed',
        formula: 'v = (2πr) / t',
        where: 'Constant speed along circular track of radius r',
        mnemonicOrTip: 'Distance is circumference (2πr).'
      }
    ],
    pyqs: [
      {
        id: 'pyq-c9-sci-5-1',
        year: 'Class 9 Annual Exam 2024 / 2022',
        marks: 5,
        question: 'Derive graphically the equation of motion s = ut + ½ at², where symbols have their usual meanings.',
        modelAnswer: 'Proof:\n1. Consider an object moving with initial velocity u at t = 0 under uniform acceleration a, reaching final velocity v at time t.\n2. In the velocity-time graph, the distance s traveled is equal to the area under the v-t graph (Trapezium OABC).\n3. Area of Trapezium OABC = Area of Rectangle OADC + Area of Triangle ABD.\n   • Area of Rectangle OADC = OA × OC = u × t = ut.\n   • Area of Triangle ABD = ½ × Base × Height = ½ × AD × BD = ½ × t × (v - u).\n4. From first equation of motion, (v - u) = at. Substitute this:\n   • Area of Triangle ABD = ½ × t × (at) = ½ at².\n5. Total Distance s = ut + ½ at². (Hence Derived).',
        topperTip: 'Always draw the velocity-time diagram alongside the derivation with labels O, A, B, C, D to get full 5/5 marks.'
      }
    ],
    mindMapNodes: [
      { title: 'Motion Quantities', children: ['Distance vs Displacement', 'Speed vs Velocity', 'Acceleration (m/s²)'] },
      { title: 'Equations of Motion', children: ['v = u + at', 's = ut + ½ at²', 'v² = u² + 2as'] },
      { title: 'Graphical Analysis', children: ['Slope of v-t = Acceleration', 'Area under v-t = Distance'] }
    ]
  },
  {
    id: 'c9-sci-ch6',
    classLevel: 9,
    subject: 'Science',
    chapterNumber: 6,
    chapterTitle: 'Force and Laws of Motion',
    tagline: 'Newton’s three laws of motion, inertia, momentum & conservation of momentum',
    estimatedBoardWeightage: '6 - 7 Marks',
    isPremium: true,
    summaryPoints: [
      'Force: An external push or pull that can change the state of rest, motion, speed, or direction of an object. Balanced forces (net force = 0, no acceleration); Unbalanced forces (net force ≠ 0, causes acceleration).',
      'Newton’s First Law of Motion (Law of Inertia): An object continues in its state of rest or of uniform motion along a straight line unless acted upon by an unbalanced external force.',
      'Inertia: Natural tendency of an object to resist changes in its state of motion. Directly proportional to MASS (heavier object has greater inertia).',
      'Momentum (p): Product of mass and velocity: p = m · v (Vector quantity, SI unit: kg·m/s).',
      'Newton’s Second Law of Motion: The rate of change of momentum of an object is directly proportional to the applied unbalanced force and takes place in the direction of the force. Formula: F = ma (Unit: Newton, N = kg·m/s²).',
      'Newton’s Third Law of Motion: To every action, there is an equal and opposite reaction. Action and reaction act on two DIFFERENT bodies simultaneously.',
      'Law of Conservation of Momentum: In an isolated system (no external unbalanced force), total momentum before collision equals total momentum after collision: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂.'
    ],
    topperHandwrittenHighlights: [
      '★ Why Catching a Fast Ball Hurts Less when Hands are Pulled Back: Pulling hands back increases time taken (Δt) to reduce momentum to zero. Since F = Δp / Δt, increasing time decreases the impact force!',
      '★ Recoil of Gun: Bullet moves forward with high momentum; gun kicks backward with equal and opposite momentum: v_recoil = -(m_bullet · v_bullet) / M_gun.',
      '★ Action and Reaction NEVER cancel each other because they act on TWO DIFFERENT BODIES (e.g., foot pushes ground backward; ground pushes foot forward).',
      '★ Definition of 1 Newton: Force that produces an acceleration of 1 m/s² in an object of mass 1 kg.'
    ],
    examinerTraps: [
      'Trap: Stating that action and reaction cancel out. They cannot cancel because they act on different objects.',
      'Trap: Recoil velocity sign: Always remember recoil velocity is in the OPPOSITE direction to the bullet velocity.'
    ],
    formulasAndReactions: [
      {
        name: 'Newton’s Second Law Formula',
        formula: 'F = m · a = m · [(v - u) / t]',
        where: 'F in Newtons (N), m in kg, a in m/s²',
        mnemonicOrTip: 'Force = Mass × Acceleration'
      },
      {
        name: 'Conservation of Linear Momentum',
        formula: 'm₁u₁ + m₂u₂ = m₁v₁ + m₂v₂',
        where: 'Valid when external net force F_ext = 0',
        mnemonicOrTip: 'Total momentum before collision = Total momentum after collision'
      }
    ],
    pyqs: [
      {
        id: 'pyq-c9-sci-6-1',
        year: 'Class 9 Annual Exam 2024 / 2023',
        marks: 3,
        question: 'A bullet of mass 20 g is horizontally fired with a velocity 150 m/s from a pistol of mass 2 kg. What is the recoil velocity of the pistol?',
        modelAnswer: 'Given:\nMass of bullet m₁ = 20 g = 20/1000 kg = 0.02 kg.\nVelocity of bullet v₁ = 150 m/s.\nMass of pistol m₂ = 2 kg.\nInitial velocities: u₁ = 0, u₂ = 0 (pistol and bullet are at rest initially).\n\nBy Conservation of Linear Momentum:\nTotal Momentum Before Firing = Total Momentum After Firing\n0 = m₁v₁ + m₂v₂\n0 = (0.02 kg × 150 m/s) + (2 kg × v₂)\n0 = 3 + 2 v₂\n2 v₂ = -3 ⇒ v₂ = -1.5 m/s.\n\nThe recoil velocity of the pistol is 1.5 m/s in the direction opposite to the bullet.',
        topperTip: 'Always convert grams to kilograms first, and explain the negative sign indicates backward recoil.'
      }
    ],
    mindMapNodes: [
      { title: 'Newton’s Laws', children: ['1st Law: Inertia (Mass dependent)', '2nd Law: F = ma (Rate of change of momentum)', '3rd Law: Action = -Reaction (Different bodies)'] },
      { title: 'Momentum & Conservation', children: ['p = mv (kg·m/s)', 'm₁u₁ + m₂u₂ = m₁v₁ + m₂v₂', 'Recoil velocity calculations'] }
    ]
  },
  {
    id: 'c9-math-ch1',
    classLevel: 9,
    subject: 'Mathematics',
    chapterNumber: 1,
    chapterTitle: 'Number Systems',
    tagline: 'Irrational numbers, real numbers on number line, rationalization & laws of exponents',
    estimatedBoardWeightage: '6 - 8 Marks',
    isPremium: true,
    summaryPoints: [
      'Natural Numbers (N), Whole Numbers (W), Integers (Z), Rational Numbers (Q: p/q where q ≠ 0, p,q ∈ Z). Decimal expansion of rational numbers is either terminating or non-terminating recurring.',
      'Irrational Numbers: Numbers that cannot be written in p/q form. Decimal expansion is non-terminating and non-recurring (e.g., √2, √3, √5, π = 3.14159...).',
      'Real Numbers (R): Collection of all rational and irrational numbers. Every real number corresponds to a unique point on the number line.',
      'Rationalizing the Denominator: Removing radicals from the denominator by multiplying numerator and denominator by the conjugate rationalizing factor (e.g., conjugate of a + √b is a - √b).',
      'Laws of Exponents for Real Numbers (a > 0):',
      '1. aᵐ · aⁿ = aᵐ⁺ⁿ',
      '2. (aᵐ)ⁿ = aᵐⁿ',
      '3. aᵐ / aⁿ = aᵐ⁻ⁿ',
      '4. aᵐ · bᵐ = (ab)ᵐ',
      '5. a⁰ = 1  |  a⁻ⁿ = 1/aⁿ  |  a^(p/q) = ᑫ√(aᵖ)'
    ],
    topperHandwrittenHighlights: [
      '★ Conjugate Multiplication: If denominator has (√a + √b), multiply both numerator and denominator by (√a - √b) using identity (x + y)(x - y) = x² - y².',
      '★ Prove √2 is Irrational: Standard contradiction method is frequent 3-mark annual exam favorite!',
      '★ Exponent Shortcut: (64)^(1/2) = (8²)^(1/2) = 8; (32)^(2/5) = (2⁵)^(2/5) = 2² = 4.'
    ],
    examinerTraps: [
      'Trap: Forgetting to square both terms when applying (a + √b)(a - √b) = a² - b.',
      'Trap: Confusing 0.333... with 0.3. Express 0.3̄ as x = 0.333... ⇒ 10x = 3.333... ⇒ 9x = 3 ⇒ x = 1/3.'
    ],
    formulasAndReactions: [
      {
        name: 'Rationalization of (√a + √b)',
        formula: '1 / (√a + √b) = (√a - √b) / [(√a)² - (√b)²] = (√a - √b) / (a - b)',
        where: 'Simplifying radical algebraic fractions',
        mnemonicOrTip: 'Multiply by opposite sign in numerator and denominator!'
      },
      {
        name: 'Fractional Exponent Rule',
        formula: 'a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ',
        where: 'Evaluating powers with rational exponents',
        mnemonicOrTip: 'Root goes on bottom (index), Power goes on top!'
      }
    ],
    pyqs: [
      {
        id: 'pyq-c9-math-1-1',
        year: 'Class 9 Annual Exam 2024 / 2023',
        marks: 3,
        question: 'Rationalize the denominator of: 1 / (7 + 3√2).',
        modelAnswer: 'Given Expression: 1 / (7 + 3√2).\nMultiplying numerator and denominator by conjugate (7 - 3√2):\n= [1 × (7 - 3√2)] / [(7 + 3√2)(7 - 3√2)]\nUsing identity (a + b)(a - b) = a² - b²:\nDenominator = 7² - (3√2)² = 49 - (9 × 2) = 49 - 18 = 31.\nNumerator = 7 - 3√2.\n\nFinal Answer = (7 - 3√2) / 31.',
        topperTip: 'Carefully compute (3√2)² = 3² × 2 = 9 × 2 = 18. Do not forget to square the 3.'
      }
    ],
    mindMapNodes: [
      { title: 'Number Classifications', children: ['Rational (Terminating / Recurring)', 'Irrational (Non-terminating Non-recurring)', 'Real Number Line'] },
      { title: 'Operations & Exponents', children: ['Conjugate Rationalization', 'Laws of Exponents (aᵐ · aⁿ = aᵐ⁺ⁿ)', 'p/q representation of repeating decimals'] }
    ]
  },
  {
    id: 'c9-math-ch2',
    classLevel: 9,
    subject: 'Mathematics',
    chapterNumber: 2,
    chapterTitle: 'Polynomials',
    tagline: 'Degrees, zeroes, Remainder Theorem, Factor Theorem & algebraic identities',
    estimatedBoardWeightage: '8 - 10 Marks',
    isPremium: true,
    summaryPoints: [
      'Polynomial in one variable x: p(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀, where powers of x are non-negative integers (whole numbers). Degree is highest power of variable.',
      'Types: Linear (degree 1), Quadratic (degree 2), Cubic (degree 3). Monomial (1 term), Binomial (2 terms), Trinomial (3 terms).',
      'Zero of a Polynomial: A real number c is a zero of p(x) if p(c) = 0. A non-zero constant polynomial has no zero. Zero polynomial has every real number as its zero.',
      'Factor Theorem: If p(x) is a polynomial of degree n ≥ 1 and a is any real number, then (x - a) is a factor of p(x) if p(a) = 0.',
      'Core Algebraic Identities:',
      '1. (x + y + z)² = x² + y² + z² + 2xy + 2yz + 2zx',
      '2. (x + y)³ = x³ + y³ + 3xy(x + y) = x³ + 3x²y + 3xy² + y³',
      '3. (x - y)³ = x³ - y³ - 3xy(x - y) = x³ - 3x²y + 3xy² - y³',
      '4. x³ + y³ + z³ - 3xyz = (x + y + z)(x² + y² + z² - xy - yz - zx)',
      '5. Special Conditional Identity: If x + y + z = 0, then x³ + y³ + z³ = 3xyz.'
    ],
    topperHandwrittenHighlights: [
      '★ Conditional Identity Magic: If a + b + c = 0, directly write a³ + b³ + c³ = 3abc! (e.g. Evaluate (-12)³ + 7³ + 5³ without cubes: (-12) + 7 + 5 = 0, so Answer = 3(-12)(7)(5) = -1260).',
      '★ Factorizing Cubic Polynomials: Step 1: Find one root c by trial (factors of constant term) so p(c) = 0 ⇒ (x - c) is a factor. Step 2: Divide p(x) by (x - c) to get a quadratic quotient. Step 3: Split middle term of quadratic!',
      '★ Degree Verification: An expression like √x or 1/x is NOT a polynomial because exponent must be a whole number (0, 1, 2...).'
    ],
    examinerTraps: [
      'Trap: Middle term signs in (x - y)³: (x - y)³ = x³ - 3x²y + 3xy² - y³. Note the positive sign before 3xy²!',
      'Trap: Leaving factor theorem questions incomplete without stating: "Since p(a) = 0, by Factor Theorem (x - a) is a factor".'
    ],
    formulasAndReactions: [
      {
        name: 'Trinomial Square Identity',
        formula: '(x + y + z)² = x² + y² + z² + 2xy + 2yz + 2zx',
        where: 'Expansion and factorisation of 3-variable squares',
        mnemonicOrTip: 'Sum of squares + 2 × (cyclic pairs)'
      },
      {
        name: 'Conditional Cube Identity',
        formula: 'If x + y + z = 0, then x³ + y³ + z³ = 3xyz',
        where: 'High frequency 2-mark question in Class 9 exams',
        mnemonicOrTip: 'Check if sum is 0, then 3 × a × b × c is the answer!'
      }
    ],
    pyqs: [
      {
        id: 'pyq-c9-math-2-1',
        year: 'Class 9 Annual Exam 2024 / 2023',
        marks: 4,
        question: 'Factorize: x³ - 23x² + 142x - 120.',
        modelAnswer: 'Let p(x) = x³ - 23x² + 142x - 120.\nStep 1: Test factors of constant term (-120): ±1, ±2, ±3, ±5...\nFor x = 1:\np(1) = 1³ - 23(1)² + 142(1) - 120 = 1 - 23 + 142 - 120 = 143 - 143 = 0.\nBy Factor Theorem, (x - 1) is a factor of p(x).\n\nStep 2: Divide p(x) by (x - 1) by synthetic/long division:\nx³ - 23x² + 142x - 120 = (x - 1)(x² - 22x + 120).\n\nStep 3: Factorize the quadratic quotient x² - 22x + 120 by splitting the middle term:\nProduct = 120, Sum = -22 ⇒ Factors are -12 and -10.\nx² - 12x - 10x + 120 = x(x - 12) - 10(x - 12) = (x - 12)(x - 10).\n\nFinal Factorization: (x - 1)(x - 10)(x - 12).',
        topperTip: 'Always verify the product of constant terms: (-1) × (-10) × (-12) = -120 to check your work.'
      }
    ],
    mindMapNodes: [
      { title: 'Polynomial Concepts', children: ['Whole number exponents', 'Linear, Quadratic, Cubic', 'Zeroes of polynomial'] },
      { title: 'Theorems & Factorization', children: ['Factor Theorem: p(a)=0 ⇒ (x-a) factor', 'Splitting middle term', 'Cubic factorization steps'] },
      { title: 'Algebraic Identities', children: ['(x+y+z)²', '(x±y)³', 'x³+y³+z³ - 3xyz', 'If x+y+z=0 ⇒ x³+y³+z³=3xyz'] }
    ]
  },
  {
    id: 'c9-sst-ch1',
    classLevel: 9,
    subject: 'Social Science',
    chapterNumber: 1,
    chapterTitle: 'The French Revolution',
    tagline: 'Three Estates, Bastille storming, Reign of Terror & Declaration of Rights of Man',
    estimatedBoardWeightage: '5 - 6 Marks',
    isPremium: true,
    summaryPoints: [
      'French Society in late 18th Century: Divided into Three Estates. 1st Estate (Clergy) and 2nd Estate (Nobility) enjoyed feudal privileges and tax exemptions. 3rd Estate (peasants, artisans, lawyers, merchants - 97% population) paid all taxes (Tithe to church, Taille to state).',
      'Subsistence Crisis: Rapid population growth (23 million to 28 million), drought/hail, soaring bread prices, and wages not keeping pace led to frequent subsistence crises.',
      'Outbreak of Revolution (1789): Louis XVI called Estates General on 5 May 1789. 3rd Estate demanded one-member-one-vote; on rejection, formed National Assembly at Tennis Court (20 June 1789).',
      'Storming of the Bastille: On 14 July 1789, agitated Parisian crowd stormed and demolished the fortress prison Bastille, symbol of despotic monarchical power.',
      'Constitutional Monarchy (1791): Feudal system abolished (4 August 1789). Declaration of the Rights of Man and of the Citizen proclaimed liberty, equality, and fraternity.',
      'Reign of Terror (1793 - 1794): Maximilien Robespierre (Jacobin leader) ruled with severe control and punishment using the guillotine. Robespierre convicted and guillotined in July 1794.',
      'Abolition of Slavery: Jacobin regime abolished slavery in French colonies (1794), reintroduced by Napoleon Bonaparte in 1804, finally abolished in 1848.'
    ],
    topperHandwrittenHighlights: [
      '★ French Taxes to Remember: Tithe (Tax levied by Church = 1/10th of agricultural produce) and Taille (Direct tax paid directly to State).',
      '★ Key Dates: 14 July 1789 (Storming of Bastille - French National Day), 20 June 1789 (Tennis Court Oath), 1793-1794 (Reign of Terror under Robespierre).',
      '★ Philosophers & Books: Montesquieu (The Spirit of the Laws - separation of powers), Rousseau (The Social Contract - democracy), John Locke (Two Treatises of Government - against divine rights).',
      '★ Jacobin Dress Symbol: Sans-culottes ("without knee breeches"), red Phrygian cap symbol of liberty.'
    ],
    examinerTraps: [
      'Trap: Confusing Tithe with Taille. Tithe was paid to the Church; Taille was paid to the State.',
      'Trap: Writing that Napoleon abolished slavery. Napoleon REINTRODUCED slavery; it was finally abolished in 1848.'
    ],
    formulasAndReactions: [
      {
        name: 'Separation of Powers Model (Montesquieu)',
        formula: 'Government = Legislature + Executive + Judiciary',
        where: 'Spirit of the Laws principle implemented in 1791 Constitution',
        mnemonicOrTip: 'No single ruler holds absolute power'
      }
    ],
    pyqs: [
      {
        id: 'pyq-c9-sst-1-1',
        year: 'Class 9 Annual Exam 2024 / 2023',
        marks: 5,
        question: 'Describe the main causes that led to the outbreak of the French Revolution in 1789.',
        modelAnswer: 'The outbreak of the French Revolution was caused by a combination of factors:\n1. Social Inequality: Society was divided into Three Estates. The first two estates (Clergy and Nobility) enjoyed tax exemptions and feudal privileges, while the Third Estate bore the entire tax burden.\n2. Economic Crisis & Empty Treasury: Prolonged wars, aid to American colonies, and extravagant court maintenance at Versailles emptied France’s treasury, burdening the king with debt.\n3. Subsistence Crisis: Population rose rapidly, demand for food grains exceeded production, bread prices skyrocketed, and famines worsened the plight of poor peasants and wage laborers.\n4. Rise of Middle Class & Philosophers: Educated merchants, lawyers, and teachers were inspired by philosophers like Locke, Rousseau (Social Contract), and Montesquieu (Separation of Powers), advocating an end to birth-based privileges.\n5. Immediate Cause: Louis XVI called the Estates General to raise taxes without granting equal voting rights (one member, one vote) to the Third Estate.',
        topperTip: 'Structure into 5 distinct sub-headings: Social, Economic, Subsistence Crisis, Intellectual/Philosophical, and Immediate Cause.'
      }
    ],
    mindMapNodes: [
      { title: 'Three Estates of France', children: ['1st: Clergy (Privileged, Tithes)', '2nd: Nobility (Feudal dues, Taille exempt)', '3rd: Peasants, Workers, Middle Class (All taxes)'] },
      { title: 'Revolutionary Milestones', children: ['Tennis Court Oath (20 June 1789)', 'Storming of Bastille (14 July 1789)', 'Declaration of Rights of Man (1791)', 'Reign of Terror (1793-1794)'] }
    ]
  }
];
