import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { SearchPipe } from './parent/child/search.pipe';
import { SortPipe } from './parent/child/sort.pipe';

@NgModule({
    declarations: [
        AppComponent,
        ParentComponent,
        ChildComponent,
        SearchPipe,
        SortPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
