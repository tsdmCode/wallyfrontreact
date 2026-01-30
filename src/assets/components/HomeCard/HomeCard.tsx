import style from './homecard.module.scss';
import { Button } from '../Button/Button';
import parse from 'html-react-parser';

interface Genre {
  id: number;
  title: string;
  slug: string;
}

interface HomeCardProps {
  id: number;
  name: string;
  description: string;
  genres: Genre[];
  imgurl: string;
}

export function HomeCard({ id, name, description = '', genres, imgurl }: HomeCardProps) {
  return (
    <figure className={style.homeCard}>
      <img src={imgurl} alt={name} />
      <figcaption>
        <h3>{name}</h3>
        <article>
          {description && <div>{parse(description)}</div>}
          <p>
            Genres:{' '}
            {genres.map((genre) => (
              <span>{genre.title}</span>
            ))}
          </p>
        </article>
        <Button text="Læs mere!" type="button" />
      </figcaption>
    </figure>
  );
}
