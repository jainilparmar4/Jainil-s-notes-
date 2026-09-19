import React, { useEffect, useRef } from 'react';
import { AnimationType, VideoScene } from '../../types';

interface AnimatedVisualCanvasProps {
  animationType: AnimationType;
  scene: VideoScene;
  isPlaying: boolean;
  playbackRate: number;
}

export const AnimatedVisualCanvas: React.FC<AnimatedVisualCanvasProps> = ({
  animationType,
  scene,
  isPlaying,
  playbackRate,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Set internal resolution matching device pixel ratio
    const updateCanvasDimensions = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.resetTransform();
      ctx.scale(dpr, dpr);
    };

    updateCanvasDimensions();
    window.addEventListener('resize', updateCanvasDimensions);

    const render = () => {
      if (isPlaying) {
        time += 0.03 * playbackRate;
      }

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Clear Canvas with sleek dark studio background
      ctx.fillStyle = '#090d16';
      ctx.fillRect(0, 0, width, height);

      // Subtle background grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 32;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Render based on selected animation type
      switch (animationType) {
        case 'circuit':
          renderCircuitAnimation(ctx, width, height, time);
          break;
        case 'ray_optics':
          renderRayOpticsAnimation(ctx, width, height, time);
          break;
        case 'chemical_reaction':
          renderChemicalReactionAnimation(ctx, width, height, time);
          break;
        case 'math_parabola':
          renderParabolaAnimation(ctx, width, height, time);
          break;
        case 'biology_cell':
          renderBiologyCellAnimation(ctx, width, height, time);
          break;
        case 'atom_bohr':
          renderAtomBohrAnimation(ctx, width, height, time);
          break;
        case 'whiteboard':
        default:
          renderWhiteboardAnimation(ctx, width, height, time, scene);
          break;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateCanvasDimensions);
    };
  }, [animationType, isPlaying, playbackRate, scene]);

  return (
    <div className="relative w-full h-full min-h-[340px] sm:min-h-[420px] md:min-h-[480px] bg-slate-950 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

/* =========================================================================
   1. CIRCUIT ANIMATION: Flowing electrons, Battery, Resistor, Glowing Bulb
   ========================================================================= */
function renderCircuitAnimation(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const padX = Math.max(40, w * 0.12);
  const padY = Math.max(40, h * 0.14);
  const left = padX;
  const right = w - padX;
  const top = padY;
  const bottom = h - padY;
  const midX = (left + right) / 2;
  const midY = (top + bottom) / 2;

  // Circuit wires (rounded rectangle path)
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 4;
  ctx.shadowColor = '#0284c7';
  ctx.shadowBlur = 10;
  ctx.beginPath();
  ctx.roundRect(left, top, right - left, bottom - top, 24);
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Draw Battery on Top wire
  const batW = 80;
  ctx.fillStyle = '#090d16';
  ctx.fillRect(midX - batW / 2, top - 12, batW, 24);

  // Battery Plates
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 4;
  // Long plate (+)
  ctx.beginPath();
  ctx.moveTo(midX - 10, top - 20);
  ctx.lineTo(midX - 10, top + 20);
  ctx.stroke();
  // Short thick plate (-)
  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(midX + 10, top - 12);
  ctx.lineTo(midX + 10, top + 12);
  ctx.stroke();

  ctx.fillStyle = '#f59e0b';
  ctx.font = 'bold 12px sans-serif';
  ctx.fillText('+ V = 12V', midX - 35, top - 26);
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('-', midX + 22, top - 16);

  // Draw Resistor on Right wire
  const resH = 70;
  ctx.fillStyle = '#090d16';
  ctx.fillRect(right - 14, midY - resH / 2, 28, resH);

  // Zigzag resistor
  ctx.strokeStyle = '#ec4899';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(right, midY - resH / 2);
  const steps = 6;
  const stepH = resH / steps;
  for (let i = 0; i < steps; i++) {
    const xOff = (i % 2 === 0 ? 1 : -1) * 12;
    ctx.lineTo(right + xOff, midY - resH / 2 + (i + 0.5) * stepH);
  }
  ctx.lineTo(right, midY + resH / 2);
  ctx.stroke();

  ctx.fillStyle = '#f472b6';
  ctx.font = 'bold 12px sans-serif';
  ctx.fillText('R = 4 Ω', right + 18, midY + 4);

  // Draw Light Bulb on Bottom wire
  ctx.fillStyle = '#090d16';
  ctx.fillRect(midX - 30, bottom - 15, 60, 30);

  // Bulb glow
  const bulbGlow = 16 + Math.sin(t * 5) * 6;
  ctx.shadowColor = '#eab308';
  ctx.shadowBlur = bulbGlow * 2;
  ctx.fillStyle = '#fef08a';
  ctx.beginPath();
  ctx.arc(midX, bottom, 16, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;

  // Filament
  ctx.strokeStyle = '#ca8a04';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(midX - 6, bottom + 8);
  ctx.lineTo(midX - 2, bottom - 6);
  ctx.lineTo(midX + 2, bottom - 6);
  ctx.lineTo(midX + 6, bottom + 8);
  ctx.stroke();

  ctx.fillStyle = '#fef08a';
  ctx.font = 'bold 12px sans-serif';
  ctx.fillText('💡 Bulb Glowing (P = I²R)', midX - 65, bottom + 34);

  // Draw Ammeter on Left wire
  ctx.fillStyle = '#090d16';
  ctx.fillRect(left - 24, midY - 24, 48, 48);

  ctx.strokeStyle = '#10b981';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(left, midY, 20, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = '#10b981';
  ctx.font = 'bold 14px monospace';
  ctx.fillText('A', left - 5, midY + 5);

  ctx.font = 'bold 11px sans-serif';
  ctx.fillText('I = 3.0 A', left - 60, midY + 4);

  // Flowing Electrons: animated dots along perimeter
  const perim = 2 * (right - left + bottom - top);
  const numElectrons = 20;
  ctx.fillStyle = '#38bdf8';
  ctx.shadowColor = '#38bdf8';
  ctx.shadowBlur = 8;

  for (let i = 0; i < numElectrons; i++) {
    const frac = ((t * 80 + (i * perim) / numElectrons) % perim + perim) % perim;
    let ex = left;
    let ey = top;

    const wLen = right - left;
    const hLen = bottom - top;

    if (frac < wLen) {
      ex = left + frac;
      ey = top;
    } else if (frac < wLen + hLen) {
      ex = right;
      ey = top + (frac - wLen);
    } else if (frac < 2 * wLen + hLen) {
      ex = right - (frac - (wLen + hLen));
      ey = bottom;
    } else {
      ex = left;
      ey = bottom - (frac - (2 * wLen + hLen));
    }

    ctx.beginPath();
    ctx.arc(ex, ey, 4.5, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.shadowBlur = 0;

  // Header Title in Canvas
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.font = 'bold 16px sans-serif';
  ctx.fillText('⚡ Ohm’s Law Live Circuit (V = I × R)', 24, 30);
  ctx.font = '12px monospace';
  ctx.fillStyle = '#38bdf8';
  ctx.fillText('Current I = V / R = 12V / 4Ω = 3.0 Amperes', 24, 50);
}

/* =========================================================================
   2. RAY OPTICS: Convex Lens, Optical Center, Incident & Refracted Rays
   ========================================================================= */
function renderRayOpticsAnimation(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const midX = w / 2;
  const midY = h / 2;
  const f = Math.min(100, w * 0.18); // Focal length

  // Principal axis line
  ctx.strokeStyle = '#64748b';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([6, 6]);
  ctx.beginPath();
  ctx.moveTo(20, midY);
  ctx.lineTo(w - 20, midY);
  ctx.stroke();
  ctx.setLineDash([]);

  // Axis Markings: 2F1, F1, O, F2, 2F2
  const points = [
    { x: midX - 2 * f, label: '2F₁' },
    { x: midX - f, label: 'F₁' },
    { x: midX, label: 'O' },
    { x: midX + f, label: 'F₂' },
    { x: midX + 2 * f, label: '2F₂' },
  ];

  ctx.fillStyle = '#94a3b8';
  ctx.font = 'bold 11px sans-serif';
  points.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, midY, 3.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillText(p.label, p.x - 8, midY + 18);
  });

  // Convex Lens (Double convex arc)
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 3;
  ctx.fillStyle = 'rgba(56, 189, 248, 0.15)';
  ctx.beginPath();
  ctx.ellipse(midX, midY, 18, h * 0.35, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Object Arrow (Placed beyond 2F1 or oscillating)
  const objDist = 2 * f + 40 + Math.sin(t) * 20;
  const objX = midX - objDist;
  const objH = 65;

  // Draw Object Arrow
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(objX, midY);
  ctx.lineTo(objX, midY - objH);
  ctx.stroke();

  // Arrowhead
  ctx.fillStyle = '#f59e0b';
  ctx.beginPath();
  ctx.moveTo(objX - 6, midY - objH + 10);
  ctx.lineTo(objX, midY - objH);
  ctx.lineTo(objX + 6, midY - objH + 10);
  ctx.fill();

  ctx.font = 'bold 12px sans-serif';
  ctx.fillText('Object (AB)', objX - 25, midY - objH - 8);

  // Compute Image position: 1/v - 1/u = 1/f => 1/v = 1/f + 1/u => v = (f * u) / (u + f)
  const u = -objDist;
  const v = (f * u) / (u + f);
  const m = v / u;
  const imgH = objH * m; // Negative for inverted
  const imgX = midX + v;

  // Ray 1: Parallel to principal axis -> Refracts through F2
  ctx.strokeStyle = '#e11d48';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(objX, midY - objH);
  ctx.lineTo(midX, midY - objH);
  ctx.lineTo(imgX, midY - imgH);
  ctx.stroke();

  // Ray 2: Directly through Optical Center O (undeviated)
  ctx.strokeStyle = '#10b981';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(objX, midY - objH);
  ctx.lineTo(imgX, midY - imgH);
  ctx.stroke();

  // Animated light pulse on Ray 1
  const pulseFrac = (t * 2) % 1;
  const pulseX = objX + (midX - objX) * pulseFrac;
  ctx.fillStyle = '#fb7185';
  ctx.shadowColor = '#fb7185';
  ctx.shadowBlur = 10;
  ctx.beginPath();
  ctx.arc(pulseX, midY - objH, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;

  // Draw Inverted Image Arrow
  ctx.strokeStyle = '#a855f7';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(imgX, midY);
  ctx.lineTo(imgX, midY - imgH);
  ctx.stroke();

  // Image Arrowhead
  ctx.fillStyle = '#a855f7';
  ctx.beginPath();
  ctx.moveTo(imgX - 6, midY - imgH - 10);
  ctx.lineTo(imgX, midY - imgH);
  ctx.lineTo(imgX + 6, midY - imgH - 10);
  ctx.fill();

  ctx.font = 'bold 12px sans-serif';
  ctx.fillText('Real & Inverted Image (A\'B\')', imgX - 20, midY - imgH + 20);

  // Banner Info
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.font = 'bold 15px sans-serif';
  ctx.fillText('🔍 Convex Lens Ray Optics Simulation', 24, 30);
  ctx.font = '12px monospace';
  ctx.fillStyle = '#38bdf8';
  ctx.fillText('1/f = 1/v - 1/u   |   Magnification m = v/u = -' + Math.abs(m).toFixed(2), 24, 50);
}

/* =========================================================================
   3. CHEMICAL REACTION: Bubbling Beaker, Color Shift, Gas Particles
   ========================================================================= */
function renderChemicalReactionAnimation(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const midX = w / 2;
  const flaskBottom = h * 0.78;
  const flaskTop = h * 0.32;
  const neckW = 50;
  const baseW = Math.min(220, w * 0.45);

  // Draw Erlenmeyer Flask Outline
  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 4;
  ctx.beginPath();
  // Lip
  ctx.moveTo(midX - neckW / 2 - 8, flaskTop - 8);
  ctx.lineTo(midX + neckW / 2 + 8, flaskTop - 8);
  // Neck
  ctx.moveTo(midX - neckW / 2, flaskTop);
  ctx.lineTo(midX - neckW / 2, flaskTop + 45);
  ctx.lineTo(midX - baseW / 2, flaskBottom);
  ctx.lineTo(midX + baseW / 2, flaskBottom);
  ctx.lineTo(midX + neckW / 2, flaskTop + 45);
  ctx.lineTo(midX + neckW / 2, flaskTop);
  ctx.stroke();

  // Liquid Inside Flask (Dynamic chemical color shift)
  const liquidLevel = flaskBottom - 95;
  const liquidGrad = ctx.createLinearGradient(midX, liquidLevel, midX, flaskBottom);
  const colorCycle = Math.sin(t * 1.5);
  if (colorCycle > 0) {
    liquidGrad.addColorStop(0, 'rgba(245, 158, 11, 0.4)'); // Yellow PbI2 precipitate
    liquidGrad.addColorStop(1, 'rgba(217, 119, 6, 0.7)');
  } else {
    liquidGrad.addColorStop(0, 'rgba(14, 165, 233, 0.35)'); // Blue solution
    liquidGrad.addColorStop(1, 'rgba(3, 105, 161, 0.65)');
  }

  ctx.fillStyle = liquidGrad;
  ctx.beginPath();
  ctx.moveTo(midX - baseW * 0.35, liquidLevel);
  ctx.lineTo(midX - baseW / 2 + 4, flaskBottom - 4);
  ctx.lineTo(midX + baseW / 2 - 4, flaskBottom - 4);
  ctx.lineTo(midX + baseW * 0.35, liquidLevel);
  ctx.closePath();
  ctx.fill();

  // Liquid Surface wave
  ctx.strokeStyle = '#fef08a';
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let x = midX - baseW * 0.35; x <= midX + baseW * 0.35; x += 5) {
    const y = liquidLevel + Math.sin(x * 0.05 + t * 4) * 3;
    if (x === midX - baseW * 0.35) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // Bubbles Rising Upwards (H2 gas effervescence)
  const numBubbles = 16;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
  for (let i = 0; i < numBubbles; i++) {
    const bx = midX + Math.sin(i * 137 + t * 2) * (baseW * 0.3);
    const progress = ((t * 40 + i * 25) % 110) / 110;
    const by = flaskBottom - 10 - progress * (flaskBottom - flaskTop);
    const bRad = 2.5 + (i % 4) * 1.5;

    ctx.beginPath();
    ctx.arc(bx, by, bRad, 0, Math.PI * 2);
    ctx.fill();
  }

  // Steam / Vapor rising out of flask neck
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
  ctx.lineWidth = 3;
  for (let s = -1; s <= 1; s++) {
    ctx.beginPath();
    const sx = midX + s * 14;
    ctx.moveTo(sx, flaskTop - 10);
    ctx.bezierCurveTo(
      sx + Math.sin(t * 3 + s) * 12,
      flaskTop - 35,
      sx - Math.cos(t * 3 + s) * 12,
      flaskTop - 65,
      sx + Math.sin(t * 2) * 16,
      flaskTop - 95
    );
    ctx.stroke();
  }

  // Precipitate crystals settling at base
  ctx.fillStyle = '#fde047';
  for (let c = 0; c < 24; c++) {
    const cx = midX - baseW * 0.38 + c * (baseW * 0.76) / 24;
    const cy = flaskBottom - 6 - (c % 3) * 3;
    ctx.beginPath();
    ctx.arc(cx, cy, 3, 0, Math.PI * 2);
    ctx.fill();
  }

  // Header & Equation
  ctx.fillStyle = 'rgba(255,255,255,0.95)';
  ctx.font = 'bold 16px sans-serif';
  ctx.fillText('🧪 Precipitation & Effervescence Reaction', 24, 30);
  ctx.font = '12px monospace';
  ctx.fillStyle = '#facc15';
  ctx.fillText('Pb(NO₃)₂(aq) + 2KI(aq) ➔ PbI₂(s)↓ (Bright Yellow) + 2KNO₃(aq)', 24, 52);
  ctx.fillStyle = '#38bdf8';
  ctx.fillText('Zn(s) + 2HCl(aq) ➔ ZnCl₂(aq) + H₂(g)↑ (Effervescence)', 24, 70);
}

/* =========================================================================
   4. MATH PARABOLA: Cartesian Axes, Real-time quadratic curve, Roots, Vertex
   ========================================================================= */
function renderParabolaAnimation(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const midX = w / 2;
  const midY = h * 0.58;

  // Cartesian Axes
  ctx.strokeStyle = '#475569';
  ctx.lineWidth = 2;
  // X Axis
  ctx.beginPath();
  ctx.moveTo(30, midY);
  ctx.lineTo(w - 30, midY);
  ctx.stroke();
  // Y Axis
  ctx.beginPath();
  ctx.moveTo(midX, 20);
  ctx.lineTo(midX, h - 20);
  ctx.stroke();

  ctx.fillStyle = '#94a3b8';
  ctx.font = 'bold 12px sans-serif';
  ctx.fillText('X', w - 24, midY - 6);
  ctx.fillText('Y', midX + 8, 28);
  ctx.fillText('O (0,0)', midX + 6, midY + 16);

  // Parabola Parameters: y = a(x - h)^2 + k
  const a = 0.008;
  const rootDist = 90 + Math.sin(t * 1.5) * 20; // Distance between roots
  const vertexY = midY + a * rootDist * rootDist; // Vertex sits below X-axis

  // Draw Smooth Parabola
  ctx.strokeStyle = '#a855f7';
  ctx.lineWidth = 4;
  ctx.shadowColor = '#c084fc';
  ctx.shadowBlur = 8;
  ctx.beginPath();

  const rangeX = Math.min(220, w * 0.4);
  for (let xOff = -rangeX; xOff <= rangeX; xOff += 2) {
    const yVal = vertexY - a * (xOff * xOff - rootDist * rootDist);
    const px = midX + xOff;
    const py = yVal;
    if (xOff === -rangeX) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Highlight Roots (Where curve cuts X-axis)
  const root1X = midX - rootDist;
  const root2X = midX + rootDist;

  // Root 1 (Alpha)
  ctx.fillStyle = '#22c55e';
  ctx.beginPath();
  ctx.arc(root1X, midY, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillText('Root α', root1X - 20, midY - 12);

  // Root 2 (Beta)
  ctx.beginPath();
  ctx.arc(root2X, midY, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillText('Root β', root2X - 6, midY - 12);

  // Vertex Point
  ctx.fillStyle = '#ec4899';
  ctx.beginPath();
  ctx.arc(midX, vertexY - a * (0 - rootDist * rootDist), 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillText('Vertex (h, k)', midX + 10, vertexY - a * (0 - rootDist * rootDist) + 6);

  // Axis of symmetry dashed line
  ctx.strokeStyle = '#f43f5e';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(midX, 40);
  ctx.lineTo(midX, h - 30);
  ctx.stroke();
  ctx.setLineDash([]);

  // Title Info
  ctx.fillStyle = 'rgba(255,255,255,0.95)';
  ctx.font = 'bold 16px sans-serif';
  ctx.fillText('📈 Quadratic Parabola & Discriminant Dynamics', 24, 30);
  ctx.font = '12px monospace';
  ctx.fillStyle = '#22c55e';
  ctx.fillText('D = b² - 4ac > 0  ➔  Two Distinct Real Roots (α, β)', 24, 52);
  ctx.fillStyle = '#c084fc';
  ctx.fillText('Roots: x = [-b ± √D] / 2a   |   Sum: α + β = -b/a', 24, 70);
}

/* =========================================================================
   5. BIOLOGY CELL: Photosynthesis, Solar Photons, Chloroplast & Stomata
   ========================================================================= */
function renderBiologyCellAnimation(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const midX = w / 2;
  const midY = h * 0.55;

  // Chloroplast organelle (large bean-shaped membrane)
  ctx.strokeStyle = '#10b981';
  ctx.lineWidth = 4;
  ctx.fillStyle = 'rgba(6, 78, 59, 0.4)';
  ctx.beginPath();
  ctx.ellipse(midX, midY, Math.min(220, w * 0.38), Math.min(130, h * 0.32), 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Thylakoid Stacks (Grana discs)
  const granaPositions = [-100, -30, 40, 110];
  ctx.fillStyle = '#059669';
  granaPositions.forEach((gX) => {
    for (let layer = -2; layer <= 2; layer++) {
      ctx.beginPath();
      ctx.ellipse(midX + gX, midY + layer * 16, 28, 7, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  // Solar Light Photons streaming from top left
  const sunX = 70;
  const sunY = 70;
  ctx.fillStyle = '#f59e0b';
  ctx.shadowColor = '#f59e0b';
  ctx.shadowBlur = 15;
  ctx.beginPath();
  ctx.arc(sunX, sunY, 24, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;

  // Photon Beams
  ctx.strokeStyle = 'rgba(251, 191, 36, 0.5)';
  ctx.lineWidth = 2.5;
  for (let r = 0; r < 5; r++) {
    const angle = 0.4 + r * 0.18;
    ctx.beginPath();
    ctx.moveTo(sunX, sunY);
    ctx.lineTo(sunX + Math.cos(angle) * (w * 0.5), sunY + Math.sin(angle) * (h * 0.5));
    ctx.stroke();
  }

  // Floating Molecules: CO2 (Red), H2O (Blue), O2 (Green)
  const numMolecules = 10;
  for (let i = 0; i < numMolecules; i++) {
    const mx = midX + Math.sin(i * 45 + t * 2) * (w * 0.28);
    const my = midY + Math.cos(i * 33 + t * 2) * (h * 0.2);

    ctx.fillStyle = i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#f87171' : '#4ade80';
    ctx.beginPath();
    ctx.arc(mx, my, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Stomata Opening animation at the bottom
  const stomaOpen = 8 + Math.sin(t * 3) * 6;
  ctx.fillStyle = '#064e3b';
  ctx.beginPath();
  ctx.ellipse(midX, h - 35, 30, stomaOpen, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#34d399';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#6ee7b7';
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText('Stomatal Pore Breathing (CO₂ in, O₂ out)', midX - 95, h - 14);

  // Title Info
  ctx.fillStyle = 'rgba(255,255,255,0.95)';
  ctx.font = 'bold 16px sans-serif';
  ctx.fillText('🍃 Chloroplast & Photosynthesis Machinery', 24, 30);
  ctx.font = '12px monospace';
  ctx.fillStyle = '#34d399';
  ctx.fillText('6CO₂ + 12H₂O + Sunlight ➔ C₆H₁₂O₆ + 6O₂↑ + 6H₂O', 24, 52);
  ctx.fillStyle = '#fde047';
  ctx.fillText('Chlorophyll in Thylakoid Stacks Absorbs Red & Blue Light', 24, 70);
}

/* =========================================================================
   6. ATOM BOHR: Concentric K, L, M Shells & Revolving Electrons
   ========================================================================= */
function renderAtomBohrAnimation(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const midX = w / 2;
  const midY = h / 2;

  // Central Nucleus with glowing protons and neutrons
  ctx.fillStyle = '#ef4444';
  ctx.shadowColor = '#f87171';
  ctx.shadowBlur = 18;
  ctx.beginPath();
  ctx.arc(midX, midY, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText('+Ze', midX - 9, midY + 4);

  // Concentric Shells: K (n=1), L (n=2), M (n=3)
  const shells = [
    { radius: 55, label: 'K (n=1, max 2e⁻)', count: 2, speed: 1.8 },
    { radius: 105, label: 'L (n=2, max 8e⁻)', count: 6, speed: 1.2 },
    { radius: 155, label: 'M (n=3, max 18e⁻)', count: 4, speed: 0.8 },
  ];

  shells.forEach((sh, shIdx) => {
    // Shell circle
    ctx.strokeStyle = shIdx === 1 ? '#a855f7' : '#38bdf8';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(midX, midY, sh.radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Shell Label
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px monospace';
    ctx.fillText(sh.label, midX + sh.radius + 6, midY);

    // Orbiting Electrons
    ctx.fillStyle = '#38bdf8';
    ctx.shadowColor = '#38bdf8';
    ctx.shadowBlur = 8;
    for (let e = 0; e < sh.count; e++) {
      const angle = t * sh.speed + (e * 2 * Math.PI) / sh.count;
      const ex = midX + Math.cos(angle) * sh.radius;
      const ey = midY + Math.sin(angle) * sh.radius;

      ctx.beginPath();
      ctx.arc(ex, ey, 4.5, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.shadowBlur = 0;
  });

  // Quantum Leap Animation: occasional photon emitted
  const jumpTime = (t * 0.8) % 4;
  if (jumpTime > 2.8) {
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    // Photon wave packet traveling outwards
    const waveDist = 80 + (jumpTime - 2.8) * 140;
    for (let wOff = 0; wOff < 30; wOff += 2) {
      const wx = midX + waveDist + wOff;
      const wy = midY - 60 + Math.sin(wOff * 0.4) * 8;
      if (wOff === 0) ctx.moveTo(wx, wy);
      else ctx.lineTo(wx, wy);
    }
    ctx.stroke();

    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText('Photon hv (ΔE = E₂ - E₁)', midX + waveDist, midY - 75);
  }

  // Title Info
  ctx.fillStyle = 'rgba(255,255,255,0.95)';
  ctx.font = 'bold 16px sans-serif';
  ctx.fillText('🪐 Bohr’s Atomic Shells & Discrete Orbits', 24, 30);
  ctx.font = '12px monospace';
  ctx.fillStyle = '#38bdf8';
  ctx.fillText('Max Electrons in shell = 2n²  |  K=2, L=8, M=18, N=32', 24, 52);
  ctx.fillStyle = '#a855f7';
  ctx.fillText('Stable Non-Radiating Energy Levels', 24, 70);
}

/* =========================================================================
   7. WHITEBOARD: Dynamic chalkboard with animated writing & formula matrix
   ========================================================================= */
function renderWhiteboardAnimation(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  t: number,
  scene: VideoScene
) {
  // Slate chalkboard frame
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(20, 20, w - 40, h - 40);
  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 3;
  ctx.strokeRect(20, 20, w - 40, h - 40);

  // Blackboard title
  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 20px sans-serif';
  ctx.fillText('📝 ' + (scene.visualElements?.headline || scene.title), 44, 60);

  // Subtitle
  ctx.fillStyle = '#cbd5e1';
  ctx.font = '13px sans-serif';
  ctx.fillText(scene.visualElements?.subtext || 'Concept Breakdown & Board Masterclass', 44, 86);

  // Formula box in center
  const boxY = 115;
  const boxH = 80;
  ctx.fillStyle = 'rgba(30, 41, 59, 0.8)';
  ctx.fillRect(44, boxY, w - 88, boxH);
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 2;
  ctx.strokeRect(44, boxY, w - 88, boxH);

  ctx.fillStyle = '#fbbf24';
  ctx.font = 'bold 11px uppercase tracking-wider sans-serif';
  ctx.fillText('⚡ KEY FORMULA / CORE EQUATION', 58, boxY + 24);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 16px monospace';
  const eqText = scene.formulaOrEquation || 'Governing Law: Equation = Model';
  ctx.fillText(eqText, 58, boxY + 54);

  // Key Terms Pill Tags
  const termsY = boxY + boxH + 30;
  ctx.fillStyle = '#94a3b8';
  ctx.font = 'bold 12px sans-serif';
  ctx.fillText('Must-Mention Keywords:', 44, termsY);

  let curX = 44;
  (scene.keyTerms || ['Concept', 'Law', 'Units']).forEach((term, idx) => {
    const termW = ctx.measureText(term).width + 24;
    ctx.fillStyle = 'rgba(56, 189, 248, 0.15)';
    ctx.fillRect(curX, termsY + 10, termW, 26);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1;
    ctx.strokeRect(curX, termsY + 10, termW, 26);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText(term, curX + 12, termsY + 27);
    curX += termW + 12;
  });

  // Topper Tip Banner at bottom
  if (scene.topperTip) {
    const tipY = Math.min(h - 90, termsY + 65);
    ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
    ctx.fillRect(44, tipY, w - 88, 48);
    ctx.strokeStyle = '#10b981';
    ctx.strokeRect(44, tipY, w - 88, 48);

    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText('✦ TOPPER SECRET / EXAMINER TRAP:', 56, tipY + 18);
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '12px sans-serif';
    ctx.fillText(scene.topperTip, 56, tipY + 36);
  }
}
