import cn from 'classnames'
import style from './Button.module.css'

interface Props {
  text: string;
  type: 'reset' | 'submit'| 'button'
  cssStyle?: string | string[];
  handle?: () => void;
  children?: JSX.Element;
}

export const Button = ({text,type, cssStyle, handle}: Props) => {
  return <button type={type} className = {cn(style.btn, cssStyle)} onClick={() => {
    handle && handle()
  }}>{text}</button>;
};


