import React from 'react';

import CurrencyInput from 'react-currency-input-field';

interface ICurrencyInputProps {
  id?: string;
  defaultValue?: number;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  disabled?: boolean;
  maxLength?: number;
  onValueChange?: (e?: any) => void;
  onKeyPress?: (e?: any) => void;
  onFocus?: (e?: any) => void;
  onBlur?: (e?: any) => void;
}

const Currency: React.FC<ICurrencyInputProps> = props => (
  <CurrencyInput
    decimalSeparator=","
    groupSeparator="."
    allowNegativeValue={false}
    {...props}
  />
);

export default Currency;
