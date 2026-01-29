import { Grid } from '../components/Grid/Grid';
import { useFetch } from '../hooks/useFetch';
import { useState } from 'react';
import type { MovieData } from '../../types/movieType';
import { Title } from '../components/Title/Title';
import { Poster } from '../components/Poster/Poster';
import { Genrelist } from '../components/Genrelist/Genrelist';

export function Plakater() {
  const [selectedGenre, setSelectedGenre] = useState('komedie');
  const [genreData, setGenreData] = useState();
  const { data, isLoading, error } = useFetch<Array<MovieData>>(
    `http://localhost:3000/posters/list_by_genre/${selectedGenre}`,
  );

  if (isLoading) {
    return <h1>Loading data......</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <Title text={'Plakater'} />
      <Genrelist setSelectedGenre={setSelectedGenre} />
      <Grid gtc={3} gap={32}>
        {data?.map((item) => {
          return <Poster imgurl={item.image} price={item.price} title={item.name} />;
        })}
      </Grid>
    </>
  );
}
