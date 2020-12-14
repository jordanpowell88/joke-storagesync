import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { getRandomJoke } from "../root-store/joke-store/joke.actions";
import {
  selectIsLoading,
  selectJoke
} from "../root-store/joke-store/joke.selectors";

@Component({
  selector: "app-joke",
  templateUrl: "./joke.component.html",
  styleUrls: ["./joke.component.css"]
})
export class JokeComponent implements OnInit {
  joke$ = this.store.select(selectJoke);
  loading$ = this.store.select(selectIsLoading);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getRandomJoke());
  }
}
