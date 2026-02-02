import style from './button.module.scss';
// #D1B3A7
interface ButtonProps {
  text: string;
  type: 'button' | 'submit' | 'reset';
}

export function Button({ text, type = 'button', onClick }: ButtonProps) {
  return (
    <button className={style.buttonStyle} type={type} onClick={onClick}>
      {text}
    </button>
  );
}
