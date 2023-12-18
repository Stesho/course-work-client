import React, { useState } from 'react';
import { Chart } from 'react-google-charts';

import { stocks } from '@/__mocks__/stocks';
import { Button } from '@/components/ui/Button/Button';
import { SearchInput } from '@/components/ui/SearchInput/SearchInput';
import { CurrencyRated } from '@/types/currency';
import { Stock } from '@/types/stocks';
import { getCovarianceMatrix } from '@/utils/getConvarianceMatrix';
import { normalizeRatios } from '@/utils/normalizeRatios';
import { transposeMatrix } from '@/utils/transposeMatrix';

import styles from './Analysis.module.scss';

const options = {
  title: 'My Daily Activities',
  pieHole: 0.4,
  is3D: false,
  backgroundColor: 'none',
};

export const Analysis = () => {
  const [ratioMatrix, setRatioMatrix] = useState<number[]>([]);
  const [selectedStocks, setSelectedStocks] = useState<Stock[]>([
    stocks[0],
    stocks[1],
    stocks[2],
  ]);

  const addStock = (stock: CurrencyRated | null) => {
    if (stock) {
      setSelectedStocks([...selectedStocks, stock as Stock]);
    }
  };

  const optimize = () => {
    // const totalRisk = selectedStocks.reduce((prev, curr) => (
    //   prev + curr.risk
    // ), 0);
    // const totalReturn = selectedStocks.reduce((prev, curr) => (
    //   prev + curr.expectedRate
    // ), 0);
    const rates = selectedStocks.map((stock) => stock.rates);
    const transposedRates = transposeMatrix(rates);
    const matrix = getCovarianceMatrix(transposedRates).map((el) =>
      el.reduce((prev, curr) => prev + curr, 0),
    );
    setRatioMatrix(matrix);
    console.log(matrix);
    // const normalizedMatrix = normalizeRatios(matrix);
    // console.log(normalizedMatrix);
  };

  return (
    <section>
      <h2 className="accountPageTitle">Analysis</h2>
      <div className={styles.bar}>
        <SearchInput
          currencies={stocks}
          onSelectCurrency={addStock}
          setNotFound={() => {}}
        />
        <Button onClick={optimize}>Optimize</Button>
      </div>
      {selectedStocks.map((stock) => (
        <div key={stock.id}>
          <span className={styles.stockId}>{stock.id}</span>
          <span className={styles.stockName}>{stock.currencyName}</span>
        </div>
      ))}
      <div className={styles.total}>
        <div>total portfolio risk: </div>
        <div>total portfolio return: </div>
      </div>
      {ratioMatrix.length > 0 && (
        <div className={styles.chart}>
          <Chart
            chartType='PieChart'
            width='100%'
            height='400px'
            data={[
              ['Task', 'Hours per Day'],
              ['Work', 0.02605],
              ['Eat', 0.068025],
              ['Commute', 0.21137499999999998],
            ]}
            options={options}
          />
        </div>
      )}
    </section>
  );
};
