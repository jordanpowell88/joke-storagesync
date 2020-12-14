import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { take } from "rxjs/operators";
import { getCategories } from "../root-store/joke-store/joke.actions";
import {
  selectCategories,
  selectSelectedCategory
} from "../root-store/joke-store/joke.selectors";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})
export class CategoriesComponent implements OnInit {
  categories$ = this.store.select(selectCategories);
  selectedCategory: FormControl;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getCategories());

    this.store
      .pipe(
        take(1),
        select(selectSelectedCategory)
      )
      .subscribe(
        selectedCategory =>
          (this.selectedCategory = new FormControl(selectedCategory))
      );
  }
}
