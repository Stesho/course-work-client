import React, { useEffect, useState } from 'react';
import Modal from '@/components/ui/modal/Modal';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { CurrencyRated } from '@/constants/interfaces/currency';
import DropDown from '@/components/ui/dropdown/DropDown';
import CurrencyCodeCard from '@/components/ui/currencyCodeCard/CurrencyCodeCard';
import styles from './currencyModal.module.scss';

interface CurrencyModalProps {
  id?: string;
  currency: CurrencyRated;
  onClose: () => void;
}

function CurrencyModal({
  currency,
  onClose,
  id = 'currencyCodeCard-modal',
}: CurrencyModalProps) {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyRated>(
    null!,
  );
  const [rate, setRate] = useState(currency.rate);
  const [quantity, setQuantity] = useState(1);
  const currencyState = useSelector((state: RootState) => state.currency);

  useEffect(() => {
    if (selectedCurrency) {
      const newRate = currency.rate / selectedCurrency.rate;
      setRate(newRate);
    }
  }, [selectedCurrency]);

  return (
    <Modal id={id} onClose={onClose}>
      <div className={styles.currencyModal}>
        <button className={styles.closeButton} onClick={onClose} type='button'>
          ✖
        </button>
        <div className={styles.content}>
          <CurrencyCodeCard
            id={currency.id}
            iconUrl={currency.iconUrl}
            currencyName={currency.currencyName}
          />
          <input
            value={quantity}
            type='number'
            min={1}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <span>{currency.id}</span>
          <span> = </span>
          <span>{quantity * rate}</span>
          <span> {selectedCurrency?.id || 'USD'}</span>
          <DropDown
            options={currencyState.currencies}
            onSelectOption={setSelectedCurrency}
          />
        </div>
      </div>
    </Modal>
  );
}

export default CurrencyModal;
