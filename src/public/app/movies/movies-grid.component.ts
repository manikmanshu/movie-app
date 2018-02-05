import { Component, Input, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { IMovie } from "../shared/interfaces";

@Component({
    selector: "movies-grid",
    templateUrl: "./movies-grid.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesGridComponent implements OnInit {
    @Input() movies: IMovie[] = [];

    ngOnInit() {

    }
}