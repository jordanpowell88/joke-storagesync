import { NgModule } from "@angular/core";
import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  StoreModule
} from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { JokeStoreModule } from "./joke-store/joke-store.module";
import { RootState } from "./root.state";
import { jokeReducer, JOKE_FEATURE_KEY } from "./joke-store";
import { localStorageSync } from "ngrx-store-localstorage";

const reducers: ActionReducerMap<RootState> = { joke: jokeReducer };

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: [{ [JOKE_FEATURE_KEY]: ["selectedCategory"] }],
  })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  imports: [
    JokeStoreModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule {}
