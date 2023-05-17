import { Button } from "../../../Button/Button";
import style from "./Card.module.css";
import { Details } from "./Details/Details";
import Trash from "./../../../../assets/trash.svg";
import { IconBtn } from "../../../IconBtn/IconBtn";
import { CardTitle } from "../CardTitle/CardTitle";
import cn from "classnames";
import { CardContext, ICarData } from "../../../../context/cards.context";
import { useContext } from "react";

interface Props {
  data: ICarData;
}

export const Card = ({ data }: Props) => {
  const { cardsData, setData } = useContext(CardContext);
  const deleteCard = () => {
    const cards =  cardsData.filter((cardData) => cardData.id !== data.id)
    setData && setData(cards)
  };

  return (
    <div className={cn(style.card, "shadow")}>
      <CardTitle year={data.year} model={data.model} name={data.name} />
      <Details price={data.price} color={data.color} />
      <Button text="редактировать" cssStyle="btn" />
      <IconBtn iconStyle="trash" img={Trash} alt="удалить" handle={deleteCard}/>
    </div>
  );
};
