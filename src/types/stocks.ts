import { CurrencyRated } from '@/types/currency';

export interface Stock extends CurrencyRated {
  expectedRate: number;
  rates: number[];
  risk: number;
}
