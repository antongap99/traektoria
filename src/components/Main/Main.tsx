import { CardWrapper } from './CardWrapper/CardWrapper';
import style from './Main.module.css';
import { SortingWrapper } from './SortingWrapper/SortingWrapper';


export const Main = () => {
  return (
    <main className = {style.main}>
      <SortingWrapper/>
      <div className={style.wrapper}>
        <CardWrapper/>
      </div>
    </main>
  );
};


