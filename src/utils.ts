'use strict';

export const shuffle = (array: Array<any>): Array<any> => {
  const resultArray: Array<any> = array.slice();
  for (let i:number = resultArray.length - 1; i > 0; i--) {
    const randomNumber: number = Math.floor(Math.random() * (i + 1));
    [resultArray[randomNumber], resultArray[i]] = [resultArray[i], resultArray[randomNumber]];
  }

  return resultArray;
};


export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomArray = (oldArray: Array<any>): Array<any> => {
  let newArray: Array<any> = [];

  oldArray.forEach((item:any) => {
    if (Math.round(Math.random())) {
      return newArray.push(item);
    }

    return null;
  });

  if (newArray.length === 0) {
    newArray = oldArray[getRandomInt(0, oldArray.length - 1)];
  }

  return newArray;
};
