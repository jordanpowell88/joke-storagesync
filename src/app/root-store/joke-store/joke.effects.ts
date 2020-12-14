import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, delay, exhaustMap, map } from "rxjs/operators";
import { setSelectedCategory } from "../../categories/categories.component";
import { JokeService } from "../../services/";
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

@Injectable()
export class JokeEffects {
  constructor(private actions$: Actions, private jokeService: JokeService) {}

  getRandomJoke$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRandomJoke),
      exhaustMap(() =>
        this.jokeService.getRandomJoke().pipe(
          map(joke => getRandomJokeSuccess({ joke })),
          catchError(error => of(getRandomJokeFailed({ error })))
        )
      )
    )
  );

  getJokeByCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getJokeByCategory),
      delay(2000),
      exhaustMap(action =>
        this.jokeService.getJokeByCategory(action.category).pipe(
          map(joke => getJokeByCategorySuccess({ joke })),
          catchError(error => of(getJokeByCategoryFailed({ error })))
        )
      )
    )
  );

  getCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCategories),
      exhaustMap(() =>
        this.jokeService.getCategories().pipe(
          map(categories => getCategoriesSuccess({ categories })),
          catchError(error => of(getCategoriesFailed({ error })))
        )
      )
    )
  );

  setSelectedCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setSelectedCategory),
      map(action => action.selectedCategory),
      map(category => getJokeByCategory({ category }))
    )
  );
}
