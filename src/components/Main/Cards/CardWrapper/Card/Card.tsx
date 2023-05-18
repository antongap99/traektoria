import style from "./Card.module.css";
import { Details } from "./Details/Details";
import  Trash from '../../../../../assets/trash.svg'
import { CardTitle } from "../CardTitle/CardTitle";
import cn from "classnames";
import { useContext } from "react";
import { CardContext, ICarData } from "../../../../../context/cards.context";
import { ModalContext } from "../../../../../context/modal.context";
import { Button } from "../../../../Button/Button";
import { IconBtn } from "../../../../IconBtn/IconBtn";

interface Props {
  data: ICarData;
}

export const Card = ({ data }: Props) => {
  const { cardsData, setData } = useContext(CardContext);
  const {toggleEditForm, setId} = useContext(ModalContext)

  const deleteCard = () => {
    const cards =  cardsData.filter((cardData) => cardData.id !== data.id)
    setData && setData(cards)
  };

  const openModal = () => {
    toggleEditForm && toggleEditForm()
    setId && setId(data.id)
  }

  return (
    <div className={cn(style.card, "shadow")}>
      <CardTitle year={data.year} model={data.model} name={data.name} />
      <Details price={data.price} color={data.color} />
      <Button type="button" text="редактировать" cssStyle="btn" handle={openModal} />
      <IconBtn iconStyle="trash" img={Trash} alt="удалить" handle={deleteCard}/>
    </div>
  );
};
