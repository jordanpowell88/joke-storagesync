import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Joke } from "../interfaces";

@Injectable({ providedIn: "root" })
export class JokeService {
  private BASE_URL = "https://api.chucknorris.io/jokes";

  constructor(private readonly http: HttpClient) {}

  getRandomJoke(): Observable<Joke> {
    return this.http.get<Joke>(`${this.BASE_URL}/random`);
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.BASE_URL}/categories`);
  }

  getJokeByCategory(category: string): Observable<Joke> {
    return this.http.get<Joke>(`${this.BASE_URL}/random?category=${category}`);
  }
}
