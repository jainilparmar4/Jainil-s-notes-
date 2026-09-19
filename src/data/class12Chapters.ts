import { ChapterNote } from '../types';

export const CLASS_12_CHAPTERS: ChapterNote[] = [
  {
    id: 'c12-phy-ch1',
    classLevel: 12,
    subject: 'Physics',
    chapterNumber: 1,
    chapterTitle: 'Electric Charges and Fields & Gauss’s Law',
    tagline: 'Coulomb’s Law, Electric Dipole, Flux & Gauss’s Law applications in Board Exams',
    estimatedBoardWeightage: '6 - 8 Marks (CBSE Board Exam)',
    isPremium: true,
    summaryPoints: [
      'Properties of Electric Charge: Additivity (Q = q₁ + q₂ + ...), Conservation (total charge of isolated system remains constant), Quantization of charge: q = ± n e (where e = 1.6 × 10⁻¹⁹ C).',
      'Coulomb’s Law: Electrostatic force between two point charges in vacuum: F = [1 / (4πε₀)] · [|q₁ q₂| / r²] = (9 × 10⁹ N·m²/C²) · [|q₁ q₂| / r²]. In medium of dielectric constant K: F_med = F_vac / K.',
      'Electric Field (E⃗): Force experienced per unit positive test charge: E⃗ = F⃗ / q₀. Field of point charge E = [1 / (4πε₀)] (q / r²). Directed radially outward for +q, inward for -q.',
      'Electric Dipole: Pair of equal and opposite charges separated by distance 2a. Dipole Moment: p⃗ = q · (2a⃗), directed from negative to positive charge.',
      'Field of Dipole:',
      '• Axial Line (at distance r >> a): E_axial = [1 / (4πε₀)] · (2p / r³), in direction of p⃗.',
      '• Equatorial Line (at distance r >> a): E_equatorial = [1 / (4πε₀)] · (p / r³), antiparallel to p⃗.',
      '• Note: E_axial = 2 × E_equatorial at same distance!',
      'Torque on Dipole in Uniform Field: τ⃗ = p⃗ × E⃗ ⇒ τ = p E sin θ. Maximum torque at θ = 90°. Potential energy: U = -p⃗ · E⃗ = -p E cos θ.',
      'Electric Flux (Φ): Total number of electric field lines crossing a given area: Φ = ∫ E⃗ · dA⃗ = E A cos θ (Unit: N·m²/C or V·m).',
      'Gauss’s Law: Total electric flux through any closed surface S is equal to 1/ε₀ times the net enclosed charge: ∮ E⃗ · dA⃗ = q_enclosed / ε₀.',
      'Core Gauss’s Law Applications:',
      '1. Infinite straight line of uniform linear charge density λ: E = λ / (2πε₀ r).',
      '2. Infinite thin plane sheet of uniform surface charge density σ: E = σ / (2ε₀) (independent of distance r!).',
      '3. Uniformly charged thin spherical shell (radius R): E = [1/(4πε₀)](q/r²) for r ≥ R; E = 0 inside shell (r < R).'
    ],
    topperHandwrittenHighlights: [
      '★ Axial vs Equatorial Ratio: E_axial = 2 · E_equatorial at large distances (r >> a) (CBSE repeated MCQ!).',
      '★ Dipole in Uniform E-Field: Net translational force is ZERO (F_net = 0); experience ONLY torque τ = p E sin θ. In non-uniform field, it experiences BOTH net force and torque!',
      '★ Stable vs Unstable Equilibrium: Stable when θ = 0° (p⃗ parallel to E⃗, U_min = -pE); Unstable when θ = 180° (p⃗ antiparallel to E⃗, U_max = +pE).',
      '★ Field inside a charged conducting shell is strictly ZERO (Electrostatic Shielding principle).'
    ],
    examinerTraps: [
      'Trap: Direction of dipole moment: Dipole moment vector p⃗ points from NEGATIVE to POSITIVE charge. Never write positive to negative!',
      'Trap: Writing E = σ/ε₀ for thin sheet. For an infinitely thin sheet, E = σ / (2ε₀). It is σ/ε₀ ONLY for a thick conducting sheet with charge on two faces.'
    ],
    formulasAndReactions: [
      {
        name: 'Electric Field of Dipole (Axial & Equatorial)',
        formula: 'E_axial = 2kp / r³  |  E_equatorial = kp / r³  (where k = 1/4πε₀)',
        where: 'Short dipole approximation (r >> a)',
        mnemonicOrTip: 'Axial is DOUBLE equatorial; falls off as 1/r³!'
      },
      {
        name: 'Gauss’s Law Field Equations',
        formula: 'Line: E = λ/(2πε₀r)  |  Sheet: E = σ/(2ε₀)  |  Shell: E_in = 0',
        where: 'High probability 5-mark derivation in CBSE Section D',
        mnemonicOrTip: 'Line: 1/r; Sheet: constant; Shell inside: zero'
      }
    ],
    pyqs: [
      {
        id: 'pyq-c12-phy-1-1',
        year: 'CBSE Board 2024 / 2023 / 2020',
        marks: 5,
        question: 'State Gauss’s Law in electrostatics. Using this law, derive an expression for the electric field due to an infinitely long straight wire of uniform linear charge density λ.',
        modelAnswer: '1. Statement of Gauss’s Law:\nGauss’s Law states that the total electric flux through any closed Gaussian surface in vacuum is equal to 1/ε₀ times the total electric charge enclosed by that surface:\n∮ E⃗ · dA⃗ = q_enclosed / ε₀.\n\n2. Derivation for Infinitely Long Straight Wire:\n• Let an infinitely long straight wire have uniform linear charge density λ (C/m).\n• Choose a cylindrical Gaussian surface of radius r and length l coaxial with the wire.\n• The closed cylinder consists of three surfaces: two flat circular end caps (S₁, S₂) and one curved cylindrical surface (S₃).\n\nStep 1: Calculate flux through each surface:\n• At flat ends S₁ and S₂, the electric field E⃗ is radial and perpendicular to the area vector dA⃗ (θ = 90°):\n  Φ₁ = ∫ E⃗ · dA⃗ = ∫ E dA cos 90° = 0.\n  Φ₂ = ∫ E⃗ · dA⃗ = ∫ E dA cos 90° = 0.\n• At curved surface S₃, E⃗ is radial and parallel to normal area vector dA⃗ (θ = 0°):\n  Φ₃ = ∫ E dA cos 0° = E ∫ dA = E × (2π r l).\n\nStep 2: Total flux:\nΦ_total = Φ₁ + Φ₂ + Φ₃ = E (2π r l).\n\nStep 3: Enclosed charge and Gauss’s Law:\nq_enclosed = λ · l.\nBy Gauss’s Law: E (2π r l) = (λ l) / ε₀.\n⇒ E = λ / (2πε₀ r).\n\nIn vector form: E⃗ = [λ / (2πε₀ r)] n̂, where n̂ is radial unit vector.',
        topperTip: 'Draw the coaxial Gaussian cylinder clearly showing the three surface elements dA⃗₁, dA⃗₂, dA⃗₃ and electric field direction E⃗.'
      }
    ],
    mindMapNodes: [
      { title: 'Coulomb’s Force & Dipole', children: ['F = kq₁q₂/r²', 'Dipole p = 2qa (- to +)', 'E_axial = 2kp/r³', 'Torque τ = p × E', 'Potential Energy U = -p·E'] },
      { title: 'Gauss’s Law & Applications', children: ['∮ E·dA = q_enc/ε₀', 'Infinite Wire: E = λ/(2πε₀r)', 'Infinite Sheet: E = σ/(2ε₀)', 'Spherical Shell: E_in = 0'] }
    ]
  },
  {
    id: 'c12-phy-ch2',
    classLevel: 12,
    subject: 'Physics',
    chapterNumber: 2,
    chapterTitle: 'Current Electricity & Kirchhoff’s Laws',
    tagline: 'Drift velocity, temperature coefficient, Kirchhoff’s circuit laws & Wheatstone bridge',
    estimatedBoardWeightage: '7 - 8 Marks (CBSE Board Exam)',
    isPremium: true,
    summaryPoints: [
      'Electric Current: Rate of flow of electric charge: I = q / t = n e A v_d, where n is free electron density, A is cross-sectional area, and v_d is drift velocity.',
      'Drift Velocity (v_d): Average velocity acquired by conduction electrons opposite to applied electric field: v_d = - (e E τ) / m = - (e V τ) / (m l), where τ is relaxation time.',
      'Ohm’s Law & Resistivity: V = I R, where Resistance R = ρ l / A = (m / n e² τ) · (l / A). Resistivity ρ = m / (n e² τ) (independent of dimensions, depends only on material and temperature).',
      'Conductivity (σ): Reciprocal of resistivity: σ = 1 / ρ = n e² τ / m. Vector form of Ohm’s Law: j⃗ = σ E⃗, where j = I / A is current density.',
      'Temperature Dependence of Resistance: R_T = R_0 (1 + α ΔT). For metals, α > 0 (resistance increases with temp because collision frequency increases, τ decreases). For semiconductors/electrolytes, α < 0 (resistance decreases with temp because carrier concentration n increases exponentially).',
      'Electromotive Force (EMF) & Terminal Voltage: V = E - I r (discharging); V = E + I r (charging). Internal resistance r = [(E / V) - 1] R.',
      'Kirchhoff’s First Law (Current Law / Junction Rule): Sum of currents entering a junction equals sum of currents leaving: Σ I = 0 (Consequence of Conservation of Electric Charge).',
      'Kirchhoff’s Second Law (Voltage Law / Loop Rule): In any closed loop, algebraic sum of changes in potential is zero: Σ ΔV = 0 or Σ E = Σ I R (Consequence of Conservation of Energy).',
      'Wheatstone Bridge: Network of four resistors P, Q, R, S. Under balanced condition (zero galvanometer deflection I_g = 0): P / Q = R / S.'
    ],
    topperHandwrittenHighlights: [
      '★ Conservation Principles: Kirchhoff’s Junction Rule is based on Conservation of CHARGE; Kirchhoff’s Loop Rule is based on Conservation of ENERGY (guaranteed 1-mark CBSE question).',
      '★ Wheatstone Bridge Sensitivity: Bridge is most sensitive when all four resistances P, Q, R, S are nearly of equal magnitude.',
      '★ Microscopic Ohm’s Law: j⃗ = σ E⃗ derivation is frequently asked for 3 marks.',
      '★ Cell Combination: n identical cells in series: I = nE / (R + nr); in parallel: I = E / (R + r/n).'
    ],
    examinerTraps: [
      'Trap: Sign convention in Kirchhoff loop traversal: Moving in direction of current gives -IR; moving opposite gives +IR. Moving from negative to positive terminal of cell gives +E; positive to negative gives -E.',
      'Trap: Confusing resistivity with resistance: Resistivity does NOT change when wire is stretched; only resistance changes (R ∝ l² when volume is conserved)!'
    ],
    formulasAndReactions: [
      {
        name: 'Drift Velocity & Current Relation',
        formula: 'I = n e A v_d  |  v_d = (e E τ) / m = (e V τ) / (m l)',
        where: 'n = electron density, e = 1.6×10⁻¹⁹ C, τ = relaxation time',
        mnemonicOrTip: 'I = n·e·A·v_d'
      },
      {
        name: 'Wheatstone Bridge Condition',
        formula: 'P / Q = R / S  (when Galvanometer current I_g = 0)',
        where: 'Accurate measurement of unknown resistance',
        mnemonicOrTip: 'Cross ratio equality P/Q = R/S'
      }
    ],
    pyqs: [
      {
        id: 'pyq-c12-phy-2-1',
        year: 'CBSE Board 2024 / 2022',
        marks: 3,
        question: 'Define drift velocity. Write the relation between electric current and drift velocity, and hence deduce Ohm’s law.',
        modelAnswer: '1. Definition: Drift velocity (v_d) is defined as the average steady velocity with which free electrons in a conductor drift towards the positive terminal under the influence of an external electric field.\n\n2. Relation between Current and Drift Velocity:\nConsider a conductor of length l and cross-sectional area A with free electron number density n.\nTotal charge enclosed in conductor: Q = (n · A · l) · e.\nTime taken by electrons to drift through length l: t = l / v_d.\nElectric current I = Q / t = (n A l e) / (l / v_d) = n e A v_d  --- (1).\n\n3. Deduction of Ohm’s Law:\nMagnitude of drift velocity: v_d = (e E τ) / m = (e V τ) / (m l)  --- (2)\nSubstitute (2) into (1):\nI = n e A [ (e V τ) / (m l) ] = [ (n e² A τ) / (m l) ] V.\nRearranging for V:\nV = [ m l / (n e² A τ) ] · I.\n\nAt a constant temperature, physical parameters m, l, n, e, A, and τ remain constant for a given conductor.\nTherefore, [ m l / (n e² A τ) ] = constant = Resistance R.\n⇒ V = I R, which is Ohm’s Law. (Hence Deduced).',
        topperTip: 'Explicitly state that relaxation time τ and dimensions are constant at constant temperature to validate Ohm’s law.'
      }
    ],
    mindMapNodes: [
      { title: 'Drift & Conduction', children: ['v_d = eEτ/m', 'I = n e A v_d', 'ρ = m / (n e² τ)', 'Vector form: j = σ E'] },
      { title: 'Circuits & Kirchhoff', children: ['Junction Rule (Charge conservation)', 'Loop Rule (Energy conservation)', 'Wheatstone Bridge: P/Q = R/S'] }
    ]
  },
  {
    id: 'c12-chem-ch1',
    classLevel: 12,
    subject: 'Chemistry',
    chapterNumber: 1,
    chapterTitle: 'Solutions & Colligative Properties',
    tagline: 'Raoult’s Law, ideal/non-ideal solutions, elevation in BP, depression in FP & van ’t Hoff factor',
    estimatedBoardWeightage: '7 Marks (CBSE Board Exam)',
    isPremium: true,
    summaryPoints: [
      'Types of Solutions: Homogeneous mixtures of two or more components. Liquid solutions: Gas in liquid (Henry’s Law), Liquid in liquid (Raoult’s Law), Solid in liquid.',
      'Henry’s Law: Partial pressure of gas in vapor phase is proportional to mole fraction of gas in solution: p = K_H · x. Higher K_H means lower solubility at same pressure. K_H increases with temperature (aquatic life prefers cold water).',
      'Raoult’s Law (Volatile liquids): For a solution of volatile liquids, partial vapor pressure of each component is proportional to its mole fraction: p_A = p°_A · x_A, and p_total = p_A + p_B.',
      'Ideal vs Non-Ideal Solutions:',
      '• Ideal: Obey Raoult’s law at all concentrations. ΔH_mix = 0, ΔV_mix = 0. A-B interactions equal A-A and B-B (e.g., Benzene + Toluene, n-hexane + n-heptane).',
      '• Non-Ideal Positive Deviation: p_A > p°_A x_A, ΔH_mix > 0, ΔV_mix > 0. A-B interactions weaker (e.g., Ethanol + Acetone). Form Minimum Boiling Azeotrope.',
      '• Non-Ideal Negative Deviation: p_A < p°_A x_A, ΔH_mix < 0, ΔV_mix < 0. A-B interactions stronger (e.g., Chloroform + Acetone with H-bonding). Form Maximum Boiling Azeotrope.',
      'Colligative Properties (depend only on NUMBER of solute particles, not on chemical nature):',
      '1. Relative Lowering of Vapor Pressure: (p°_A - p_A) / p°_A = x_B = n_B / (n_A + n_B).',
      '2. Elevation of Boiling Point: ΔT_b = T_b - T°_b = K_b · m = [K_b × w_B × 1000] / [M_B × W_A(g)]. (K_b is Molal Elevation Constant / Ebullioscopic Constant).',
      '3. Depression of Freezing Point: ΔT_f = T°_f - T_f = K_f · m = [K_f × w_B × 1000] / [M_B × W_A(g)]. (K_f is Cryoscopic Constant).',
      '4. Osmotic Pressure: π = C R T = (n_B / V) R T = [w_B R T] / [M_B V]. (Best method for polymers & biomolecules due to measurement at room temp & molarity).',
      'van ’t Hoff Factor (i): Ratio of normal molar mass to abnormal molar mass: i = Observed colligative property / Calculated colligative property. Dissociation: i = 1 + (n - 1)α (i > 1). Association: i = 1 + (1/n - 1)α (i < 1).'
    ],
    topperHandwrittenHighlights: [
      '★ Why Osmotic Pressure is best for Molar Mass of Proteins: Measured at room temperature (prevents denaturation) and uses Molarity instead of Molality, giving measurable changes for large macromolecules!',
      '★ Chloroform + Acetone Negative Deviation: Hydrogen bonding forms between oxygen of acetone and hydrogen of chloroform, making A-B attraction stronger than pure components!',
      '★ van ’t Hoff Factor Values for Complete Dissociation (α = 1): NaCl → i = 2; CaCl₂ → i = 3; Al₂(SO₄)₃ → i = 5. For Acetic acid in benzene (dimerization): i = 0.5.',
      '★ Minimum vs Maximum Azeotrope: Positive deviation gives Minimum boiling azeotrope; Negative deviation gives Maximum boiling azeotrope.'
    ],
    examinerTraps: [
      'Trap: Forgetting the van ’t Hoff factor i for ionic electrolytes: ΔT_b = i K_b m. Writing without i for NaCl or CaCl₂ results in 0 marks in numericals!',
      'Trap: Freezing point elevation vs depression: Freezing point DEPRESSION means T_f is LOWER than pure solvent (ΔT_f = T°_f - T_f, NOT T_f - T°_f).'
    ],
    formulasAndReactions: [
      {
        name: 'Colligative Property Equations with van ’t Hoff Factor',
        formula: 'ΔT_b = i K_b m  |  ΔT_f = i K_f m  |  π = i C R T',
        where: 'i = 1 for non-electrolytes (glucose, urea); i > 1 for ionic salts',
        mnemonicOrTip: 'Always multiply by i for electrolytes!'
      },
      {
        name: 'Degree of Dissociation / Association',
        formula: 'Dissociation: α = (i - 1)/(n - 1)  |  Association: α = (1 - i)/(1 - 1/n)',
        where: 'n = number of particles from one formula unit',
        mnemonicOrTip: 'i = 1 + (n-1)α'
      }
    ],
    pyqs: [
      {
        id: 'pyq-c12-chem-1-1',
        year: 'CBSE Board 2024 / 2023',
        marks: 3,
        question: 'A 5% solution (by mass) of cane sugar (M = 342 g/mol) in water has a freezing point of 271 K. Calculate the freezing point of a 5% solution (by mass) of glucose (M = 180 g/mol) in water. (Freezing point of pure water = 273.15 K).',
        modelAnswer: 'Step 1: Calculate K_f using Cane Sugar data:\nMass of sugar w_B = 5 g; Mass of water W_A = 100 - 5 = 95 g = 0.095 kg.\nMoles of sugar n_B = 5 / 342 = 0.0146 mol.\nMolality m₁ = 0.0146 / 0.095 = 0.1537 mol/kg.\nDepression in freezing point ΔT_f₁ = 273.15 - 271 = 2.15 K.\nSince ΔT_f₁ = K_f × m₁:\nK_f = ΔT_f₁ / m₁ = 2.15 / 0.1537 = 13.99 K·kg/mol.\n\nStep 2: Calculate ΔT_f for 5% Glucose solution:\nMass of glucose w_B = 5 g; Molar mass = 180 g/mol; Solvent W_A = 95 g.\nMoles of glucose n_B = 5 / 180 = 0.0278 mol.\nMolality m₂ = 0.0278 / 0.095 = 0.2926 mol/kg.\nΔT_f₂ = K_f × m₂ = 13.99 × 0.2926 = 4.09 K.\n\nStep 3: Freezing point of glucose solution:\nT_f = T°_f - ΔT_f₂ = 273.15 - 4.09 = 269.06 K.',
        topperTip: 'Show all 3 steps clearly: (1) Find K_f from sugar, (2) Find ΔT_f of glucose, (3) Subtract from 273.15 K to find final freezing temperature.'
      }
    ],
    mindMapNodes: [
      { title: 'Vapor Pressure & Laws', children: ['Henry’s Law p = K_H · x', 'Raoult’s Law p_i = p°_i x_i', 'Ideal vs Non-Ideal (Azeotropes)'] },
      { title: 'Colligative Properties', children: ['Relative Lowering of VP', 'Elevation in BP (ΔT_b = i K_b m)', 'Depression in FP (ΔT_f = i K_f m)', 'Osmotic Pressure (π = i CRT)'] },
      { title: 'van ’t Hoff Factor', children: ['Dissociation: i = 1 + (n-1)α', 'Association: i < 1', 'Abnormal molecular masses'] }
    ]
  },
  {
    id: 'c12-chem-ch2',
    classLevel: 12,
    subject: 'Chemistry',
    chapterNumber: 2,
    chapterTitle: 'Chemical Kinetics',
    tagline: 'Rate laws, order vs molecularity, integrated rate equations, half-life & Arrhenius equation',
    estimatedBoardWeightage: '7 Marks (CBSE Board Exam)',
    isPremium: true,
    summaryPoints: [
      'Rate of Reaction: Change in concentration of reactant or product per unit time: Rate = -Δ[R]/Δt = +Δ[P]/Δt. Expressed in mol L⁻¹ s⁻¹.',
      'Rate Law & Rate Constant (k): Mathematical expression relating reaction rate to molar concentrations of reactants: Rate = k [A]ˣ [B]ʸ. Order of reaction = x + y (can be zero, integer, fraction).',
      'Order vs Molecularity:',
      '• Order: Experimental quantity, sum of powers of concentration terms in rate law, can be zero or fractional.',
      '• Molecularity: Theoretical quantity, number of reacting species colliding simultaneously in an elementary step, must be positive whole number (1, 2, or 3), never zero or fractional.',
      'Zero Order Reaction: Rate = k [A]⁰ = k.',
      '• Integrated Rate Law: [R] = [R]₀ - k t.',
      '• Half-Life: t₁/₂ = [R]₀ / (2k). (Directly proportional to initial concentration!). Units of k: mol L⁻¹ s⁻¹.',
      'First Order Reaction: Rate = k [A]¹.',
      '• Integrated Rate Law: k = (2.303 / t) · log([R]₀ / [R]).',
      '• Half-Life: t₁/₂ = 0.693 / k. (Independent of initial concentration!). Units of k: s⁻¹.',
      'Temperature Dependence (Arrhenius Equation): k = A · e^(-E_a / RT), where A is frequency factor, E_a is activation energy.',
      '• Two Temperature Form: log(k₂ / k₁) = [E_a / (2.303 R)] · [(T₂ - T₁) / (T₁ T₂)].',
      'Catalyst: Provides an alternative reaction pathway with lower activation energy (E_a), speeding up forward and reverse reactions equally without altering equilibrium constant K or ΔG.'
    ],
    topperHandwrittenHighlights: [
      '★ Half-Life Clues: If doubling [R]₀ doubles t₁/₂, it is ZERO ORDER. If changing [R]₀ has NO effect on t₁/₂, it is FIRST ORDER (guaranteed MCQ!).',
      '★ Proof: For first order reaction, time required for 99.9% completion is 10 times the half-life: t_99.9% = 10 × t₁/₂ (frequently asked 3-marker).',
      '★ Units of Rate Constant: k = (mol L⁻¹)^(1 - n) s⁻¹, where n is overall order. For order 0: mol L⁻¹ s⁻¹; order 1: s⁻¹; order 2: L mol⁻¹ s⁻¹.',
      '★ Catalyst Impact: Lowers E_a; does NOT shift equilibrium position, does NOT change ΔH or ΔG.'
    ],
    examinerTraps: [
      'Trap: Writing molecularity of complex reactions. Molecularity is defined ONLY for elementary reactions; for complex multi-step reactions, molecularity has NO meaning.',
      'Trap: Unit of activation energy: When R = 8.314 J K⁻¹ mol⁻¹, E_a comes out in JOULES per mole. Remember to divide by 1000 to express in kJ/mol!'
    ],
    formulasAndReactions: [
      {
        name: 'First Order Integrated Rate Equation',
        formula: 'k = (2.303 / t) · log([A]₀ / [A])  |  t₁/₂ = 0.693 / k',
        where: 'Nuclear decay and 1st order chemical decompositions',
        mnemonicOrTip: 'Half-life is independent of initial concentration!'
      },
      {
        name: 'Arrhenius Temperature Formula',
        formula: 'log(k₂ / k₁) = [E_a / (2.303 R)] · [(T₂ - T₁) / (T₁ T₂)]',
        where: 'Calculating activation energy from rate constants at two temperatures',
        mnemonicOrTip: 'R = 8.314 J/mol·K'
      }
    ],
    pyqs: [
      {
        id: 'pyq-c12-chem-2-1',
        year: 'CBSE Board 2024 / 2023 / 2022',
        marks: 3,
        question: 'Show that for a first-order reaction, the time required for 99% completion of a reaction is twice the time required for the completion of 90% of the reaction.',
        modelAnswer: 'For a first-order reaction, integrated rate equation is:\nt = (2.303 / k) · log([R]₀ / [R]).\n\nCase 1: For 99% completion:\nLet initial concentration [R]₀ = 100.\nConcentration remaining [R] = 100 - 99 = 1.\nt_99% = (2.303 / k) · log(100 / 1) = (2.303 / k) · log(10²) = (2.303 / k) × 2 = 2 × (2.303 / k)  --- (1).\n\nCase 2: For 90% completion:\nConcentration remaining [R] = 100 - 90 = 10.\nt_90% = (2.303 / k) · log(100 / 10) = (2.303 / k) · log(10) = (2.303 / k) × 1 = 1 × (2.303 / k)  --- (2).\n\nDividing (1) by (2):\nt_99% / t_90% = [2 × (2.303 / k)] / [1 × (2.303 / k)] = 2 / 1 = 2.\n⇒ t_99% = 2 × t_90%.\n(Hence Proved).',
        topperTip: 'State the general first-order formula clearly before setting up the two ratios.'
      }
    ],
    mindMapNodes: [
      { title: 'Rate Laws & Kinetics', children: ['Differential Rate = -d[R]/dt', 'Order (Experimental) vs Molecularity', 'Unit of k = (mol/L)^(1-n) s⁻¹'] },
      { title: 'Zero & First Order', children: ['Zero order: [R] = [R]₀ - kt, t½ = [R]₀/2k', 'First order: k = (2.303/t) log([R]₀/[R])', 'First order half life: t½ = 0.693/k'] },
      { title: 'Activation Energy', children: ['Arrhenius k = A e^(-Ea/RT)', 'log(k₂/k₁) formula', 'Catalyst lowers activation barrier'] }
    ]
  },
  {
    id: 'c12-math-ch1',
    classLevel: 12,
    subject: 'Mathematics',
    chapterNumber: 1,
    chapterTitle: 'Matrices & Determinants',
    tagline: 'Matrix operations, inverse by adjoint, properties of determinants & solving system of equations',
    estimatedBoardWeightage: '10 - 12 Marks (CBSE Board Exam)',
    isPremium: true,
    summaryPoints: [
      'Matrix: Rectangular array of numbers. Order m × n (m rows, n columns). Addition and subtraction require identical order. Multiplication AB is defined only if columns of A = rows of B.',
      'Transpose of Matrix (Aᵀ or A′): Interchange rows and columns. Properties: (Aᵀ)ᵀ = A, (A + B)ᵀ = Aᵀ + Bᵀ, (AB)ᵀ = Bᵀ Aᵀ (Reversal law).',
      'Symmetric & Skew-Symmetric: Symmetric if Aᵀ = A; Skew-symmetric if Aᵀ = -A (all diagonal elements of skew-symmetric matrix are ZERO!). Any square matrix A can be uniquely expressed as A = ½(A + Aᵀ) + ½(A - Aᵀ).',
      'Determinants: Unique scalar value associated with square matrix |A|. |Aᵀ| = |A|. |AB| = |A| |B|. For scalar k and n × n matrix: |k A| = kⁿ |A|.',
      'Singular & Non-Singular: Singular if |A| = 0; Non-singular if |A| ≠ 0. Inverse A⁻¹ exists if and only if |A| ≠ 0.',
      'Adjoint of a Square Matrix (adj A): Transpose of the cofactor matrix: [C_ij]ᵀ.',
      'Important Properties of Adjoint:',
      '1. A (adj A) = (adj A) A = |A| I_n',
      '2. |adj A| = |A|^(n - 1)',
      '3. adj(AB) = (adj B) (adj A)',
      'Inverse of Matrix: A⁻¹ = (1 / |A|) · adj A.',
      'Solving System of Linear Equations (Matrix Method):',
      'A X = B ⇒ X = A⁻¹ B = (1 / |A|) · (adj A) B.',
      '• If |A| ≠ 0: Consistent with unique solution.',
      '• If |A| = 0 and (adj A) B ≠ O: Inconsistent (no solution).',
      '• If |A| = 0 and (adj A) B = O: Dependent with infinitely many solutions or inconsistent.'
    ],
    topperHandwrittenHighlights: [
      '★ Formula for |adj A|: For a 3 × 3 matrix (n = 3), |adj A| = |A|²! For |k A|: |k A| = k³ |A| (CBSE Board favorite 1-mark trap!).',
      '★ Skew-Symmetric Diagonals: a_ii = -a_ii ⇒ 2a_ii = 0 ⇒ a_ii = 0. All diagonal elements are zero.',
      '★ Matrix Method Layout: Set up A, X, B clearly. Calculate |A| first. If |A| ≠ 0, calculate all 9 cofactors C₁₁, C₁₂... C₃₃, write adj A, and compute X = A⁻¹ B.',
      '★ Reversal Law: (AB)⁻¹ = B⁻¹ A⁻¹ and (AB)ᵀ = Bᵀ Aᵀ.'
    ],
    examinerTraps: [
      'Trap: Transposing cofactors for adjoint: adj A is the TRANSPOSE of cofactor matrix. Forgetting to transpose is the #1 student error!',
      'Trap: Power of k in |k A|: Writing |3A| = 3 |A| instead of 3³ |A| = 27 |A| for 3×3 matrix.'
    ],
    formulasAndReactions: [
      {
        name: 'Matrix Inverse & Adjoint Theorem',
        formula: 'A⁻¹ = (1 / |A|) · adj A  |  A (adj A) = |A| I',
        where: 'Valid strictly when determinant |A| ≠ 0 (non-singular)',
        mnemonicOrTip: 'Inverse = Adjoint divided by Determinant'
      },
      {
        name: 'Matrix Method Linear Solver',
        formula: 'X = A⁻¹ B = (1 / |A|) · (adj A) · B',
        where: 'Guaranteed 5-mark long answer question in Section D of CBSE Board',
        mnemonicOrTip: 'AX = B ⇒ X = A⁻¹B'
      }
    ],
    pyqs: [
      {
        id: 'pyq-c12-math-1-1',
        year: 'CBSE Board 2024 / 2023 / 2020',
        marks: 5,
        question: 'Solve the following system of linear equations using matrix method:\n2x + 3y + 3z = 5\nx - 2y + z = -4\n3x - y - 2z = 3.',
        modelAnswer: 'Step 1: Write in matrix form A X = B:\nA = [[2, 3, 3], [1, -2, 1], [3, -1, -2]], X = [[x], [y], [z]], B = [[5], [-4], [3]].\n\nStep 2: Evaluate |A|:\n|A| = 2((-2)(-2) - (1)(-1)) - 3((1)(-2) - (1)(3)) + 3((1)(-1) - (-2)(3))\n|A| = 2(4 + 1) - 3(-2 - 3) + 3(-1 + 6) = 2(5) - 3(-5) + 3(5) = 10 + 15 + 15 = 40.\nSince |A| = 40 ≠ 0, A⁻¹ exists and system has a unique solution.\n\nStep 3: Find Cofactors of matrix A:\nC₁₁ = +(-2(-2) - (-1)(1)) = 5\nC₁₂ = -((1)(-2) - (3)(1)) = -(-5) = 5\nC₁₃ = +((1)(-1) - (3)(-2)) = 5\nC₂₁ = -(3(-2) - (-1)(3)) = -(-6 + 3) = 3\nC₂₂ = +(2(-2) - (3)(3)) = -4 - 9 = -13\nC₂₃ = -(2(-1) - (3)(3)) = -(-2 - 9) = 11\nC₃₁ = +(3(1) - (-2)(3)) = 3 + 6 = 9\nC₃₂ = -(2(1) - (1)(3)) = -(2 - 3) = 1\nC₃₃ = +(2(-2) - (1)(3)) = -4 - 3 = -7.\n\nStep 4: Adjoint and Inverse:\nadj A = [C_ij]ᵀ = [[5, 3, 9], [5, -13, 1], [5, 11, -7]].\nA⁻¹ = (1/40) · [[5, 3, 9], [5, -13, 1], [5, 11, -7]].\n\nStep 5: Compute X = A⁻¹ B:\n[[x], [y], [z]] = (1/40) · [[5, 3, 9], [5, -13, 1], [5, 11, -7]] · [[5], [-4], [3]]\n• x = (1/40) [5(5) + 3(-4) + 9(3)] = (1/40) [25 - 12 + 27] = 40/40 = 1.\n• y = (1/40) [5(5) - 13(-4) + 1(3)] = (1/40) [25 + 52 + 3] = 80/40 = 2.\n• z = (1/40) [5(5) + 11(-4) - 7(3)] = (1/40) [25 - 44 - 21] = -40/40 = -1.\n\nFinal Solution: x = 1, y = 2, z = -1.',
        topperTip: 'Always substitute the final values x = 1, y = 2, z = -1 into the first equation to quickly verify: 2(1) + 3(2) + 3(-1) = 2 + 6 - 3 = 5 (Correct!).'
      }
    ],
    mindMapNodes: [
      { title: 'Matrix Algebra', children: ['Transpose & Reversal Law (AB)ᵀ = BᵀAᵀ', 'Symmetric & Skew-symmetric', 'Multiplication conditions'] },
      { title: 'Determinants & Adjoint', children: ['|k A| = kⁿ |A|', '|adj A| = |A|^(n-1)', 'A (adj A) = |A| I', 'A⁻¹ = (1/|A|) adj A'] },
      { title: 'Matrix Method', children: ['AX = B ⇒ X = A⁻¹B', 'Cofactor evaluation and transposition', 'Consistency conditions'] }
    ]
  },
  {
    id: 'c12-math-ch2',
    classLevel: 12,
    subject: 'Mathematics',
    chapterNumber: 2,
    chapterTitle: 'Integrals (Definite & Indefinite) & Differential Equations',
    tagline: 'Integration by parts, partial fractions, definite integral properties & linear differential equations',
    estimatedBoardWeightage: '12 - 14 Marks (CBSE Board Exam)',
    isPremium: true,
    summaryPoints: [
      'Indefinite Integration: Anti-derivative process. ∫ xⁿ dx = (xⁿ⁺¹)/(n + 1) + C (n ≠ -1). ∫ (1/x) dx = ln|x| + C. ∫ eˣ dx = eˣ + C.',
      'Integration by Substitution: Used when integrand contains a function and its derivative: ∫ f(g(x)) g′(x) dx = ∫ f(u) du.',
      'Integration by Parts (ILATE Rule):',
      '∫ u · v dx = u ∫ v dx - ∫ [u′ · (∫ v dx)] dx.',
      '• Priority Order for choosing 1st function u: Inverse trig (I) > Logarithmic (L) > Algebraic (A) > Trigonometric (T) > Exponential (E).',
      'Special Exponential Form: ∫ eˣ [f(x) + f′(x)] dx = eˣ f(x) + C.',
      'Fundamental Properties of Definite Integrals:',
      '1. P0: ∫_a^b f(x) dx = ∫_a^b f(t) dt.',
      '2. P1: ∫_a^b f(x) dx = - ∫_b^a f(x) dx.',
      '3. P2: ∫_a^b f(x) dx = ∫_a^c f(x) dx + ∫_c^b f(x) dx.',
      '4. P4 (King’s Rule - Highest Board Yield!): ∫_0^a f(x) dx = ∫_0^a f(a - x) dx.',
      '5. P7: ∫_{-a}^a f(x) dx = 2 ∫_0^a f(x) dx (if f is even: f(-x) = f(x)); = 0 (if f is odd: f(-x) = -f(x)).',
      'Linear Differential Equations (First Order): Form dy/dx + P(x) y = Q(x).',
      '• Integrating Factor (I.F.): I.F. = e^(∫ P dx).',
      '• General Solution: y · (I.F.) = ∫ [Q(x) · (I.F.)] dx + C.'
    ],
    topperHandwrittenHighlights: [
      '★ King’s Property Magic: Integral I = ∫_0^(π/2) [√sin x / (√sin x + √cos x)] dx: Apply P4, add both integrals 2I = ∫_0^(π/2) 1 dx = π/2 ⇒ I = π/4 (guaranteed 4-marker!).',
      '★ Special Exponential Integral: Look out for ∫ eˣ (tan x + sec² x) dx = eˣ tan x + C, and ∫ eˣ [1/x - 1/x²] dx = eˣ/x + C.',
      '★ Linear D.E. Check: Coefficient of dy/dx must be strictly 1 before identifying P and Q. If given x dy/dx + 2y = x², divide by x first: dy/dx + (2/x)y = x!',
      '★ Odd Function Definite Integral: For ∫_{-a}^a (odd function) dx = 0 without any calculation (e.g. ∫_{-π/2}^{π/2} sin⁷ x dx = 0).'
    ],
    examinerTraps: [
      'Trap: Forgetting + C in indefinite integrals. CBSE marking schemes strictly deduct ½ mark if the constant of integration is omitted.',
      'Trap: Identifying P in linear D.E. with non-unit coefficient: Always divide the entire equation by the leading coefficient of dy/dx before calculating I.F. = e^(∫ P dx).'
    ],
    formulasAndReactions: [
      {
        name: 'King’s Property of Definite Integrals (P4)',
        formula: '∫_0^a f(x) dx = ∫_0^a f(a - x) dx',
        where: 'Evaluating symmetric definite integrals with trigonometric limits',
        mnemonicOrTip: 'Replace x with (upper limit - x) and add the two equations!'
      },
      {
        name: 'Linear Differential Equation Solution',
        formula: 'I.F. = e^(∫ P dx)  ⇒  y · (I.F.) = ∫ [Q · (I.F.)] dx + C',
        where: 'First order linear D.E. dy/dx + Py = Q',
        mnemonicOrTip: 'y × IF = integral of Q × IF'
      }
    ],
    pyqs: [
      {
        id: 'pyq-c12-math-2-1',
        year: 'CBSE Board 2024 / 2023 / 2022',
        marks: 4,
        question: 'Evaluate: I = ∫_0^(π/2) [sin⁴ x / (sin⁴ x + cos⁴ x)] dx.',
        modelAnswer: 'Given Integral:\nI = ∫_0^(π/2) [sin⁴ x / (sin⁴ x + cos⁴ x)] dx  --- (1)\n\nApplying King’s Property P4: ∫_0^a f(x) dx = ∫_0^a f(a - x) dx:\nReplace x with (π/2 - x):\nI = ∫_0^(π/2) [sin⁴(π/2 - x) / (sin⁴(π/2 - x) + cos⁴(π/2 - x))] dx.\nSince sin(π/2 - x) = cos x and cos(π/2 - x) = sin x:\nI = ∫_0^(π/2) [cos⁴ x / (cos⁴ x + sin⁴ x)] dx  --- (2)\n\nAdding equations (1) and (2):\n2I = ∫_0^(π/2) [(sin⁴ x + cos⁴ x) / (sin⁴ x + cos⁴ x)] dx\n2I = ∫_0^(π/2) 1 dx = [x]_0^(π/2) = (π/2 - 0) = π/2.\n\n⇒ 2I = π/2 ⇒ I = π/4.\n\nFinal Answer = π/4.',
        topperTip: 'State the property P4 by name and definition before applying to get full marks.'
      }
    ],
    mindMapNodes: [
      { title: 'Indefinite Techniques', children: ['Substitution method', 'Integration by Parts (ILATE)', 'Partial fractions decomposition', '∫ eˣ[f(x)+f′(x)] dx = eˣ f(x)'] },
      { title: 'Definite Integral Properties', children: ['King’s Rule: ∫_0^a f(x) = ∫_0^a f(a-x)', 'Even/Odd Rule: ∫_{-a}^a f(x)', 'Piecewise modulus integration'] },
      { title: 'Differential Equations', children: ['Order & Degree', 'Variable Separable', 'Homogeneous D.E. (y = vx)', 'Linear D.E. (dy/dx + Py = Q, I.F.)'] }
    ]
  }
];
