import { Joke } from "../../interfaces";

export const JOKE_FEATURE_KEY = "joke";

export interface JokeState {
  [JOKE_FEATURE_KEY]: Joke;
  isLoading: boolean;
  error: string;
  categories: string[];
  selectedCategory: string;
}

export const initialState: JokeState = {
  [JOKE_FEATURE_KEY]: null,
  categories: [],
  selectedCategory: "",
  isLoading: false,
  error: ""
};
