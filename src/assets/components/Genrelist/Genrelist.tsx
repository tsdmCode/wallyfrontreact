import { useFetch } from '../../hooks/useFetch';
import style from './genrelist.module.scss';

export function Genrelist({ setSelectedGenre }) {
  const { data, isLoading, error } = useFetch('http://localhost:3000/genre');

  if (isLoading) {
    return <h3>Loading data......</h3>;
  }

  if (error) {
    return <h3>Error: {error}</h3>;
  }

  return (
    <div className={style.genrelistStyle}>
      <ul>
        {data?.map((genre) => (
          <li key={genre.id} onClick={() => setSelectedGenre(genre.slug)}>
            {genre.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
