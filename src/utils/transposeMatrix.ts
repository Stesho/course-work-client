export function transposeMatrix(matrix: number[][]): number[][] {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Создаем новую матрицу с измененными размерами
  const transposedMatrix: number[][] = [];
  for (let i = 0; i < cols; i++) {
    transposedMatrix[i] = [];
    for (let j = 0; j < rows; j++) {
      transposedMatrix[i][j] = matrix[j][i];
    }
  }

  return transposedMatrix;
}
