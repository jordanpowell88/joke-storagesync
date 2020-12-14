import { createAction, props } from "@ngrx/store";
import { Joke } from "../../interfaces";

export const getRandomJoke = createAction("[JOKE API] Get Random Joke");

export const getRandomJokeSuccess = createAction(
  "[JOKE API] Get Random Joke Succcess",
  props<{ joke: Joke }>()
);

export const getRandomJokeFailed = createAction(
  "[JOKE API] Get Random Joke Failed",
  props<{ error: string }>()
);

export const getJokeByCategory = createAction(
  "[JOKE API] Get Joke By Category",
  props<{ category: string }>()
);

export const getJokeByCategorySuccess = createAction(
  "[JOKE API] Get Joke By Category Success",
  props<{ joke: Joke }>()
);

export const getJokeByCategoryFailed = createAction(
  "[JOKE API] Get Joke By Category Failed",
  props<{ error: string }>()
);

export const getCategories = createAction("[JOKE API] Get Categories");

export const getCategoriesSuccess = createAction(
  "[JOKE API] Get Categories Success",
  props<{ categories: string[] }>()
);

export const getCategoriesFailed = createAction(
  "[JOKE API] Get Categories Failed",
  props<{ error: string }>()
);
