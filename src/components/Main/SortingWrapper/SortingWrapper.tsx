import { SortingDialog } from '../SortingDialog/SortingDialog';
import style from './SortingWrapper.module.css';


export const SortingWrapper = () => {
  return (
    <div className = {style.wrapper}>
      <SortingDialog/>
    </div>
  );
};


