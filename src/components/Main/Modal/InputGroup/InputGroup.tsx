
import style from "./InputGroup.module.css";


interface Props {
  formName:string
  label: string,
  inputType: 'text' | 'color' | 'button'
}

export const InputGroup = ({formName, label, inputType}: Props) => {
  return (
    <div className={style.inputGroup}>
      <label htmlFor={label} className={style[label]}>
        {label}
      </label>
      <input
        name={formName}
        type={inputType}
        className={style.input}
        id={label}
      />
    </div>
  );
};
