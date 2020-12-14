import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { getRandomJoke } from "../root-store/joke-store/joke.actions";
import { selectJoke } from "../root-store/joke-store/joke.selectors";

@Component({
  selector: "app-joke",
  templateUrl: "./joke.component.html",
  styleUrls: ["./joke.component.css"]
})
export class JokeComponent implements OnInit {
  joke$ = this.store.select(selectJoke);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getRandomJoke());
  }
}
