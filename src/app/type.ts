//J'ai choisi de faire une classe avec tout les attributs que peux renvoyer une requete HTPP, afin de pouvoir tous les utiliser en cas de nécessité

export class Film {
  adult !: boolean;
  genre_ids !: number[];
  id !: number;
  original_language !: string;
  original_title !: string;
  overview !: string;
  popularity !: number;
  release_date !: string;
  title !: string;
  video !: boolean;
  vote_average !: number;
  vote_count !: number;
  poster_path !: string;
  backdrop_path !: string;

  //partie details d'un film

  belongs_to_collection !: Belong;

  budget !: number;
  genres !: Genre[];

  homepage !: string;
  imdb_id! : number;

  production_companies !: Companies[];
  production_countries !: Countries[];

  revenue !: number;
  runtime !: number;
  spoken_languages !: Languages[];

  status !: string;
  tagline !: string;

  comments !: Comment[];
  
}

export class Belong {
  id !: number;
  name !: string;
  poster_path !: string;
  backdrop_path !: string;
}

export class Genre {
  id !: number;
  name !: string;
}

export class Companies {
  id !: number;
  logo_path !: string;
  name !: string;
  origin_country !: string;

}

export class Countries {
  iso_3166_1 !: string;
  name !: string;
}

export class Languages {
  english_name !: string;
  iso_639_1 !: string;
  name !: string;
}

export class Comment {
  id !: NumberConstructor;
  movieId !: number;
  text !: string;
  rating !: string;
  date !: string;
}
  

