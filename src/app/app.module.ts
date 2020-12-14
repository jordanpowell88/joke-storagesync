import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { JokeComponent } from "./joke/joke.component";
import { RootStoreModule } from "./root-store/root-store.module";
import { HttpClientModule } from "@angular/common/http";
import { CategoriesComponent } from "./categories/categories.component";
import { MatSelectModule } from "@angular/material/select";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoaderComponent } from "./loader/loader.component";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RootStoreModule,
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  declarations: [
    AppComponent,
    JokeComponent,
    CategoriesComponent,
    LoaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
