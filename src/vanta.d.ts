
// Type definitions for VANTA.js
interface VantaBirdsOptions {
  el: HTMLElement;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  scale?: number;
  scaleMobile?: number;
  backgroundColor?: number;
  color1?: number;
  color2?: number;
  birdSize?: number;
  wingSpan?: number;
  speedLimit?: number;
  separation?: number;
}

interface VantaBirds {
  (options: VantaBirdsOptions): any;
  destroy(): void;
}

interface VantaEffects {
  BIRDS: VantaBirds;
}

declare global {
  interface Window {
    VANTA: VantaEffects;
  }
}

export {};
