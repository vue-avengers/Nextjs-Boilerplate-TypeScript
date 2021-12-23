/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from 'react';

import classNames from 'classnames';
import { Field } from 'react-final-form';

import { composeValidators } from '../../shared/utils/validations';
import Currency from './currency-input';
import { FieldRenderProps, InputProps } from '@/ts/types/form.type';

// import ErrorIcon from '../../../../svg/error.svg';

const Input: React.FC<InputProps> = ({
  name,
  validator,
  initialValue,
  hide,
  label,
  type,
  numeric,
  alphanumeric,
  placeholder,
  disabled,
  currency,
  maxLength,
  focus,
  blur,
  onChange,
  onKeyPress,
}) => {
  const [error, setError] = useState(false);
  const validations = validator || [];
  const validators = () => composeValidators(...validations);

  const change = (el: React.ChangeEvent) => {
    const num = /^[0-9]*$/;
    const alphanum = /^[a-zA-ZğüşıöçĞÜŞİÖÇ ]*$/g;

    if (numeric) {
      if (num.test((el.target as HTMLInputElement).value)) {
        onChange && onChange();
      }
    } else if (alphanumeric) {
      if (alphanum.test((el.target as HTMLInputElement).value)) {
        onChange && onChange(el);
      }
    } else {
      onChange && onChange(el);
    }
  };

  const keyPress = (e: React.KeyboardEvent) => {
    e.key === 'Enter' && e.preventDefault();
    onKeyPress && onKeyPress();
  };

  return (
    <>
      {hide ? null : (
        <Field name={name} validate={validators()}>
          {({ input, meta }: FieldRenderProps) => {
            return (
              <div
                className={classNames('input-wrapper', 'form-field', {
                  error,
                  hidden: type === 'hidden',
                  active: meta.active || meta.dirty || input.value,
                  currency,
                })}
              >
                {label && (
                  <label className="input-label" htmlFor={name}>
                    {label}
                  </label>
                )}
                {type === 'textarea' && (
                  <textarea
                    id={name}
                    placeholder={placeholder}
                    value={initialValue}
                    maxLength={maxLength}
                    disabled={disabled}
                    onChange={el => change(el)}
                    onKeyPress={el => keyPress(el)}
                  />
                )}
                {currency && (
                  <Currency
                    id={name}
                    placeholder={placeholder}
                    onValueChange={(el: React.ChangeEvent) => {
                      change(el);
                      setError(meta.error && !input.value && !disabled);
                    }}
                    onKeyPress={(el: React.KeyboardEvent) => keyPress(el)}
                    onFocus={(el: React.FocusEvent) => {
                      input.onFocus(el);
                      focus && focus(el);
                    }}
                    onBlur={(el: React.FocusEvent) => {
                      input.onBlur(el);
                      blur && blur(el);
                      setError(meta.error && meta.touched && !disabled);
                    }}
                  />
                )}
                {type !== 'textarea' && !currency && (
                  <input
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    value={initialValue}
                    maxLength={maxLength}
                    disabled={disabled}
                    onChange={el => {
                      change(el);
                      setError(meta.error && !input.value && !disabled);
                    }}
                    onKeyPress={el => keyPress(el)}
                    onFocus={el => {
                      input.onFocus(el);
                      focus && focus(el);
                      setError(meta.error && meta.touched && !disabled);
                    }}
                    onBlur={el => {
                      input.onBlur(el);
                      blur && blur(el);
                      setError(meta.error && meta.touched && !disabled);
                    }}
                  />
                )}
                {currency && <span className="currency">₺</span>}
                {/* {meta.error && meta.touched && !disabled && (
                  <span className={s.icon_wrapper}>
                    <ErrorIcon height={16} />
                  </span>
                )} */}
                {error && <span className="error_message">{meta.error}</span>}
              </div>
            );
          }}
        </Field>
      )}
    </>
  );
};

export default Input;
