import style from './plakater.module.scss';
import { useFetch } from '../../hooks/useFetch';
import { useState } from 'react';
import type { MovieData } from '../../../types/movieType';
import { Title } from '../../components/Title/Title';
import { Genrelist } from '../../components/Genrelist/Genrelist';
import { useParams } from 'react-router-dom';
import { PosterDetails } from '../../components/PosterDetails/PosterDetails';

export function PlakaterDetails() {
  const { slug } = useParams();
  const [_selectedGenre, setSelectedGenre] = useState('komedie');
  const [_currentPage, setCurrentPage] = useState(0);
  const { data, isLoading, error } = useFetch<MovieData>(`http://localhost:3000/posters/${slug}`);

  if (isLoading) {
    return <h1>Loading data...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <header className={style.posterHeaderStyle}>
        <Title text={'Ja det virker'} />
      </header>
      <div className={style.pageContainerStyle}>
        <Genrelist setSelectedGenre={setSelectedGenre} setCurrentPage={setCurrentPage} />
        {data && (
          <PosterDetails
            id={data.id}
            name={data.name}
            description={data.description}
            image={data.image}
            width={data.width}
            height={data.height}
            price={data.price}
            stock={data.stock}
          />
        )}
      </div>
    </>
  );
}
