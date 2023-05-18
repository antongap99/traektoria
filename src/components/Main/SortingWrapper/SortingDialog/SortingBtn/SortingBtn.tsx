import style from './SortingBtn.module.css';
import cn from 'classnames'
import { useContext } from 'react';
import { useSort } from '../../../../../hooks/useSort';
import { CardContext, ICarData } from '../../../../../context/cards.context';

interface Props {
  text?: string;
  cssStyle?: string | string[];
  children?: JSX.Element;
  sortBy:  'year' | 'price'
}

export const SortingBtn = ({text, cssStyle, sortBy}: Props) => {
  const {cardsData, setData} = useContext(CardContext)
  const {sort, isReverse,  setIsReverse} = useSort<ICarData>(sortBy);

  return <button className = {cn(style.btn, cssStyle)} onClick={() => {
    const sorted = sort(cardsData);
    setIsReverse(!isReverse);
    setData && setData(sorted)
  }}>{text}</button>;
};

