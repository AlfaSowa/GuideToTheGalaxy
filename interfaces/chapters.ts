export interface ThemeType {
  id?: string;
  name: string;
  alias: string;
}

export interface Part {
  id?: string;
  name: string;
  alias: string;
  themes: ThemeType[];
}

export interface Chapter {
  _id: string;
  name: string;
  alias: string;
  parts: Part[];
}
