import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchRequestComponent } from './components/search-request/search-request.component';
import { SortCriteriaListComponent } from './components/sort-criteria-list/sort-criteria-list.component';
import { ResultListComponent } from './components/result-list/result-list.component';
import { ResultCardComponent } from './components/result-card/result-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchRequestComponent,
    SortCriteriaListComponent,
    ResultListComponent,
    ResultCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
