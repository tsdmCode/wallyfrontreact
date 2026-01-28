import style from './title.module.scss';

export function Title({ text }) {
  return <h1 className={style.titleStyle}>{text}</h1>;
}
