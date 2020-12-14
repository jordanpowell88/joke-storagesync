import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { JOKE_FEATURE_KEY } from "./joke.state";
import { reducer } from "./joke.reducer";
import { JokeEffects } from "./joke.effects";

@NgModule({
  imports: [
    StoreModule.forFeature(JOKE_FEATURE_KEY, reducer),
    EffectsModule.forFeature([JokeEffects])
  ]
})
export class JokeStoreModule {}
