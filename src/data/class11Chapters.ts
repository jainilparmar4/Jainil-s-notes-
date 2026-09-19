import { ChapterNote } from '../types';

export const CLASS_11_CHAPTERS: ChapterNote[] = [
  {
    id: 'c11-phy-ch1',
    classLevel: 11,
    subject: 'Physics',
    chapterNumber: 1,
    chapterTitle: 'Motion in a Plane (Kinematics & Projectile Motion)',
    tagline: 'Vectors, projectile trajectory, maximum height, time of flight & horizontal range',
    estimatedBoardWeightage: '6 - 8 Marks',
    isPremium: true,
    summaryPoints: [
      'Scalars have only magnitude; Vectors have both magnitude and direction and obey triangle/parallelogram laws of vector addition.',
      'Parallelogram Law of Vector Addition: Resultant magnitude R = √(A² + B² + 2AB cos θ), direction tan α = (B sin θ) / (A + B cos θ).',
      'Unit Vector: Vector of unit magnitude pointing in a specific direction: â = A⃗ / |A⃗|. Resolution in 2D: A⃗ = A_x î + A_y ĵ, where A_x = A cos θ, A_y = A sin θ.',
      'Projectile Motion: Motion of an object thrown with initial velocity u at angle θ with horizontal under constant vertical acceleration due to gravity g (neglecting air resistance).',
      'Components of Motion: Horizontal velocity remains constant (u_x = u cos θ, a_x = 0). Vertical motion is uniformly accelerated (u_y = u sin θ, a_y = -g).',
      'Equation of Trajectory: y = x tan θ - [g / (2u² cos² θ)] x², which represents a PARABOLA.',
      'Time of Flight (T): T = (2u sin θ) / g.',
      'Maximum Height (H): H = (u² sin² θ) / (2g).',
      'Horizontal Range (R): R = (u² sin 2θ) / g. Range is maximum at angle θ = 45°: R_max = u² / g.',
      'Two complementary angles of projection (θ and 90° - θ) yield the SAME horizontal range for the same launch speed.'
    ],
    topperHandwrittenHighlights: [
      '★ Same Range for Complementary Angles: Range at θ is equal to Range at (90° - θ) because sin 2(90° - θ) = sin(180° - 2θ) = sin 2θ!',
      '★ Ratio of Heights at Complementary Angles: H₁ / H₂ = tan² θ.',
      '★ Velocity at the Highest Point: Vertical velocity v_y = 0; ONLY horizontal velocity v_x = u cos θ exists! Momentum at top = m u cos θ.',
      '★ Derivation of Trajectory: Eliminate t from x = (u cos θ)t into y = (u sin θ)t - ½gt² to prove parabolic trajectory (Guaranteed 3/5 marks!).'
    ],
    examinerTraps: [
      'Trap: Writing velocity at the highest point as zero. Only VERTICAL velocity is zero; horizontal velocity u cos θ remains unchanged!',
      'Trap: Confusing sin 2θ with sin² θ in range vs height formulas. Range has sin 2θ; Maximum height has sin² θ.'
    ],
    formulasAndReactions: [
      {
        name: 'Projectile Motion Formulas',
        formula: 'T = (2u sin θ)/g  |  H = (u² sin² θ)/(2g)  |  R = (u² sin 2θ)/g',
        where: 'Launch angle θ with horizontal; constant downward gravity g',
        mnemonicOrTip: 'T has 2u, H has u²/2g, R has u² sin 2θ/g'
      },
      {
        name: 'Maximum Horizontal Range',
        formula: 'R_max = u² / g  (at θ = 45°)',
        where: 'Longest throw or artillery firing',
        mnemonicOrTip: 'Sin 90° = 1, so 45° gives maximum range.'
      }
    ],
    pyqs: [
      {
        id: 'pyq-c11-phy-1-1',
        year: 'Class 11 Annual Board Pattern 2024 / 2023',
        marks: 5,
        question: 'Prove that the trajectory of a projectile is parabolic. Also derive the expression for its horizontal range and show that range is maximum at 45°.',
        modelAnswer: '1. Trajectory Derivation:\nConsider an object projected with initial speed u at angle θ with horizontal.\nHorizontal component: x = (u cos θ) · t ⇒ t = x / (u cos θ).\nVertical component: y = (u sin θ) · t - ½ g t².\nSubstitute t:\ny = (u sin θ) · [x / (u cos θ)] - ½ g [x / (u cos θ)]²\ny = x tan θ - [g / (2 u² cos² θ)] x².\nSince y is a quadratic polynomial in x of the form y = ax - bx², the trajectory of a projectile is a PARABOLA.\n\n2. Horizontal Range Expression:\nRange R is the horizontal distance covered during total time of flight T = (2u sin θ)/g.\nR = u_x × T = (u cos θ) × [(2u sin θ)/g] = [u² (2 sin θ cos θ)] / g = (u² sin 2θ) / g.\n\n3. Condition for Maximum Range:\nFor R to be maximum, sin 2θ must be maximum = 1.\n⇒ 2θ = 90° ⇒ θ = 45°.\nR_max = u² / g.',
        topperTip: 'Explicitly state the vector resolution components along x and y axes at the beginning before substituting into kinematic equations.'
      }
    ],
    mindMapNodes: [
      { title: 'Vector Analysis', children: ['Parallelogram Law (R = √(A²+B²+2AB cosθ))', 'Orthogonal components (Ax, Ay)', 'Dot and Cross Products'] },
      { title: 'Projectile Kinematics', children: ['Parabolic Trajectory y = ax - bx²', 'Time of flight T = (2u sinθ)/g', 'Height H = (u² sin²θ)/2g', 'Range R = (u² sin 2θ)/g (Max at 45°)'] }
    ]
  },
  {
    id: 'c11-phy-ch2',
    classLevel: 11,
    subject: 'Physics',
    chapterNumber: 2,
    chapterTitle: 'Laws of Motion & Friction',
    tagline: 'Free body diagrams, impulse, static/kinetic friction, banking of roads & circular dynamics',
    estimatedBoardWeightage: '6 - 7 Marks',
    isPremium: true,
    summaryPoints: [
      'Newton’s Laws of Motion: 1st Law defines force & inertia; 2nd Law provides formula F = dp/dt = ma; 3rd Law establishes action = -reaction.',
      'Impulse (J): Large force acting for a very short duration: J = ∫ F dt = Δp = m(v - u) (Unit: N·s or kg·m/s). Area under Force-Time graph gives Impulse.',
      'Friction: Opposing contact force parallel to surfaces in contact. Static friction (self-adjusting up to limiting value f_s ≤ μ_s N); Kinetic friction (f_k = μ_k N where μ_k < μ_s).',
      'Laws of Limiting Friction: Limiting friction f_max is directly proportional to normal reaction N (f_max = μ_s N), independent of apparent area of contact, depends on nature of surfaces.',
      'Angle of Friction (λ) and Angle of Repose (α): tan λ = μ_s; Angle of Repose α is the angle of inclined plane at which body just begins to slide down: tan α = μ_s. Therefore, Angle of Friction = Angle of Repose (λ = α).',
      'Banking of Circular Roads: To avoid slipping and excessive tyre wear on turns, the outer edge of road is raised above the inner edge.',
      'Optimum speed on banked road without friction: v_0 = √(rg tan θ). Maximum safe speed with friction: v_max = √[rg (μ_s + tan θ) / (1 - μ_s tan θ)].'
    ],
    topperHandwrittenHighlights: [
      '★ Angle of Friction equals Angle of Repose: tan λ = μ_s and tan α = μ_s ⇒ λ = α (standard 2-mark proof).',
      '★ Free Body Diagram (FBD) Strategy: Isolate each mass, show all external forces (weight mg downwards, normal reaction N perpendicular to surface, tension T along string away from body, friction opposite to impending motion).',
      '★ Why μ_k < μ_s: Once sliding begins, microscopic irregularities don’t get sufficient time to interlock firmly, reducing resistance.',
      '★ Banking Formula: tan θ = v² / (rg). For cyclists rounding a bend, they bend inward at angle tan θ = v² / (rg).'
    ],
    examinerTraps: [
      'Trap: Writing normal reaction N = mg on an inclined plane. On an incline of angle θ, N = mg cos θ and parallel force is mg sin θ!',
      'Trap: Treating static friction as constant. Static friction is SELF-ADJUSTING from 0 to μ_s N; only its maximum value is μ_s N.'
    ],
    formulasAndReactions: [
      {
        name: 'Optimum & Maximum Banking Speed',
        formula: 'v_optimum = √(rg tan θ)  |  v_max = √[rg (μ_s + tan θ) / (1 - μ_s tan θ)]',
        where: 'r = radius of curvature, g = 9.8 m/s², θ = angle of banking',
        mnemonicOrTip: 'Without friction, v² = rg tan θ'
      },
      {
        name: 'Angle of Repose Relation',
        formula: 'tan α = μ_s',
        where: 'Incline angle where block just begins to slide under gravity',
        mnemonicOrTip: 'Tangent of repose angle equals coefficient of static friction'
      }
    ],
    pyqs: [
      {
        id: 'pyq-c11-phy-2-1',
        year: 'Class 11 Annual Exam 2024 / 2023',
        marks: 5,
        question: 'Explain the necessity of banking of curved roads. Derive an expression for the optimum and maximum safe speed of a vehicle on a banked rough circular road.',
        modelAnswer: '1. Necessity of Banking:\nWhen a vehicle negotiates a flat circular turn, the required centripetal force is provided solely by static friction between tyres and road. Friction is unreliable (fails in rain/snow) and causes excessive tyre wear. By raising outer edge of road (banking), the horizontal component of normal reaction provides the centripetal force without relying solely on friction.\n\n2. Derivation of Optimum Speed:\nLet mass of car be m, radius of curve r, and banking angle θ.\nResolving forces without friction:\nVertical equilibrium: N cos θ = mg  --- (1)\nHorizontal centripetal force: N sin θ = m v² / r  --- (2)\nDividing (2) by (1):\ntan θ = v² / (rg) ⇒ v_optimum = √(rg tan θ).\n\n3. Maximum Safe Speed with Friction (μ_s):\nForces along horizontal and vertical:\nN cos θ - f_s sin θ = mg  where f_s = μ_s N\nN sin θ + f_s cos θ = m v_max² / r\nDividing equations and substituting f_s = μ_s N:\nv_max = √[rg (μ_s + tan θ) / (1 - μ_s tan θ)].',
        topperTip: 'Draw the cross-sectional diagram of the banked car clearly showing N, mg, f_s, and their resolved horizontal and vertical components.'
      }
    ],
    mindMapNodes: [
      { title: 'Newton’s Mechanics', children: ['F = dp/dt = ma', 'Impulse J = ∫F dt = Δp', 'Connected motion and FBDs'] },
      { title: 'Friction Dynamics', children: ['f_s ≤ μ_s N (Self adjusting)', 'f_k = μ_k N', 'Angle of Repose tan α = μ_s'] },
      { title: 'Circular Motion', children: ['Centripetal acceleration a_c = v²/r', 'Banked road v = √(rg tan θ)', 'Conical pendulum'] }
    ]
  },
  {
    id: 'c11-chem-ch1',
    classLevel: 11,
    subject: 'Chemistry',
    chapterNumber: 1,
    chapterTitle: 'Some Basic Concepts of Chemistry & Mole Concept',
    tagline: 'Stoichiometry, limiting reagent, empirical & molecular formula, molarity and molality',
    estimatedBoardWeightage: '6 - 7 Marks',
    isPremium: true,
    summaryPoints: [
      'Mole Concept: 1 Mole is the amount of substance that contains 6.022 × 10²³ elementary entities (atoms, molecules, ions). Molar mass is mass of 1 mole in grams.',
      'Percentage Composition: Mass % of an element = (Mass of that element in 1 mole of compound / Molar mass of compound) × 100.',
      'Empirical Formula: Simplest whole-number ratio of various atoms present in a compound. Molecular Formula = (Empirical Formula)ₙ, where n = Molar Mass / Empirical Formula Mass.',
      'Stoichiometry: Quantitative study of reactants and products in a balanced chemical equation. Calculations can be mole-mole, mass-mass, or volume-volume (at STP, 1 mole ideal gas occupies 22.4 L or 22.7 L at 1 bar).',
      'Limiting Reagent: The reactant that is completely consumed first in a chemical reaction; it limits the amount of product formed.',
      'Concentration Terms:',
      '1. Mass Percentage (w/w): (Mass of solute / Total mass of solution) × 100.',
      '2. Mole Fraction (x): x_A = n_A / (n_A + n_B). Sum of mole fractions x_A + x_B = 1.',
      '3. Molarity (M): Moles of solute per litre of solution: M = n / V(in L). Depends on temperature (changes with volume expansion).',
      '4. Molality (m): Moles of solute per kilogram of solvent: m = n / W_solvent(in kg). Independent of temperature.'
    ],
    topperHandwrittenHighlights: [
      '★ Molarity vs Molality: Molality is preferred over Molarity in temperature-dependent studies because mass does NOT change with temperature, whereas volume expands/contracts!',
      '★ Limiting Reagent Shortcut: Divide given moles of each reactant by its stoichiometric coefficient in balanced equation. The reactant with the SMALLEST ratio is the limiting reagent!',
      '★ Vapor Density Relation: Molecular Mass = 2 × Vapor Density (M = 2 × V.D.).',
      '★ Dilution Formula: M₁V₁ = M₂V₂. For mixing solutions: M_mix = (M₁V₁ + M₂V₂) / (V₁ + V₂).'
    ],
    examinerTraps: [
      'Trap: Using volume of solution in molality calculation. Molality denominator is strictly MASS OF SOLVENT in kg, NOT mass of solution!',
      'Trap: Calculating product based on excess reactant. Always calculate product yield strictly based on the LIMITING REAGENT.'
    ],
    formulasAndReactions: [
      {
        name: 'Molarity & Molality Formulas',
        formula: 'M = [w_B × 1000] / [M_B × V(mL)]  |  m = [w_B × 1000] / [M_B × W_A(g)]',
        where: 'w_B = solute mass, M_B = solute molar mass, V = volume, W_A = solvent mass',
        mnemonicOrTip: 'Molarity uses Litres of Solution; Molality uses Kilograms of Solvent'
      },
      {
        name: 'Empirical to Molecular Formula',
        formula: 'Molecular Formula = (Empirical Formula)ₙ  where n = Molar Mass / Empirical Mass',
        where: 'Determining exact molecular formula from elemental analysis',
        mnemonicOrTip: 'Find n, multiply all subscripts by n'
      }
    ],
    pyqs: [
      {
        id: 'pyq-c11-chem-1-1',
        year: 'Class 11 Annual Exam 2024 / 2023',
        marks: 4,
        question: '50.0 kg of N₂(g) and 10.0 kg of H₂(g) are mixed to produce NH₃(g). Identify the limiting reagent and calculate the mass of NH₃(g) formed.',
        modelAnswer: 'Balanced Equation: N₂(g) + 3H₂(g) → 2NH₃(g).\n\nStep 1: Calculate moles of reactants:\nMoles of N₂ = 50,000 g / 28 g/mol = 1785.7 mol.\nMoles of H₂ = 10,000 g / 2.016 g/mol = 4960.3 mol.\n\nStep 2: Identify Limiting Reagent:\nFrom stoichiometry, 1 mole N₂ requires 3 moles of H₂.\nRequired H₂ for 1785.7 mol N₂ = 1785.7 × 3 = 5357.1 mol.\nHowever, we only have 4960.3 mol of H₂ available.\nSince available H₂ < required H₂, DIHYDROGEN (H₂) IS THE LIMITING REAGENT.\n\nStep 3: Calculate moles and mass of NH₃ formed:\nFrom equation, 3 moles of H₂ produce 2 moles of NH₃.\nMoles of NH₃ = (2/3) × moles of H₂ = (2/3) × 4960.3 mol = 3306.9 mol.\nMolar mass of NH₃ = 17 g/mol.\nMass of NH₃ = 3306.9 mol × 17 g/mol = 56,217 g = 56.1 kg NH₃.',
        topperTip: 'State clearly which reactant is limiting and base all product calculations exclusively on that limiting substance.'
      }
    ],
    mindMapNodes: [
      { title: 'Mole Concept', children: ['1 mol = 6.022 × 10²³ entities', 'Molar Mass (g/mol)', 'V = 22.4 L at STP'] },
      { title: 'Concentration Units', children: ['Molarity M = mol/L (Temp dependent)', 'Molality m = mol/kg (Temp independent)', 'Mole Fraction (Sum = 1)'] },
      { title: 'Stoichiometry & Yield', children: ['Limiting Reagent identification', 'Empirical formula analysis', 'Percentage yield calculations'] }
    ]
  },
  {
    id: 'c11-chem-ch2',
    classLevel: 11,
    subject: 'Chemistry',
    chapterNumber: 2,
    chapterTitle: 'Structure of Atom & Quantum Mechanics',
    tagline: 'Bohr model, de Broglie dual nature, Heisenberg uncertainty & four quantum numbers',
    estimatedBoardWeightage: '6 - 8 Marks',
    isPremium: true,
    summaryPoints: [
      'Bohr’s Model of Hydrogen Atom: Electrons revolve in stable stationary circular orbits where angular momentum is quantized: mvr = nh / (2π). Energy of orbit E_n = -13.6 / n² eV = -2.18 × 10⁻¹⁸ / n² J.',
      'Rydberg Formula for Spectral Lines: 1/λ = R_H [1/n₁² - 1/n₂²]. Lyman (UV, n₁=1), Balmer (Visible, n₁=2), Paschen (IR, n₁=3), Brackett (IR, n₁=4), Pfund (IR, n₁=5).',
      'Dual Nature of Matter (de Broglie): All material particles exhibit wave-particle duality. Wavelength λ = h / p = h / (mv).',
      'Heisenberg’s Uncertainty Principle: It is impossible to determine simultaneously both the exact position (x) and exact momentum (p) of a subatomic particle: Δx · Δp ≥ h / (4π).',
      'Quantum Numbers (Address of electron):',
      '1. Principal (n = 1, 2, 3...): Shell, main energy level, and size.',
      '2. Azimuthal/Subsidiary (l = 0 to n - 1): Subshell and shape (l=0 s-sphere, l=1 p-dumbbell, l=2 d-double dumbbell, l=3 f).',
      '3. Magnetic (m_l = -l to +l): Spatial orientation of orbital in magnetic field ((2l + 1) orbitals).',
      '4. Spin (m_s = +½, -½): Spin orientation of electron.',
      'Electronic Configuration Rules: Aufbau Principle (lowest energy orbital filled first according to (n + l) rule), Pauli Exclusion Principle (no two electrons can have all 4 quantum numbers identical; max 2 electrons per orbital with opposite spins), Hund’s Rule of Maximum Multiplicity (degenerate orbitals singly occupied first with parallel spins).'
    ],
    topperHandwrittenHighlights: [
      '★ Anomalous Configurations of Cr (24) and Cu (29): Cr is [Ar] 3d⁵ 4s¹ (not 3d⁴ 4s²); Cu is [Ar] 3d¹⁰ 4s¹ (not 3d⁹ 4s²) due to extra stability of half-filled and completely-filled d-subshells!',
      '★ Balmer Series is the ONLY series in Hydrogen spectrum lying in the VISIBLE spectrum (n₁ = 2).',
      '★ Total Number of Orbitals in a shell: n². Total maximum electrons in shell = 2n².',
      '★ Nodes: Radial nodes = n - l - 1; Angular nodes = l; Total nodes = n - 1.'
    ],
    examinerTraps: [
      'Trap: Writing electron configuration of Cr as [Ar] 4s² 3d⁴. CBSE cuts full marks; it must be [Ar] 3d⁵ 4s¹.',
      'Trap: Forgetting the factor of 4π in Heisenberg equation: Δx · mΔv ≥ h / (4π), not h / (2π).'
    ],
    formulasAndReactions: [
      {
        name: 'de Broglie Wavelength',
        formula: 'λ = h / (m · v) = h / √(2 m E_k)',
        where: 'h = 6.626 × 10⁻³⁴ J·s, m = mass (kg), v = velocity (m/s)',
        mnemonicOrTip: 'Wavelength is inversely proportional to momentum'
      },
      {
        name: 'Heisenberg Uncertainty Relation',
        formula: 'Δx · Δp ≥ h / (4π)  ⇒  Δx · (m Δv) ≥ h / (4π)',
        where: 'Δx = position uncertainty, Δv = velocity uncertainty',
        mnemonicOrTip: 'Product of uncertainties is bounded by h/(4π)'
      }
    ],
    pyqs: [
      {
        id: 'pyq-c11-chem-2-1',
        year: 'Class 11 Annual Exam 2024 / 2023',
        marks: 3,
        question: 'State Hund’s rule of maximum multiplicity and Pauli’s exclusion principle. Write the electronic configuration of Cr (Z = 24) and explain why it is exceptional.',
        modelAnswer: '1. Pauli’s Exclusion Principle: No two electrons in an atom can have the same set of all four quantum numbers. Consequently, an orbital can accommodate a maximum of two electrons, and they must have opposite spins.\n\n2. Hund’s Rule of Maximum Multiplicity: Pairing of electrons in the orbitals belonging to the same subshell (degenerate orbitals) does not take place until each orbital belonging to that subshell has got one electron each with parallel spins.\n\n3. Electronic Configuration of Chromium (Z = 24):\nExpected: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁴ 4s².\nActual: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹ (or [Ar] 3d⁵ 4s¹).\n\nExplanation for Exception: Half-filled subshells (3d⁵) possess extra stability due to:\n(i) Symmetrical distribution of electron charge around the nucleus.\n(ii) Maximum exchange energy resulting from the large number of possible exchanges among parallel-spin electrons in degenerate d-orbitals.',
        topperTip: 'Mention both reasons for extra stability: (1) Symmetry and (2) Greater Exchange Energy.'
      }
    ],
    mindMapNodes: [
      { title: 'Atomic Models & Dual Nature', children: ['Bohr Quantization mvr = nh/2π', 'Hydrogen Spectral Series (Balmer visible)', 'de Broglie λ = h/mv', 'Heisenberg Δx·Δp ≥ h/4π'] },
      { title: 'Quantum Numbers', children: ['n: Size and shell', 'l: Subshell shape (s,p,d,f)', 'm_l: Spatial orientation', 'm_s: Electron spin (±½)'] },
      { title: 'Filling Principles', children: ['Aufbau (n+l rule)', 'Pauli (Opposite spins)', 'Hund’s rule (Half-filled Cr/Cu stability)'] }
    ]
  },
  {
    id: 'c11-math-ch1',
    classLevel: 11,
    subject: 'Mathematics',
    chapterNumber: 1,
    chapterTitle: 'Trigonometric Functions & Compound Angles',
    tagline: 'Radian measure, trigonometric identities, compound angles, multiple & submultiple angles',
    estimatedBoardWeightage: '8 - 10 Marks',
    isPremium: true,
    summaryPoints: [
      'Angle Measure: 1 Radian is the angle subtended at the center of a circle by an arc of length equal to its radius: θ = l / r (θ in radians). Conversion: π radians = 180° ⇒ 1 rad ≈ 57°16′22″.',
      'Trigonometric Functions in 4 Quadrants (ASTC Rule):',
      '• 1st Quadrant (0 to π/2): All positive (A).',
      '• 2nd Quadrant (π/2 to π): Sine & Cosec positive (S).',
      '• 3rd Quadrant (π to 3π/2): Tan & Cot positive (T).',
      '• 4th Quadrant (3π/2 to 2π): Cos & Sec positive (C).',
      'Compound Angle Formulas:',
      '• sin(A ± B) = sin A cos B ± cos A sin B',
      '• cos(A ± B) = cos A cos B ∓ sin A sin B  (Note reversed sign!)',
      '• tan(A ± B) = (tan A ± tan B) / (1 ∓ tan A tan B)',
      'Transformation Formulas (Product to Sum & Sum to Product):',
      '• 2 sin A cos B = sin(A + B) + sin(A - B)  |  2 cos A sin B = sin(A + B) - sin(A - B)',
      '• 2 cos A cos B = cos(A + B) + cos(A - B)  |  2 sin A sin B = cos(A - B) - cos(A + B)',
      '• sin C + sin D = 2 sin[(C+D)/2] cos[(C-D)/2]',
      '• cos C + cos D = 2 cos[(C+D)/2] cos[(C-D)/2]  |  cos C - cos D = -2 sin[(C+D)/2] sin[(C-D)/2]',
      'Double & Triple Angle Formulas:',
      '• sin 2A = 2 sin A cos A = (2 tan A) / (1 + tan² A)',
      '• cos 2A = cos² A - sin² A = 2 cos² A - 1 = 1 - 2 sin² A = (1 - tan² A) / (1 + tan² A)',
      '• tan 2A = (2 tan A) / (1 - tan² A)',
      '• sin 3A = 3 sin A - 4 sin³ A  |  cos 3A = 4 cos³ A - 3 cos A'
    ],
    topperHandwrittenHighlights: [
      '★ Power Reduction Shortcuts: 1 + cos 2A = 2 cos² A, and 1 - cos 2A = 2 sin² A (used constantly in Class 12 Calculus!).',
      '★ Negative Sign in cos(C - D): cos C - cos D = -2 sin[(C+D)/2] sin[(C-D)/2] = 2 sin[(C+D)/2] sin[(D-C)/2]. Never drop this sign!',
      '★ Even/Odd Trig Functions: cos(-x) = cos x, sec(-x) = sec x. All others are odd: sin(-x) = -sin x, tan(-x) = -tan x.'
    ],
    examinerTraps: [
      'Trap: Sign flip in cos(A + B): cos(A + B) = cos A cos B MINUS sin A sin B, NOT plus.',
      'Trap: Confusing tan 2A with sin 2A in terms of tan: tan 2A has (1 - tan² A) in denominator; sin 2A has (1 + tan² A).'
    ],
    formulasAndReactions: [
      {
        name: 'Half-Angle Calculus Substitutions',
        formula: '1 + cos 2θ = 2 cos² θ  |  1 - cos 2θ = 2 sin² θ',
        where: 'Simplifying root radicals and integration forms',
        mnemonicOrTip: 'Plus gives Cos squared; Minus gives Sin squared!'
      },
      {
        name: 'Compound Angle Tangent',
        formula: 'tan(A + B) = (tan A + tan B) / (1 - tan A tan B)',
        where: 'Calculating tan 75°, tan 15°, and trig identities',
        mnemonicOrTip: 'Sum over 1 minus product'
      }
    ],
    pyqs: [
      {
        id: 'pyq-c11-math-1-1',
        year: 'Class 11 Annual Exam 2024 / 2023',
        marks: 4,
        question: 'Prove that: [sin 5x - 2 sin 3x + sin x] / [cos 5x - cos x] = tan x.',
        modelAnswer: 'LHS = [sin 5x - 2 sin 3x + sin x] / [cos 5x - cos x]\nGrouping first and third terms in numerator:\nNumerator = (sin 5x + sin x) - 2 sin 3x.\n\nApplying Sum-to-Product formula: sin C + sin D = 2 sin[(C+D)/2] cos[(C-D)/2]:\nsin 5x + sin x = 2 sin[(5x+x)/2] cos[(5x-x)/2] = 2 sin 3x cos 2x.\n\nNumerator becomes:\n2 sin 3x cos 2x - 2 sin 3x = 2 sin 3x (cos 2x - 1) = -2 sin 3x (1 - cos 2x).\n\nDenominator formula: cos C - cos D = -2 sin[(C+D)/2] sin[(C-D)/2]:\ncos 5x - cos x = -2 sin[(5x+x)/2] sin[(5x-x)/2] = -2 sin 3x sin 2x.\n\nSubstituting back into LHS fraction:\nLHS = [-2 sin 3x (1 - cos 2x)] / [-2 sin 3x sin 2x]\nCanceling -2 sin 3x:\n= (1 - cos 2x) / sin 2x.\n\nUsing identities 1 - cos 2x = 2 sin² x and sin 2x = 2 sin x cos x:\n= (2 sin² x) / (2 sin x cos x) = sin x / cos x = tan x = RHS.\n(Hence Proved).',
        topperTip: 'Always write the transformation formulas used in brackets on the right margin to secure full step marks.'
      }
    ],
    mindMapNodes: [
      { title: 'ASTC Quadrants', children: ['Q1: All positive', 'Q2: Sin/Cosec', 'Q3: Tan/Cot', 'Q4: Cos/Sec'] },
      { title: 'Compound & Double Angles', children: ['sin(A±B), cos(A∓B)', 'sin 2A, cos 2A (4 representations)', '1 ± cos 2A identities'] },
      { title: 'Transformation Formulas', children: ['Product to Sum (2 sin A cos B)', 'Sum to Product (sin C ± sin D)', 'cos C - cos D'] }
    ]
  }
];
