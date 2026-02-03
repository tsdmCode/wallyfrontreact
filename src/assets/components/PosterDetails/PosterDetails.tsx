import style from './posterdetail.module.scss';
import parse from 'html-react-parser';
import { PiSmileyFill, PiSmileySadFill } from 'react-icons/pi';
import { Button } from '../Button/Button';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import type { MovieData } from '../../../types/movieType';
// {"id":1501,"name":"Frost 2","slug":"frost-2","description":"<p>Dansk biografpremiere\t25.12.2019</p>\r\n","image":"https://info.kinorevuen.dk/wp-content/uploads/2021/01/frost-2-hvdplakat.jpg","width":70,"height":100,"price":100,"stock":3,"createdAt":"2026-01-27T10:15:07.000Z","updatedAt":"2026-01-27T10:15:07.000Z","genres":[{"id":4,"title":"Børne - Familiefilm","poster_genre_rel":{"id":17,"poster_id":1501,"genre_id":4}},{"id":10,"title":"Walt Disney - Pixar","poster_genre_rel":{"id":18,"poster_id":1501,"genre_id":10}}]}

interface PosterProps {
  id: number;
  name: string;
  image: string;
  width: number;
  height: number;
  price: number;
  stock: number;
  description: string;
}

export function PosterDetails({ id, name, description, image, width, height, price, stock }: MovieData) {
  const [amount, setAmount] = useState(0);
  const { userData } = useContext(AuthContext);
  const size = 24;
  function handleAdd(e: React.MouseEvent) {
    //her laver vi lige lidt cart logic når vi har auth implementeret
    e.preventDefault();
    if (userData) {
      console.log('Added!');
    } else {
      alert('Log lige ind først');
    }
  }

  function handleChange(e: React.ChangeEvent) {
    setAmount(e.target.value);
  }

  return (
    <figure className={style.detailedPosterStyle}>
      <img src={image} alt={name} />
      <figcaption>
        <article>
          <h3>{name}</h3>
          <div>{parse(description)}</div>
          <p>
            Størrelse: {width} x {height} cm
          </p>
          <p>Varenummer (SKU): {id} </p>
          <p>
            <b>Kr. {price}</b>
          </p>
          <footer>
            <form onSubmit={handleAdd}>
              <input value={amount} onChange={(e) => handleChange(e)} />
              <Button text="Læg i kurv" type="submit" />
            </form>
            <div>
              {stock > 0 ? (
                <p style={{ color: '#006f00' }}>
                  <PiSmileyFill size={size} /> {stock} på lager
                </p>
              ) : (
                <p style={{ color: 'red' }}>
                  <PiSmileySadFill size={size} /> {stock}på lager
                </p>
              )}
            </div>
          </footer>
        </article>
      </figcaption>
    </figure>
  );
}
