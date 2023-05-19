
import { ICarData } from "../../../../../../context/cards.context";
import style from "./Details.module.css";

type Props = Pick<ICarData, | "color" | "price">;
export const Details = ({ price, color }: Props) => {
  return (
    <div className={style.details}>
      <p className={style.color}>цвет: {color}</p>
      <p className={style.model}>цена: {price}</p>
    </div>
  );
};
