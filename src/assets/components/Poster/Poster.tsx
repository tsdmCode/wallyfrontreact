import { Button } from '../Button/Button';
import style from './poster.module.scss';

interface PosterProps {
  imgurl: string;
  title: string;
  price: number;
}

export function Poster({ imgurl, title, price }: PosterProps) {
  function handleAdd() {
    //igen added vi lidt her (kan også extractes til utils)
  }

  return (
    <figure className={style.posterStyle}>
      <img src={imgurl} alt={title} />
      <figcaption>
        <h4>{title}</h4>
        <p>{price} kr.</p>
        <Button text="Læg i kurv" type="button" onClick={handleAdd} />
      </figcaption>
    </figure>
  );
}
