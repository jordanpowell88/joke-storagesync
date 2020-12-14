import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectIsLoading } from "../root-store/joke-store/joke.selectors";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.css"]
})
export class LoaderComponent {
  isLoading$ = this.store.select(selectIsLoading);

  constructor(private readonly store: Store) {}
}
