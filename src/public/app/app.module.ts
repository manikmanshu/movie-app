import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { appRouting } from "./app.routing";

import { CoreModule } from "./core/core.module";

import { SharedModule } from "./shared/shared.module";

@NgModule({
    imports: [
        BrowserModule,
        appRouting.routes,
        CoreModule,
        SharedModule,
    ],
    declarations: [AppComponent, appRouting.components],
    bootstrap: [AppComponent]
})
export class AppModule { }