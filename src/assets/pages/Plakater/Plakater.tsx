import style from './plakater.module.scss';
import { Grid } from '../../components/Grid/Grid';
import { useFetch } from '../../hooks/useFetch';
import { useState } from 'react';
import type { MovieData } from '../../../types/movieType';
import { Title } from '../../components/Title/Title';
import { Poster } from '../../components/Poster/Poster';
import { Genrelist } from '../../components/Genrelist/Genrelist';
import { Pagination } from '../../components/Pagination/Pagination';
import { Sort } from '../../components/Sort/Sort';
import { useParams } from 'react-router-dom';

export function Plakater() {
  const { genre } = useParams();
  const [selectedGenre, setSelectedGenre] = useState(genre || 'komedie');
  const [currentPage, setCurrentPage] = useState(0);
  const [sortKey, setSortKey] = useState('price');
  const [direction, setDirection] = useState('asc');
  const { data, isLoading, error } = useFetch<Array<MovieData>>(
    `http://localhost:3000/posters/list_by_genre/${selectedGenre}?sort_key=${sortKey}&sort_direction=${direction}`,
  );

  if (isLoading) {
    return <h1>Loading data...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <header className={style.posterHeaderStyle}>
        <Title text={'Plakater'} />
        <Sort setSortKey={setSortKey} setDirection={setDirection} />
      </header>
      <div className={style.pageContainerStyle}>
        <Genrelist setSelectedGenre={setSelectedGenre} setCurrentPage={setCurrentPage} />
        <div>
          <Grid gtc={3} gap={32}>
            {data
              ?.map((item) => {
                return (
                  <Poster slug={item.slug || 'unknown'} imgurl={item.image} price={item.price} title={item.name} />
                );
              })
              .slice(currentPage * 9, currentPage * 9 + 9)}
          </Grid>
        </div>
        <Pagination
          postsPerPage={9}
          totalPosts={data?.length || 0}
          setCurrentPage={setCurrentPage as (page: number) => void}
          currentPage={currentPage}
          pageNumber={currentPage + 1}
        />
      </div>
    </>
  );
}
