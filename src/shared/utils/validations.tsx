const required = (value: string) => {
  console.log(value);

  return value && value.trim() !== '' ? undefined : 'Boş bırakılamaz';
};

const requiredSelect = (value: string) => {
  return value ? undefined : 'Boş bırakılamaz';
};

const mustBeNumber = (value: number) =>
  Number.isNaN(value) ? 'Sadece sayı girebilirsiniz' : undefined;

const minValue = (min: number) => (value: number) =>
  Number.isNaN(value) || value >= min
    ? undefined
    : `${min} sayısından büyük olmalı`;

const minCvv = (min: number) => (value: string) =>
  value.length >= min ? undefined : `Güvenlik kodu eksik veya hatalı.`;

const minExpire = (min: number) => (value: string) =>
  value.length >= min ? undefined : `Son kullanma tarihi eksik veya hatalı.`;

const maxLength = (length: number) => (value: string) =>
  value.length < length
    ? undefined
    : `En fazla ${length} karakter girebilirsiniz.`;

const nonEmoji = (value: string) =>
  /^[a-zA-Z0-9ığüşöçİĞÜŞÖÇâ\s:.\-,\\/()]+$/.test(value)
    ? undefined
    : 'Uygun karakterler giriniz';

const email = (value: string) =>
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
    value
  )
    ? undefined
    : 'Geçeri bir email adresi giriniz.';

const checkExpirationDate = (value: string) => {
  const cardDate = value.split('/');
  const today = new Date();
  const someday = new Date();
  const maxYear = today.getFullYear() + 10;
  someday.setFullYear(Number(`20${cardDate[1]}`), Number(cardDate[0]), 1);
  if (someday < today) {
    return 'Girdiğiniz son kullanma tarihi geçmiştir.';
  }
  if (Number(`20${cardDate[1]}`) > maxYear) {
    return 'Son kullanma tarihi hatalı.';
  }
  return undefined;
};

/* const isPhone = value => {
  try {
    const val = value.replace(/\D+/g, '').length >= 6 ? value : '+9053';
    const number = parsePhoneNumber(val, metadata);

    return number.isValid()
      ? undefined
      : 'Lütfen geçerli bir telefon numarası giriniz';
  } catch (e) {
    return 'Lütfen geçerli bir telefon numarası giriniz';
  }
}; */

const mod = (number: number, modNumber: number) => {
  const modResult = number % modNumber;
  return modResult < 0 ? modResult + modNumber : modResult;
};

const identity = (value: string) => {
  const no: any = value.split('');
  let i;
  let total1 = 0;
  let total2 = 0;
  let total3 = parseInt(no[0], 10);
  for (i = 0; i < 10; i += 1) {
    total1 += parseInt(no[i], 10);
  }

  for (i = 1; i < 9; i += 2) {
    total2 += parseInt(no[i], 10);
    total3 += parseInt(no[i + 1], 10);
  }
  return !(
    !/^[1-9][0-9]{10}$/.test(value) ||
    total1 % 10 !== no[10] ||
    mod(total3 * 7 - total2, 10) !== no[9]
  ) && Number(value) !== 11111111110
    ? undefined
    : 'Lütfen geçerli bir tc kimlik numarası giriniz.';
};

const creditcardno = (value: string) => {
  if (/[^0-9-\s]+/.test(value)) return false;

  // The Luhn Algorithm. It's so pretty.
  let nCheck = 0;
  let bEven = false;
  const cardNo = value.replace(/\D/g, '');

  for (let n = cardNo.length - 1; n >= 0; n -= 1) {
    const cDigit = cardNo.charAt(n);
    let nDigit = parseInt(cDigit, 10);

    if (bEven) {
      if (nDigit + nDigit * 2 > 9) nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }
  return nCheck % 10 === 0 && value.length >= 15
    ? undefined
    : 'Kart numaranız eksik veya hatalı.';
};

/* eslint-disable */
const composeValidators = (...validators: any) => (value: any) =>
  validators.reduce((error: any, validator: any) => error || validator(value), undefined);

export {
  required,
  mustBeNumber,
  minValue,
  requiredSelect,
  // isPhone,
  identity,
  creditcardno,
  minCvv,
  minExpire,
  checkExpirationDate,
  maxLength,
  nonEmoji,
  composeValidators,
  email,
};
