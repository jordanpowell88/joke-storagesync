import { JOKE_FEATURE_KEY, jokeInitialState, JokeState } from "./joke-store";

export interface RootState {
  [JOKE_FEATURE_KEY]: JokeState;
}

export const initialState: RootState = {
  [JOKE_FEATURE_KEY]: jokeInitialState
};
