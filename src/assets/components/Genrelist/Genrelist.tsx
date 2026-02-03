import type { Genre } from '../../../types/movieType';
import { useFetch } from '../../hooks/useFetch';
import style from './genrelist.module.scss';
import { useNavigate } from 'react-router-dom';

export function Genrelist({ setSelectedGenre, setCurrentPage }) {
  const { data, isLoading, error } = useFetch<Array<Genre>>('http://localhost:3000/genre');
  const navigate = useNavigate();

  function handleClick(slug) {
    navigate(`/plakater/genre/${slug}`);
    setSelectedGenre(slug);
    setCurrentPage(0);
  }

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
          <li key={genre.id} onClick={() => handleClick(genre.slug)}>
            {genre.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
