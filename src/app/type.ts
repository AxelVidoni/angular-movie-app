export class Film {
  adult!: boolean;
  genre_ids!: number[];
  id!: number;
  original_language !: string;
  original_title!: string;
  overview!: string;
  popularity!: number;
  release_date!: string;
  title!: string;
  video !: boolean;
  vote_average!: number;
  vote_count!: number;
  poster_path!: string;
  // description!: string;
  backdrop_path!: string;

  //partie details d'un film

  belongs_to_collection!: Belong;

  budget!: number;
  genres!: Genre[];
  
}

export class Belong {
  id!: number;
  name!: string;
  poster_path!: string;
  backdrop_path!: string;
}

export class Genre {
  id !: number;
  name!: string;
}
  