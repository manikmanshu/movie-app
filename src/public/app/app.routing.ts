import { RouterModule, Routes } from "@angular/router";
import { MoviesComponent } from "./movies/movies.component";
import { MoviesGridComponent } from "./movies/movies-grid.component";
import { MovieEditComponent } from "./movies/movie-edit.component";


const routes: Routes = [
    { path: 'movie', component: MoviesComponent },
    { path: 'movie/:id', component: MovieEditComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/movie' } //catch any unfound routes and redirect to home page
];

export const appRouting = {
    routes: RouterModule.forRoot(routes),
    components: [MoviesComponent, MoviesGridComponent, MovieEditComponent]
};