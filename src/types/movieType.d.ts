export interface MovieData {
  id: number;
  name: string;
  image: string;
  slug: string;
  price: number;
  genres: Genre[];
  description: string;
  height: number;
  width: number;
  stock: number;
}

export interface Genre {
  id: number;
  title: string;
  slug: string;
  poster_genre_rel: PosterGenreRel;
}

export interface PosterGenreRel {
  id: number;
  poster_id: number;
  genre_id: number;
}
