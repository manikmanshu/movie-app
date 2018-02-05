import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../core/data.service";
import { IMovie } from "../shared/interfaces";


@Component({
    selector: "movies",
    templateUrl: "./movies.component.html"
})
export class MoviesComponent implements OnInit {
    title: string;
    movies: IMovie[] = [];
    filteredMovies: IMovie[] = [];

    totalRecords: number = 0;
    pageSize: number = 10;

    constructor(private router: Router,
        private dataService: DataService) { }

    ngOnInit() {
        this.title = 'Movies';
        //this.getMovies(); // showing full list in one page
        this.getMoviePage(1);
    }

    getMovies() {
        this.dataService.getMovies()
            .subscribe((movies: IMovie[]) => {
                this.movies = this.filteredMovies = movies;
            },
            (err: any) => console.log(err));
    }

    getMoviePage(page: number) {
        this.dataService.getMoviePage((page - 1) * this.pageSize, this.pageSize)
            .subscribe((res: any) => {
                this.movies = this.filteredMovies = res.movies;
                this.totalRecords = res.count;
            },
            (err: any) => console.log(err));
    }

    pageChanged(page: number) {
        this.getMoviePage(page);
    }
}