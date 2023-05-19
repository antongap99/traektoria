import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useAsync = <T>(
  url: string
): [T[], Dispatch<SetStateAction<T[]>>] => {
  const [carsData, setCarsData] = useState<Array<T>>([]);
  useEffect(() => {
    try {
      fetch(url)
        .then((res) => {
          if (res.ok) return res.json();
          throw new Error(`error with status ${res.status}`);
        })
        .then((data) => {
          setCarsData(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [url]);
  return [carsData, setCarsData];
};
