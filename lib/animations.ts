export function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function generateParticles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: seededRandom(i * 2) * 100,
    y: seededRandom(i * 3) * 100,
    delay: seededRandom(i * 5) * 2,
    duration: 2 + seededRandom(i * 7) * 2,
    size: 4 + seededRandom(i * 11) * 8,
  }));
}

export function generateSplashParticles(count: number, centerX: number, centerY: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: centerX + (seededRandom(i * 13) - 0.5) * 120,
    y: centerY + (seededRandom(i * 17) - 0.5) * 80,
    delay: seededRandom(i * 19) * 1.5,
    duration: 1.5 + seededRandom(i * 23) * 1.5,
    size: 3 + seededRandom(i * 29) * 6,
    angle: seededRandom(i * 31) * 360,
    distance: 30 + seededRandom(i * 37) * 50,
  }));
}
