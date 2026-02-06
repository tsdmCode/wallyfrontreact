import style from './button.module.scss';
// #D1B3A7
interface ButtonProps {
  text: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export function Button({ text, type = 'button', onClick }: ButtonProps) {
  return (
    <button className={style.buttonStyle} type={type} onClick={onClick}>
      {text}
    </button>
  );
}
