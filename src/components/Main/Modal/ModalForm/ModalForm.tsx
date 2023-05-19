import { FormEvent, useContext } from "react";
import { Button } from "../../../Button/Button";
import { InputGroup } from "../InputGroup/InputGroup";
import style from "./ModalForm.module.css";
import cn from "classnames";
import { CardContext, ICarData } from "../../../../context/cards.context";
import { ModalContext } from "../../../../context/modal.context";

export const ModalForm = () => {
  const { cardsData, setData } = useContext(CardContext);
  const { toggleEditForm, cardId } = useContext(ModalContext);

  const submitHandle = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const card = cardsData.find(
      (cardData) => cardData.id === cardId
    ) as ICarData;
    const data: Pick<ICarData, "model" | "price" | "name"> = {
      model: target.model.value || card.model,
      price: target.price.value || card.price,
      name: target.brand.value || card.name,
    };
    setData &&
      setData(
        cardsData.map((cardData) =>
          cardData.id === cardId ? { ...cardData, ...data } : cardData
        )
      );
    toggleEditForm && toggleEditForm();
  };

  return (
    <form
      className={cn(style.form, "modalForm")}
      onSubmit={(e) => submitHandle(e)}
    >
      <InputGroup inputType="text" label="Марка" formName="brand" />
      <InputGroup inputType="text" label="Модель" formName="model" />
      <InputGroup inputType="text" label="Стоимость" formName="price" />
      <Button type="submit" text="Сохранить" cssStyle={"btn"} />
    </form>
  );
};
