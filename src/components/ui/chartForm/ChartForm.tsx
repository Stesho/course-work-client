import React, { useEffect, useState } from 'react';

import { ChartFormRow } from '@/components/ui/chartForm/chartFormRow/ChartFormRow';
import { NumberInput } from '@/components/ui/numberInput/NumberInput';
import { ChartData } from '@/constants/chart/chartData';
import { addDayColumnToChartData } from '@/utils/addDayColumnToChartData';
import { calculateInitialChartData } from '@/utils/calculateInitialChartData';
import { generateTableHead } from '@/utils/generateTableHead';
import { recalculateChartData } from '@/utils/recalculateChartData';

import styles from './ChartForm.module.scss';

interface ChartFormProps {
  onSubmit: (data: ChartData) => void;
}

export const ChartForm = ({ onSubmit }: ChartFormProps) => {
  const cellsCountInRow = 4;
  const tableHead = generateTableHead(cellsCountInRow + 1);

  const [rowsCount, setRowsCount] = useState(5);
  const [values, setValues] = useState<number[][]>(() =>
    calculateInitialChartData(rowsCount, cellsCountInRow),
  );

  const onChangeValue = (value: number, row: number, column: number) => {
    const newValues = [...values];
    newValues[row][column] = Number(value);
    setValues(newValues);
  };

  const onChangeRowsCount = (value: number) => {
    setRowsCount(value);
  };

  const onSubmitForm = () => {
    const chartData = addDayColumnToChartData(values, tableHead);
    onSubmit(chartData);
  };

  const setStaticValues = () => {
    setRowsCount(5);
    setValues([
      [20, 28, 38, 45],
      [31, 38, 55, 66],
      [50, 55, 77, 80],
      [77, 77, 66, 50],
      [68, 66, 22, 15],
    ]);
  };

  useEffect(() => {
    const newValues = recalculateChartData(values, rowsCount, cellsCountInRow);
    setValues(newValues);
  }, [rowsCount]);

  return (
    <div className={styles.chartForm}>
      <div>
        <span>Days count:</span>
        <NumberInput
          value={rowsCount}
          setValue={onChangeRowsCount}
          min={1}
          max={31}
          isIntegersOnly
        />
      </div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.row}>
            <td className={`${styles.cell} ${styles.dayCell}`}>day</td>
            <td className={styles.cell}>low</td>
            <td className={styles.cell}>opening</td>
            <td className={styles.cell}>closing</td>
            <td className={styles.cell}>high</td>
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => (
            <ChartFormRow
              key={index}
              day={index + 1}
              rowIndex={index}
              values={values[index]}
              onChangeValue={onChangeValue}
            />
          ))}
        </tbody>
      </table>
      <div className={styles.buttons}>
        <button className={styles.button} type='button' onClick={onSubmitForm}>
          Build chart
        </button>
        <button
          className={styles.button}
          type='button'
          onClick={setStaticValues}
        >
          Set static values
        </button>
      </div>
    </div>
  );
};
