export function normalizeRatios(numbers: number[]): number[] {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  if (sum === 0) {
    throw new Error('Сумма чисел равна нулю, невозможно нормализовать');
  }

  const ratios = numbers.map((num) => num / sum);
  return ratios;
}
