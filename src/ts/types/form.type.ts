export type FieldRenderInput = {
  name: string;
  onChange: React.ChangeEvent;
  value: any;
  onFocus: (el: React.SyntheticEvent) => void;
  onBlur: (el: React.SyntheticEvent) => void;
};

export type FieldRenderMeta = {
  active: boolean;
  data: any;
  dirty: boolean;
  dirtySinceLastSubmit: boolean;
  touched: boolean;
  error: any;
  initial: any;
  invalid: boolean;
  modified: boolean;
  modifiedSinceLastSubmit: boolean;
  pristine: boolean;
  submitError: any;
  submitFailed: boolean;
  submitSucceeded: boolean;
  submitting: boolean;
  valid: boolean;
  validating: boolean;
  visited: boolean;
};

export type FieldRenderProps = {
  input: FieldRenderInput;
  meta: FieldRenderMeta;
};

export type InputProps = {
  name: string;
  validator?: any;
  initialValue?: string | number | undefined;
  hide?: boolean;
  label?: string;
  type?: string;
  numeric?: boolean;
  alphanumeric?: boolean;
  placeholder?: string;
  disabled?: boolean;
  currency?: boolean;
  maxLength?: number;
  focus?: (el: React.SyntheticEvent) => void;
  blur?: (el: React.SyntheticEvent) => void;
  onChange?: (e?: React.ChangeEvent) => void;
  onKeyPress?: (e?: React.KeyboardEvent) => void;
};
