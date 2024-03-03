export const addCompNumber = () => {
  let number = "";
  const generationNumber = () => {
    return `${Math.floor(Math.random() * 9)}`;
  };
  for (let i = 0; number.length < 4; i++) {
    const n = generationNumber();
    if (!number.split("").includes(n)) {
      number += n;
    }
  }
  return number;
};

export const validation = (val: string, value: string) => {
  const item = val.split("")[val.length - 1];
  const regExp = /^\d+$/;
  if (val && !regExp.test(val)) {
    return false;
  }
  if (val.length > value.length && value.split("").includes(item)) {
    return false;
  }
  if (val.length > 4) return false;
  return true;
};

export const count = (num: string, checkNumber: string) => {
  const a = num.split("");
  const c = checkNumber.split("");
  let bulls = 0,
    cows = 0;
  for (let i = 0; i < a.length; i++) {
    if (c.includes(a[i])) {
      if (a[i] === c[i]) {
        bulls++;
      } else {
        cows++;
      }
    }
  }
  return ` - ${bulls} быков, ${cows} коров`;
};
