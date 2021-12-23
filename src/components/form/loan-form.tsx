import React from 'react';

import Button from '@/components/button/button';
import BaseForm from '@/components/form/form';
import Input from '@/components/input/input';
import Select from '@/components/input/select';
import { minValue, mustBeNumber, required } from '@/shared/utils/validations';

const LoanForm = () => {
  // const logAmount = (value?: React.ChangeEvent) => console.log('tutar:', value);
  /* const logMaturity = (value?: React.ChangeEvent) =>
    console.log('vade:', value); */
  const click = (e: React.MouseEvent) => {
    e.preventDefault();
    // console.log('button clicked');
  };

  const formOptions = [
    {
      text: '12',
      value: '12',
    },
    {
      text: '24',
      value: '24',
    },
    {
      text: '36',
      value: '36',
    },
  ];

  return (
    <BaseForm>
      <Input
        currency
        name="amount"
        label="Kredi Tutarı"
        validator={[required, mustBeNumber, minValue]}
      />
      <Select
        label="Kredi vadesi"
        name="maturity"
        placeholder="Seçiniz"
        options={formOptions}
        validator={[required]}
      />
      <Button onClick={click} type="submit">
        <span>Hesapla</span>
      </Button>
    </BaseForm>
  );
};

export default LoanForm;
