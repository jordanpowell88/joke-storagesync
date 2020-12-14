import { Action, createReducer, on } from "@ngrx/store";
import {
  getCategories,
  getCategoriesFailed,
  getCategoriesSuccess,
  getJokeByCategory,
  getJokeByCategoryFailed,
  getJokeByCategorySuccess,
  getRandomJoke,
  getRandomJokeFailed,
  getRandomJokeSuccess
} from "./joke.actions";
import { initialState, JokeState } from "./joke.state";

const jokeReducer = createReducer(
  initialState,
  on(getRandomJoke, getJokeByCategory, getCategories, state => ({
    ...state,
    isLoading: true,
    error: ""
  })),
  on(getRandomJokeSuccess, getJokeByCategorySuccess, (state, { joke }) => ({
    ...state,
    joke,
    isLoading: false,
    error: ""
  })),
  on(getCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categories,
    isLoading: false,
    error: ""
  })),
  on(
    getRandomJokeFailed,
    getJokeByCategoryFailed,
    getCategoriesFailed,
    (state, { error }) => ({
      ...state,
      isLoading: false,
      error
    })
  )
);

export function reducer(state: JokeState, action: Action) {
  return jokeReducer(state, action);
}
