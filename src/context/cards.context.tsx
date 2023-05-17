import { createContext } from "react";
import { useAsync } from "../hooks/useAsync";
import { url } from "../api/const";

export interface ICarData {
  color: string;
  id: number;
  latitude: number;
  longitude: number;
  model: string;
  name: string;
  price: number;
  year: number;
}

export interface iCardContext {
  cardsData: ICarData[];
  setData?: (data: ICarData[]) => void;
}

interface ProviderProps {
  children: JSX.Element;
}

export const CardContext = createContext<iCardContext>({
  cardsData: [],
});

export const CardContextProvider = ({
  children,
}: ProviderProps): JSX.Element => {
  const [cardsData, setCarsData] = useAsync<ICarData>(url);

  const setData = (data: ICarData[]) => {
    setCarsData(data);
  };

  return (
    <CardContext.Provider value={{ cardsData, setData }}>
      {children}
    </CardContext.Provider>
  );
};
