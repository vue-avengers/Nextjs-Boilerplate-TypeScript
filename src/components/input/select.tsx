/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';

import classNames from 'classnames';
import { Field } from 'react-final-form';

/* import ErrorIcon from '../../../../svg/error.svg';
import Arrow from '../../../../svg/downarrow.svg'; */
import { composeValidators, required } from '@/shared/utils/validations';

type SelectOptions = {
  value?: string;
  code?: string;
  text?: string;
  name?: string;
};

interface ISelectProps {
  validator?: any;
  defaultValidationMessage?: string;
  required?: boolean;
  hide?: boolean;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  options?: Array<SelectOptions>;
  ext?: string;
  focus?: (e?: React.SyntheticEvent) => void;
  blur?: (e?: React.SyntheticEvent) => void;
  onChange?: (e?: React.ChangeEvent) => void;
}

const Select = (props: ISelectProps) => {
  const validations = props.validator ? props.validator : '';
  const validators = () => composeValidators(required, ...validations);

  return (
    <>
      {props.hide ? null : (
        <Field name="hk-select" validate={validators()}>
          {({ input, meta }) => {
            const classes = classNames('select_wrapper form-field', {
              error: meta.error && meta.touched && !props.disabled,
              active: meta.active || meta.dirty || input.value,
              focused: meta.active,
            });

            const change = (el: React.ChangeEvent) => {
              input.onChange(el);
              props.onChange && props.onChange(el);
            };
            return (
              <div className={classes}>
                {props.label && (
                  <label htmlFor={props.name}>{props.label}</label>
                )}
                <select
                  id={props.name}
                  placeholder={props.placeholder}
                  disabled={props.disabled}
                  onChange={el => change(el)}
                  onFocus={el => {
                    input.onFocus(el);
                    props.focus && props.focus(el);
                  }}
                  onBlur={el => {
                    input.onBlur(el);
                    props.blur && props.blur(el);
                  }}
                >
                  <option value="">
                    {props.placeholder ? props.placeholder : 'Seçiniz'}
                  </option>
                  {props?.options?.map((x, key) => {
                    return (
                      <option key={key} value={x.value || x.code}>
                        {x.text || x.name} {props.ext && props.ext}
                      </option>
                    );
                  })}
                </select>
                {/* <span className={s.select_arrow}>
                  <Arrow height={7} />
                </span> */}
                {/* meta.error && meta.touched && !disabled && (
                  <span className={s.icon_wrapper}>
                    <ErrorIcon height={16} />
                  </span>
                ) */}
                {meta.error && meta.touched && !props.disabled && (
                  <span className="error_message">{meta.error}</span>
                )}
              </div>
            );
          }}
        </Field>
      )}
    </>
  );
};

export default Select;
