import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import {
  selectIsLoading,
  selectJoke
} from "../root-store/joke-store/joke.selectors";

@Component({
  selector: "app-joke",
  templateUrl: "./joke.component.html",
  styleUrls: ["./joke.component.css"]
})
export class JokeComponent {
  joke$ = this.store.select(selectJoke);
  loading$ = this.store.select(selectIsLoading);

  constructor(private readonly store: Store) {}
}
