import style from "./CardWrapper.module.css";
import { Card } from "./Card/Card";
import { useContext } from "react";
import { CardContext } from "../../../../context/cards.context";



export const CardWrapper = () => {
  const {cardsData} = useContext(CardContext)
  return (
      <div className={style.cards}>
        {!cardsData.length ? (
          <p className={style.loading}>Загрузка...</p>
        ) : (
          cardsData.map((carData) => <Card key={carData.id} data={carData} />)
        )}
      </div>
  );
};
