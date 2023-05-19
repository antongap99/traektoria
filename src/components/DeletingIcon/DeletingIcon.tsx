import cn from "classnames";
import style from "./DeletingIcon.module.css";

interface Props {
  img: string;
  alt: string;
  iconStyle?: string;
  handle?: () => void
}

export const DeletingIcon = ({ img, alt, iconStyle, handle }: Props) => (
  <div className={cn(style.IconBtn, iconStyle)} onClick={() => {
    handle && handle();
  }}>
    <img src={img} alt={alt} />
  </div>
);
