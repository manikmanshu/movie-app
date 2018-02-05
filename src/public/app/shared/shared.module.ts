import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PaginationComponent } from "./pagination/pagination.component";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [PaginationComponent],
    exports: [CommonModule, FormsModule, PaginationComponent]
})
export class SharedModule { }