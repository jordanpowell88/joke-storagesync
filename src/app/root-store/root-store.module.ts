import { NgModule } from "@angular/core";
import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  StoreModule
} from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { JokeStoreModule } from "./joke-store/joke-store.module";
import { RootState } from "./root.state";
import { jokeReducer, JOKE_FEATURE_KEY } from "./joke-store";
import { localStorageSync } from "ngrx-store-localstorage";

interface State extends RootState {
  router: RouterReducerState<any>;
}

const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  [JOKE_FEATURE_KEY]: jokeReducer
};

export function localStorageSyncReducer(
  reducer: ActionReducer<State>
): ActionReducer<State> {
  return localStorageSync({
    keys: [{ [JOKE_FEATURE_KEY]: ["selectedCategory"] }],
    rehydrate: false
  })(reducer);
}

const metaReducers: Array<MetaReducer<State, any>> = [localStorageSyncReducer];

@NgModule({
  imports: [
    JokeStoreModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule {}
