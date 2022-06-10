export interface Cinema {
  id?: number;
  name?: string;
  image?: string;
  localisation?: Localisation;
}

export interface Localisation {
  adress?: string;
  cp?: string;
  city?: string;
  coord?: string;
}
