export interface Cinema {
  id?: number;
  name?: string;
  image?: string;
  localisation?: Localisation;
  fav?: boolean;
}

export interface Localisation {
  adress?: string;
  cp?: string;
  city?: string;
  coord?: string;
}
