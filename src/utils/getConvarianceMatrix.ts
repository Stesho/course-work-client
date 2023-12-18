export function getCovarianceMatrix(data: number[][]): number[][] {
  const numVariables: number = data[0].length;
  const numRows: number = data.length;

  // Convert percentages to decimal values (assuming values range from 0 to 100)
  const decimalData: number[][] = data.map((row) =>
    row.map((value) => value / 100),
  );

  // Initializing the matrix with zeros
  const covarianceMatrix: number[][] = Array.from(
    { length: numVariables },
    () => Array(numVariables).fill(0),
  );

  // Calculating covariances for each pair of variables
  for (let i = 0; i < numVariables; i++) {
    for (let j = i; j < numVariables; j++) {
      let sum = 0;
      for (let k = 0; k < numRows; k++) {
        sum +=
          (decimalData[k][i] - mean(decimalData.map((row) => row[i]))) *
          (decimalData[k][j] - mean(decimalData.map((row) => row[j])));
      }
      const covariance: number = sum / (numRows - 1);
      covarianceMatrix[i][j] = covariance;
      covarianceMatrix[j][i] = covariance; // Covariance matrix is symmetric
    }
  }

  return covarianceMatrix;
}

function mean(arr: number[]): number {
  return arr.reduce((acc, val) => acc + val, 0) / arr.length;
}
