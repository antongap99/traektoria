import { useContext } from "react";
import { useSort } from "../../../../../hooks/useSort";
import { CardContext, ICarData } from "../../../../../context/cards.context";
import { Button } from "../../../../Button/Button";

interface Props {
  text: string;
  cssStyle?: string | string[];
  sortBy: "year" | "price";
}

export const SortingBtn = ({ text, cssStyle, sortBy }: Props) => {
  const { cardsData, setData } = useContext(CardContext);
  const { sort, isReverse, setIsReverse } = useSort<ICarData>(sortBy);

  const onClickHandle = (): void => {
    const sorted = sort(cardsData);
    setIsReverse(!isReverse);
    setData && setData(sorted);
  };

  return (
    <Button
      type="button"
      text={text}
      cssStyle={cssStyle}
      handle={onClickHandle}
    />
  );
};
