import { Button } from '../Button/Button';
import style from './poster.module.scss';
import { NavLink } from 'react-router-dom';
interface PosterProps {
  imgurl: string;
  title: string;
  price: number;
  slug: string;
}

export function Poster({ slug, imgurl, title, price }: PosterProps) {
  function handleAdd() {
    //igen added vi lidt her (kan også extractes til utils)
  }

  return (
    <figure className={style.posterStyle}>
      <img src={imgurl} alt={title} />
      <figcaption>
        <h4>{title}</h4>
        <p>{price} kr.</p>
        <NavLink to={`/plakater/${slug}`}>
          <Button text="Læs mere" type="button" onClick={handleAdd} />
        </NavLink>
      </figcaption>
    </figure>
  );
}
