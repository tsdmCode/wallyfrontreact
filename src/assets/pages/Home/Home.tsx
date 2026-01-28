import { useState, useEffect } from 'react';
import { HomeCard } from '../../components/HomeCard/HomeCard';
import { Title } from '../../components/Title/Title';
import style from './home.module.scss';
import type { MovieData } from '../../../types/movieType';

export function Home() {
  const [data, setData] = useState<MovieData[]>([]);

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
      <img className={style.imgStyle} src="public/grafik-2/images/curtain.jpg" alt="" />
      <Title text="Sidste Nyt..." />
      <article className={style.home}>
        {data &&
          data.map((card) => {
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
          })}
      </article>
    </>
  );
}
