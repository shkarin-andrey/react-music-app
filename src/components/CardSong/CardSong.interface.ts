export interface ICardSong {
  id: string;
  image: string;
  subtitle: string;
  title: string;
  isActive: (id: string) => boolean;
}
