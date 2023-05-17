import style from './EditDetails.module.css';


export const EditDetails = () => {
  return (
    <form className={style.details}>
      <input type="text" className={style.input}/>
      <input type="text" className={style.input}/>
      <input type="text" className={style.input}/>
    </form>
  );
};


