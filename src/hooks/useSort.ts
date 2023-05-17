import {  useState } from "react";


export const useSort = <T>(key: keyof T) => {
  const [isReverse, setIsReverse] = useState<boolean>(false);

  const sort = (data: T[]): T[] => {
    const newCardsData = [...data];

    const sortingCb = isReverse
      ? (a: T, b: T) => Number(a[key]) - Number(b[key])
      : (a: T, b: T) => Number(b[key]) - Number(a[key]);

    newCardsData.sort(sortingCb);
    return newCardsData;
  };

  return {sort, isReverse, setIsReverse};
};
