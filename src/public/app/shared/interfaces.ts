import { ModuleWithProviders } from "@angular/core";

export interface IMovie {
    _id?: string;
    name: string;
    imageUrl: string;
    releaseDate: string;
    genre: string;
    actors: IActor[];
    actorIds: any[];
    director: IDirector;
    directorId: number;
}

export interface IActor {
    _id?: string;
    name: string;
}

export interface IDirector {
    _id?: string;
    name: string;
}

export interface IRouting {
    routes: ModuleWithProviders,
    components: any[]
}