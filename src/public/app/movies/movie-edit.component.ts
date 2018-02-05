import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { DataService } from '../core/data.service';
import { IMovie, IActor, IDirector } from '../shared/interfaces';


@Component({
    selector: 'movie-edit',
    templateUrl: './movie-edit.component.html'
})
export class MovieEditComponent implements OnInit {

    today = new Date();
    movie: IMovie = {
        _id: '',
        name: '',
        imageUrl: 'image.png',
        genre: '',
        releaseDate: null,
        actors: [],
        director: {
            _id: null,
            name: ''
        },
        actorIds: [],
        directorId: null
    };
    genres: any[];
    actors: IActor[];
    directors: IDirector[];
    errorMessage: string;
    deleteMessageEnabled: boolean;
    operationText: string = 'Insert';

    constructor(private router: Router,
        private route: ActivatedRoute,
        private dataService: DataService) { }
    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        let dateString = `${this.today.getFullYear()}-${("0" + (this.today.getMonth() + 1)).slice(-2)}-${("0" + this.today.getDate()).slice(-2)}`;
        this.movie.releaseDate = dateString;
        if (id !== '0') {
            this.operationText = 'Update';
            this.getMovie(id);
        }

        this.getActors();
        this.getDirectors();
        this.getGenres();
    }

    getMovie(id: string) {
        this.dataService.getMovie(id)
            .subscribe((movie: IMovie) => {
                const mov = JSON.stringify(movie);
                this.movie = JSON.parse(mov);
                this.movie.releaseDate = movie.releaseDate.split('T')[0]
            },
            (err: any) => console.log(err));
    }

    getActors() {
        this.dataService.getActors()
            .subscribe((actors: IActor[]) => this.actors = actors);

    }

    getDirectors() {
        this.dataService.getDirectors()
            .subscribe((directors: IDirector[]) => this.directors = directors);
    }

    getGenres() {
        this.dataService.getGenres()
            .subscribe((genres: any[]) => this.genres = genres);
    }

    submit() {
        console.log('submit');
        if (this.movie._id) {
            this.dataService.updateMovie(this.movie)
                .subscribe((movie: IMovie) => {
                    if (movie) {
                        this.router.navigate(['/movie']);
                    } else {
                        this.errorMessage = 'Unable to update movie';
                    }

                },
                (err) => console.log(err));
        } else {
            this.dataService.insertMovie(this.movie)
                .subscribe((movie: IMovie) => {
                    if (movie) {
                        this.router.navigate(['/movie']);
                    } else {
                        this.errorMessage = 'Unable to add movie';
                    }

                },
                (err) => console.log(err));

        }
    }

    cancel(event: Event) {
        event.preventDefault();
        this.router.navigate(['/']);
    }

    delete(event: Event) {
        event.preventDefault();
        this.dataService.deleteMovie(this.movie._id)
            .subscribe((movie: IMovie) => {
                if (movie) {
                    this.router.navigate(['/movie']);
                } else {
                    this.errorMessage = 'Unable to delete movie';
                }

            },
            (err) => console.log(err));
    }
}