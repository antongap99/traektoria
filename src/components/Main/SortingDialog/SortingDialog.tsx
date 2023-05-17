import { useState } from 'react';
import style from './SortingDialog.module.css';
import { Button } from '../../Button/Button';
import { SortingBtn } from './SortingBtn/SortingBtn';

export const SortingDialog = () => {
  const [showBtns, setShowBtns] = useState<boolean>(false);
  const showBtn = () => {setShowBtns(!showBtns)}

  return (
    <div className = {style.dialog}>
      <Button text='Сортировать' cssStyle={['btn']} handle={showBtn}/>
      {
      showBtns &&
      <div className={style.tool}>
      <SortingBtn text='По году выпуска' cssStyle={['sort']} sortBy='year'/>
      <SortingBtn text='По цене' cssStyle={'sort'} sortBy='price'/>
      </div>
      }
    </div>
  );
};


