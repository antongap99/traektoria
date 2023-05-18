import { CardWrapper } from "./CardWrapper/CardWrapper";
import style from "./Cards.module.css";


export const Cards = () => {
  return (
    <section className={style.wrapper}>
      <CardWrapper />
    </section>
  );
};
