export interface Images {
  background: string;
  coverart: string;
  coverarthq: string;
  joecolor: string;
}

export interface Share {
  subject: string;
  text: string;
  href: string;
  image: string;
  twitter: string;
  html: string;
  avatar: string;
  snapchat: string;
}

export interface Action {
  name: string;
  type: string;
  id: string;
  uri: string;
}

export interface Action2 {
  name: string;
  type: string;
  uri: string;
}

export interface Beacondata {
  type: string;
  providername: string;
}

export interface Option {
  caption: string;
  actions: Action2[];
  beacondata: Beacondata;
  image: string;
  type: string;
  listcaption: string;
  overflowimage: string;
  colouroverflowimage: boolean;
  providername: string;
}

export interface Hub {
  type: string;
  image: string;
  actions: Action[];
  options: Option[];
  explicit: boolean;
  displayname: string;
}

export interface Metapage {
  image: string;
  caption: string;
}

export interface Metadata {
  title: string;
  text: string;
}

export interface Beacondata2 {
  lyricsid: string;
  providername: string;
  commontrackid: string;
}

export interface Section {
  type: string;
  metapages: Metapage[];
  tabname: string;
  metadata: Metadata[];
  text: string[];
  footer: string;
  beacondata: Beacondata2;
}

export interface Artist {
  alias: string;
  id: string;
  adamid: string;
}

export interface Genres {
  primary: string;
}

export interface Urlparams {
  "{tracktitle}": string;
  "{trackartist}": string;
}

export interface Highlightsurls {}

export interface ITrack {
  layout: string;
  type: string;
  key: string;
  title: string;
  subtitle: string;
  images: Images;
  share: Share;
  hub: Hub;
  sections: Section[];
  url: string;
  artists: Artist[];
  alias: string;
  isrc: string;
  genres: Genres;
  urlparams: Urlparams;
  highlightsurls: Highlightsurls;
  albumadamid: string;
  trackadamid: string;
  releasedate: string;
}
