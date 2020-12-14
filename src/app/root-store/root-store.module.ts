import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { JokeStoreModule } from "./joke-store/joke-store.module";

@NgModule({
  imports: [JokeStoreModule, StoreModule.forRoot({}), EffectsModule.forRoot([])]
})
export class RootStoreModule {}
