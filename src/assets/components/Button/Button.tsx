import style from './button.module.scss';
// #D1B3A7
interface ButtonProps {
  text: string;
}

export function Button({ text }: ButtonProps) {
  return <button className={style.buttonStyle}>{text}</button>;
}
