import { useState, useEffect } from 'react';
import { HomeCard } from '../../components/HomeCard/HomeCard';
import style from './home.module.scss';

interface Genre {
  id: number;
  title: string;
  slug: string;
}

interface apiResponse {
  id: number;
  name: string;
  description: string;
  image: string;
  genres: Genre[];
}

export function Home() {
  const [data, setData] = useState<apiResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:3000/posters?sort_key=random&limit=2&attributes=id,name,description,image';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setData(data);
    };
    fetchData();
  }, []);
  //   const renderedCards = data.map((card) => {
  //     const { id, name, description, genres, imgurl } = data;

  //     return <HomeCard id={id} name={name} description={description} genres={genres} imgurl={imgurl} />;
  //   });
  return (
    <>
      <h2>Sidste Nyt...</h2>
      <article className={style.home}>
        {data
          ? data.map((card) => {
              return (
                <HomeCard
                  key={card.id}
                  id={card.id}
                  name={card.name}
                  description={card.description}
                  genres={card.genres}
                  imgurl={card.image}
                />
              );
            })
          : ''}
      </article>
    </>
  );
}
