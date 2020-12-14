import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { createAction, props, select, Store } from "@ngrx/store";
import { take } from "rxjs/operators";
import { getCategories } from "../root-store/joke-store/joke.actions";
import {
  selectCategories,
  selectSelectedCategory
} from "../root-store/joke-store/joke.selectors";

export const setSelectedCategory = createAction(
  "[JOKE COMPONENT] Set Selected Category",
  props<{ selectedCategory: string }>()
);

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

    this.selectedCategory.valueChanges.subscribe(selectedCategory =>
      this.store.dispatch(setSelectedCategory({ selectedCategory }))
    );
  }
}
