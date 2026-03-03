export function lerp(start: number, end: number, alpha: number): number {
  return start + (end - start) * alpha;
}

export function lerpColor(
  current: [number, number, number],
  target: [number, number, number],
  alpha: number,
): [number, number, number] {
  return [
    lerp(current[0], target[0], alpha),
    lerp(current[1], target[1], alpha),
    lerp(current[2], target[2], alpha),
  ];
}
