import cn from 'classnames'
import style from './Button.module.css'

interface Props {
  text?: string;
  cssStyle?: string | string[];
  handle?: () => void;
  children?: JSX.Element;
}

export const Button = ({text, cssStyle, handle}: Props) => {
  return <button className = {cn(style.btn, cssStyle)} onClick={() => {
    handle && handle()
  }}>{text}</button>;
};


