
import { ICarData } from "../../../../../context/cards.context";
import style from "./CardTitle.module.css";

type Props = Pick<ICarData, "model" | "name" | "year">;

export const CardTitle = ({ model, name, year }: Props) => {
  return (
    <h2 className={style.title}>
      <span>{name}</span>
      <span>{model}</span>
      <span>{year} года</span>
    </h2>
  );
};
