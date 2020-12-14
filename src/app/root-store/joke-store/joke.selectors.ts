import { createFeatureSelector, createSelector } from "@ngrx/store";
import { JokeState, JOKE_FEATURE_KEY } from "./joke.state";

const selectJokeFeatureState = createFeatureSelector<JokeState>(
  JOKE_FEATURE_KEY
);

export const selectJoke = createSelector(
  selectJokeFeatureState,
  state => state.joke
);

export const selectIsLoading = createSelector(
  selectJokeFeatureState,
  state => state.isLoading
);

export const selectError = createSelector(
  selectJokeFeatureState,
  state => state.error
);

export const selectCategories = createSelector(
  selectJokeFeatureState,
  state => state.categories
);

export const selectSelectedCategory = createSelector(
  selectJokeFeatureState,
  state => state.selectedCategory
);
