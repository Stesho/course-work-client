import { Stock } from '@/types/stocks';

export const stocks: Stock[] = [
  {
    id: 'SBER.ME',
    iconUrl: '',
    currencyName: 'Sberbank of Russia',
    rate: 0.15,
    expectedRate: 1,
    rates: [4, 3, -9, 10, 6],
    risk: 7,
  },
  {
    id: 'SIBN.ME',
    iconUrl: '',
    currencyName: 'Gazprom Neft',
    rate: 0.15,
    expectedRate: 5,
    rates: [1, 9, -9, 36, -4],
    risk: 11,
  },
  {
    id: 'AAPL',
    iconUrl: '',
    currencyName: 'Apple Inc.',
    rate: 0.15,
    expectedRate: 6,
    rates: [-29, -13, 9, 60, 61],
    risk: 30,
  },
  {
    id: 'EPAM',
    iconUrl: '',
    currencyName: 'EPAM Systems, Inc.',
    rate: 0.15,
    expectedRate: 0.5,
    rates: [-29, -13, 9, 60, 61],
    risk: 4,
  },
  {
    id: 'MSFT',
    iconUrl: '',
    currencyName: 'Microsoft Corporation',
    rate: 0.15,
    expectedRate: 0.5,
    rates: [-29, -13, 9, 60, 61],
    risk: 4,
  },
  {
    id: 'UBER',
    iconUrl: '',
    currencyName: 'Uber Technologies, Inc.',
    rate: 0.15,
    expectedRate: 0.5,
    rates: [-29, -13, 9, 60, 61],
    risk: 4,
  },
  {
    id: 'NFLX',
    iconUrl: '',
    currencyName: 'Netflix, Inc.',
    rate: 0.15,
    expectedRate: 0.5,
    rates: [-29, -13, 9, 60, 61],
    risk: 4,
  },
  {
    id: 'META',
    iconUrl: '',
    currencyName: 'Meta Platforms, Inc.',
    rate: 0.15,
    expectedRate: 0.5,
    rates: [-29, -13, 9, 60, 61],
    risk: 4,
  },
  {
    id: 'UBSFY',
    iconUrl: '',
    currencyName: 'Ubisoft Entertainment ADR',
    rate: 0.15,
    expectedRate: 0.5,
    rates: [-29, -13, 9, 60, 61],
    risk: 4,
  },
  {
    id: 'YNDX',
    iconUrl: '',
    currencyName: 'Yandex N.V.',
    rate: 0.15,
    expectedRate: 0.5,
    rates: [-29, -13, 9, 60, 61],
    risk: 4,
  },
];
