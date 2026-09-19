export interface FormulaSection {
  title: string;
  classLevel: number;
  category: 'Physics' | 'Chemistry' | 'Mathematics' | 'Biology';
  items: {
    name: string;
    formula: string;
    variables: string;
    topperTip: string;
  }[];
}

export const FORMULA_SECTIONS: FormulaSection[] = [
  // Class 9
  {
    title: 'Motion & Kinematics (Class 9 Physics)',
    classLevel: 9,
    category: 'Physics',
    items: [
      {
        name: "3 Equations of Uniformly Accelerated Motion",
        formula: "v = u + at  |  s = ut + ½at²  |  v² = u² + 2as",
        variables: "u = initial velocity, v = final velocity, a = acceleration, s = distance/displacement, t = time",
        topperTip: "If body starts from rest: u = 0. If it comes to a stop: v = 0. Free fall downward: a = +g (+9.8 m/s²)."
      },
      {
        name: "Newton's 2nd Law & Momentum",
        formula: "p = m · v  |  F = m · a = (mv - mu) / t",
        variables: "p = momentum (kg·m/s), m = mass, a = acceleration (m/s²), F = Force (N)",
        topperTip: "A cricket fielder pulls hands backward while taking a catch to increase 't', reducing the impact force 'F'."
      },
      {
        name: "Universal Law of Gravitation & Weight",
        formula: "F = G · (M · m) / d²  |  W = m · g",
        variables: "G = 6.673 × 10⁻¹¹ N·m²/kg², g = 9.8 m/s² on Earth surface",
        topperTip: "Mass remains constant everywhere; weight varies with g (Weight on Moon = W_earth / 6)."
      },
      {
        name: "Work, Kinetic Energy & Potential Energy",
        formula: "W = F · s  |  E_k = ½ m v²  |  E_p = m · g · h",
        variables: "Work & Energy in Joules (J). 1 Joule = 1 N · m = 1 kg·m²/s²",
        topperTip: "If displacement is perpendicular to force (e.g. porter walking holding luggage on head), Work done = 0."
      }
    ]
  },
  {
    title: 'Matter & Atomic Structure (Class 9 Chemistry)',
    classLevel: 9,
    category: 'Chemistry',
    items: [
      {
        name: "Mole Concept & Avogadro's Number",
        formula: "Moles (n) = Given Mass (m) / Molar Mass (M) = Particles (N) / N_A",
        variables: "N_A = Avogadro constant = 6.022 × 10²³ entities/mol",
        topperTip: "1 mole of any ideal gas at STP occupies exactly 22.4 Litres volume."
      },
      {
        name: "Concentration of Solutions",
        formula: "Mass % = (Mass of Solute / Mass of Solution) × 100",
        variables: "Mass of Solution = Mass of Solute + Mass of Solvent",
        topperTip: "Never divide by solvent mass alone; always divide by total solution mass."
      }
    ]
  },

  // Class 10
  {
    title: 'Electricity & Circuits (Class 10 Physics)',
    classLevel: 10,
    category: 'Physics',
    items: [
      {
        name: "Electric Current (I)",
        formula: "I = Q / t = n · e / t",
        variables: "Q in Coulombs, t in seconds, e = 1.6 × 10⁻¹⁹ C, Unit: Ampere (A)",
        topperTip: "1 Ampere = 1 Coulomb per second. Current flows opposite to electron flow."
      },
      {
        name: "Electric Potential Difference (V)",
        formula: "V = W / Q",
        variables: "W = Work done in Joules, Q = Charge, Unit: Volt (V)",
        topperTip: "1 Volt = 1 Joule per Coulomb. Measured by Voltmeter (connected in parallel, high resistance)."
      },
      {
        name: "Ohm's Law & Resistance",
        formula: "V = I · R  |  R = ρ · (L / A)",
        variables: "ρ = Resistivity (Ω·m). L = Length, A = Cross-sectional area",
        topperTip: "If wire is stretched to n times its length, new resistance becomes n² · R!"
      },
      {
        name: "Series Combination",
        formula: "R_eq = R₁ + R₂ + R₃ + ...",
        variables: "Current I is constant, Voltage divides: V = V₁ + V₂ + V₃",
        topperTip: "Equivalent resistance is greater than the largest individual resistor."
      },
      {
        name: "Parallel Combination",
        formula: "1/R_eq = 1/R₁ + 1/R₂ + 1/R₃",
        variables: "Voltage V is constant, Current divides: I = I₁ + I₂ + I₃",
        topperTip: "Domestic circuits are parallel so each device gets full 220V voltage."
      },
      {
        name: "Joule's Law of Heating & Electric Power",
        formula: "H = I² · R · t = V · I · t  |  P = V · I = I² · R = V² / R",
        variables: "H in Joules, P in Watts (W), 1 kWh = 3.6 × 10⁶ Joules",
        topperTip: "Power rating equation: Bulbs in series (dimmer) vs parallel (brighter)."
      }
    ]
  },
  {
    title: 'Light – Optics & Refraction (Class 10 Physics)',
    classLevel: 10,
    category: 'Physics',
    items: [
      {
        name: "Mirror Formula & Magnification",
        formula: "1/v + 1/u = 1/f  |  m = -v/u = h'/h",
        variables: "u = object distance, v = image distance, f = focal length, h = height",
        topperTip: "Mirror formula uses PLUS. For Concave: f is negative; Convex: f is positive."
      },
      {
        name: "Lens Formula & Magnification",
        formula: "1/v - 1/u = 1/f  |  m = +v/u = h'/h",
        variables: "Sign convention: u is ALWAYS negative. Convex lens: f is positive.",
        topperTip: "Lens formula uses MINUS. Lens magnification has NO minus sign."
      },
      {
        name: "Snell's Law of Refraction",
        formula: "sin i / sin r = constant = n₂₁ = v₁ / v₂ = n₂ / n₁",
        variables: "n₂₁ = refractive index of medium 2 with respect to medium 1",
        topperTip: "Light traveling from rarer to denser medium bends TOWARDS normal (speed decreases)."
      },
      {
        name: "Power of a Lens",
        formula: "P = 1 / f (in meters)  |  P_total = P₁ + P₂ + P₃",
        variables: "Unit: Dioptre (D). 1 D = 1 m⁻¹",
        topperTip: "Always convert focal length from cm to meters before calculating Power!"
      }
    ]
  },
  {
    title: 'Chemical Reactions & Equations (Class 10 Chemistry)',
    classLevel: 10,
    category: 'Chemistry',
    items: [
      {
        name: "Chemical Reaction & Equation Principles",
        formula: "Reactants → Products  |  Law of Conservation of Mass",
        variables: "Total Mass of Reactants = Total Mass of Products (Equations must be balanced)",
        topperTip: "Chemical Reaction: A process where one or more substances turn into new substances with different properties."
      },
      {
        name: "5 Major Reaction Archetypes",
        formula: "Comb: A + B → AB | Decomp: A → B + C | Disp: A + BC → AC + B | Double Disp: AB + CD → AD + CB",
        variables: "Redox: Simultaneous Oxidation (gain of O / loss of e⁻) and Reduction (loss of O / gain of e⁻)",
        topperTip: "Decomposition requires energy: Thermal (heat), Photolytic (light), or Electrolytic (current)."
      },
      {
        name: "Effects in Daily Life: Corrosion & Rancidity",
        formula: "Corrosion: 4Fe + 3O₂ + 2xH₂O → 2Fe₂O₃·xH₂O  |  Rancidity: Oxidation of Fats & Oils",
        variables: "Corrosion: Metals slowly break down in air/moisture. Rancidity: Fats/oils spoil changing taste & smell.",
        topperTip: "Prevent rancidity using antioxidants, airtight containers, or flushing with Nitrogen gas."
      },
      {
        name: "Quicklime & Slaked Lime Reaction",
        formula: "CaO(s) + H₂O(l) → Ca(OH)₂(aq) + Heat",
        variables: "Quicklime (CaO) + Water → Slaked Lime (Ca(OH)₂)",
        topperTip: "Exothermic reaction used for whitewashing walls; reacts with CO₂ over 2-3 days to form shiny CaCO₃."
      }
    ]
  },
  {
    title: 'Introduction to Trigonometry (Class 10 Maths)',
    classLevel: 10,
    category: 'Mathematics',
    items: [
      {
        name: "Trigonometric Ratios (Right Triangle)",
        formula: "sin θ = P/H | cos θ = B/H | tan θ = P/B | cot θ = B/P | sec θ = H/B | cosec θ = H/P",
        variables: "P = Perpendicular opposite to θ, B = Base adjacent to θ, H = Hypotenuse",
        topperTip: "Mnemonic: 'Some People Have Curly Brown Hair Through Proper Brushing'."
      },
      {
        name: "Fundamental Trigonometric Identities",
        formula: "sin² θ + cos² θ = 1  |  1 + tan² θ = sec² θ  |  1 + cot² θ = cosec² θ",
        variables: "Valid for 0° ≤ θ ≤ 90°",
        topperTip: "Transform expressions into sin θ and cos θ when stuck on difficult board proofs."
      },
      {
        name: "Standard Angle Values Table",
        formula: "sin: 0, 1/2, 1/√2, √3/2, 1 (0° to 90°) | tan 45° = 1, tan 30° = 1/√3, tan 60° = √3",
        variables: "cos values are reverse of sin values (cos 0° = 1, cos 90° = 0)",
        topperTip: "tan 90° and sec 90° are undefined (division by zero)."
      }
    ]
  },
  {
    title: 'Real Numbers, Polynomials & Algebra (Class 10 Maths)',
    classLevel: 10,
    category: 'Mathematics',
    items: [
      {
        name: "HCF & LCM Relation",
        formula: "HCF(a, b) × LCM(a, b) = a × b",
        variables: "Applicable only for two numbers a and b",
        topperTip: "Product of extremes = Product of factors. Do NOT apply for 3 numbers."
      },
      {
        name: "Quadratic Formula & Nature of Roots",
        formula: "x = [-b ± √(b² - 4ac)] / (2a)  |  D = b² - 4ac",
        variables: "D > 0: Two distinct real roots; D = 0: Two equal real roots; D < 0: No real roots",
        topperTip: "For equal roots (frequent board question), set b² - 4ac = 0 and solve for k."
      },
      {
        name: "Arithmetic Progression (AP)",
        formula: "a_n = a + (n - 1)d  |  S_n = (n/2)[2a + (n - 1)d] = (n/2)[a + l]",
        variables: "a = first term, d = common difference, n = number of terms, l = last term",
        topperTip: "Three consecutive terms in AP: (a - d), a, (a + d) makes sum calculations simple."
      }
    ]
  },

  // Class 11
  {
    title: 'Thermodynamics & Kinetic Theory (Class 11 Physics)',
    classLevel: 11,
    category: 'Physics',
    items: [
      {
        name: "First Law of Thermodynamics",
        formula: "ΔQ = ΔU + ΔW  |  ΔW = P · ΔV",
        variables: "ΔQ = heat supplied, ΔU = internal energy change (n·C_v·ΔT), ΔW = work done by gas",
        topperTip: "Isothermal (T = const): ΔU = 0, so ΔQ = ΔW. Adiabatic: ΔQ = 0, so ΔW = -ΔU."
      },
      {
        name: "Ideal Gas Law & Root Mean Square Speed",
        formula: "P · V = n · R · T  |  v_rms = √(3RT / M) = √(3k_B T / m)",
        variables: "R = 8.314 J/(mol·K), k_B = Boltzmann constant = 1.38 × 10⁻²³ J/K",
        topperTip: "v_rms depends only on absolute Temperature T and molar mass M: v_rms ∝ √(T)."
      }
    ]
  },
  {
    title: 'Chemical Bonding & Thermodynamics (Class 11 Chemistry)',
    classLevel: 11,
    category: 'Chemistry',
    items: [
      {
        name: "Gibbs Free Energy & Spontaneity",
        formula: "ΔG = ΔH - T · ΔS  |  ΔG° = -2.303 · R · T · log K",
        variables: "ΔG < 0 (Spontaneous), ΔG = 0 (Equilibrium), ΔG > 0 (Non-spontaneous)",
        topperTip: "If ΔH is negative and ΔS is positive, ΔG is ALWAYS negative (spontaneous at all temps)."
      },
      {
        name: "Bond Order Formula (MO Theory)",
        formula: "Bond Order = ½ (N_b - N_a)",
        variables: "N_b = electrons in bonding orbitals, N_a = electrons in antibonding orbitals",
        topperTip: "If Bond Order > 0, molecule exists. Diamagnetic if all paired; Paramagnetic if unpaired e⁻."
      }
    ]
  },

  // Class 12
  {
    title: 'Electrostatics & Capacitance (Class 12 Physics)',
    classLevel: 12,
    category: 'Physics',
    items: [
      {
        name: "Coulomb's Law & Gauss's Theorem",
        formula: "F = (1 / 4πε₀) · (q₁q₂ / r²)  |  Φ = ∮ E · dA = q_enclosed / ε₀",
        variables: "1/(4πε₀) = 9 × 10⁹ N·m²/C², ε₀ = 8.854 × 10⁻¹² C²/(N·m²)",
        topperTip: "Electric field inside any hollow charged conductor is strictly ZERO (Electrostatic Shielding)."
      },
      {
        name: "Capacitance & Energy Stored",
        formula: "C = ε₀A / d  |  U = ½ C V² = Q² / (2C) = ½ Q V",
        variables: "With dielectric constant K: C' = K · C₀ (capacitance increases by factor K)",
        topperTip: "Battery disconnected: Charge Q remains constant. Battery connected: Voltage V remains constant."
      },
      {
        name: "Drift Velocity & Mobility",
        formula: "v_d = e · E · τ / m  |  I = n · e · A · v_d  |  μ = v_d / E",
        variables: "τ = relaxation time, n = free electron density, e = 1.6 × 10⁻¹⁹ C",
        topperTip: "Order of drift velocity is small (~1 mm/s), but electric signal travels near speed of light."
      }
    ]
  },
  {
    title: 'Chemical Kinetics & Electrochemistry (Class 12 Chemistry)',
    classLevel: 12,
    category: 'Chemistry',
    items: [
      {
        name: "Nernst Equation",
        formula: "E_cell = E°_cell - (0.0591 / n) · log [Products] / [Reactants] at 298 K",
        variables: "E°_cell = E°_cathode - E°_anode, n = moles of electrons transferred",
        topperTip: "At equilibrium: E_cell = 0, which gives E°_cell = (0.0591 / n) log K_c."
      },
      {
        name: "First Order Kinetics & Half-Life",
        formula: "k = (2.303 / t) · log( [A]₀ / [A]_t )  |  t_½ = 0.693 / k",
        variables: "[A]₀ = initial concentration, [A]_t = concentration remaining at time t",
        topperTip: "Half-life of first-order reaction is INDEPENDENT of initial concentration."
      }
    ]
  },
  {
    title: 'Calculus & Vectors (Class 12 Mathematics)',
    classLevel: 12,
    category: 'Mathematics',
    items: [
      {
        name: "Standard Derivatives & Integrals",
        formula: "d/dx(xⁿ) = n·xⁿ⁻¹ | ∫ xⁿ dx = xⁿ⁺¹/(n+1) | ∫ 1/x dx = ln|x| | d/dx(sin x) = cos x",
        variables: "Constant of integration +C must always be written for indefinite integrals",
        topperTip: "Integration by Parts: ∫ u v dx = u ∫ v dx - ∫ [ u' (∫ v dx) ] dx (Follow ILATE rule)."
      },
      {
        name: "Dot & Cross Product of Vectors",
        formula: "a · b = |a||b| cos θ  |  a × b = |a||b| sin θ · n̂",
        variables: "a · b = a₁b₁ + a₂b₂ + a₃b₃; Perpendicular vectors: a · b = 0; Parallel: a × b = 0",
        topperTip: "Work done is dot product (W = F · d), Torque is cross product (τ = r × F)."
      }
    ]
  }
];
