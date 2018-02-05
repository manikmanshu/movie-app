import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    { path: '**', pathMatch:'full', redirectTo: '/' }
  ];

export const appRouting = { 
    routes: RouterModule.forRoot(routes),
    components: []
};