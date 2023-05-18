import { useState } from 'react';
import style from './SortingDialog.module.css';
import { SortingBtn } from './SortingBtn/SortingBtn';
import { Button } from '../../../Button/Button';

export const SortingDialog = () => {
  const [showBtns, setShowBtns] = useState<boolean>(false);
  const showBtn = () => {setShowBtns(!showBtns)}

  return (
    <div className = {style.dialog}>
      <Button type='button' text='Сортировать' cssStyle={['btn']} handle={showBtn}/>
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


