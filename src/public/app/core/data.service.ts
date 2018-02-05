import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IMovie, IActor, IDirector } from "../shared/interfaces";
@Injectable()
export class DataService {
    baseUrl: string = "/api/movie";

    constructor(private http: HttpClient) { }

    getMovies(): Observable<IMovie[]> {
        return this.http.get(this.baseUrl)
            .map((res: any) => {
                return res.movies;
            })
            .catch(this.handleError);
    }

    getMovie(id: string): Observable<IMovie> {
        return this.http.get(this.baseUrl + "/" + id)
            .map((res: any) => {
                return res.movie;
            })
            .catch(this.handleError);
    }

    getMoviePage(skip: number, pageSize: number) {
        return this.http.get(`${this.baseUrl}/page/${skip}/${pageSize}`)
            .map((res: any) => {
                return res;
            })
            .catch(this.handleError);
    }
    insertMovie(movie: IMovie): Observable<IMovie> {
        return this.http.post(this.baseUrl, movie)
            .map((movie: IMovie) => {
                return movie;
            })
            .catch(this.handleError);
    }

    updateMovie(movie: IMovie): Observable<IMovie> {
        return this.http.patch(this.baseUrl + "/" + movie._id, movie)
            .map((movie: IMovie) => {
                return movie;
            })
            .catch(this.handleError);
    }

    deleteMovie(id: string): Observable<IMovie> {
        return this.http.delete(this.baseUrl + "/" + id)
            .map((movie: IMovie) => {
                return movie;
            })
            .catch(this.handleError);
    }

    getActors(): Observable<IActor[]> {
        return this.http.get('/api/actor')
            .map((res: any) => res.actors)
            .catch(this.handleError);
    }

    getDirectors(): Observable<IDirector[]> {
        return this.http.get('/api/director')
            .map((res: any) => res.directors)
            .catch(this.handleError);
    }

    getGenres(): Observable<any[]> {
        return this.http.get('/genres')
            .map((res: any) => res)
            .catch(this.handleError);
    }

    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            let errMessage = error.error.message;
            return Observable.throw(errMessage);
            // Use the following instead if using lite-server
            //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Node.js server error');
    }
}