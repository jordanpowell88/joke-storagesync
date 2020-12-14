import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { JokeComponent } from "./joke/joke.component";
import { RootStoreModule } from "./root-store/root-store.module";
import { HttpClientModule } from "@angular/common/http";
import { CategoriesComponent } from "./categories/categories.component";
import { MatSelectModule } from "@angular/material/select";
import { LoaderComponent } from "./loader/loader.component";
import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RootStoreModule,
    HttpClientModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
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
