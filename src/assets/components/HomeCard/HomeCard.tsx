import style from './homecard.module.scss';
import { Button } from '../Button/Button';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';

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
  slug: string;
}

export function HomeCard({ name, description = '', genres, imgurl, slug }: HomeCardProps) {
  const navigate = useNavigate();

  function handleClick() {
    console.log('Hej!!!!');
    navigate(`/plakater/${slug}`);
  }

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
        <Button onClick={handleClick} text="Læs mere!" type="button" />
      </figcaption>
    </figure>
  );
}
