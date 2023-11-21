import React from 'react';

import { ChartForm } from '@/components/ui/chartForm/ChartForm';
import { Modal } from '@/components/ui/modal/Modal';
import { ChartData } from '@/types/chartData';

import styles from './ChartFormModal.module.scss';

interface ChartFormModalProps {
  onSubmitForm: (chartData: ChartData) => void;
  onClose: () => void;
  initialChartData?: ChartData;
}

export const ChartFormModal = ({
  onSubmitForm,
  onClose,
  initialChartData,
}: ChartFormModalProps) => (
  <Modal id='chartForm-modal' onClose={onClose}>
    <div data-cy='chartFormModal' className={`${styles.content} scrollBar`}>
      <ChartForm onSubmit={onSubmitForm} initialChartData={initialChartData} />
    </div>
  </Modal>
);