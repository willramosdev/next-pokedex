export type PokemonType =
  | 'default'
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'ground'
  | 'poison'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy';

export interface TagProps {
    label: string;
    context: PokemonType;
}