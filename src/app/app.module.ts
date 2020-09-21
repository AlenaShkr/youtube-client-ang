import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchRequestComponent } from './components/search-request/search-request.component';
import { SortCriteriaListComponent } from './components/sort-criteria-list/sort-criteria-list.component';
import { ResultListComponent } from './components/result-list/result-list.component';
import { ResultCardComponent } from './components/result-card/result-card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BorderDownColourDependOnPublishDatePipe } from './pipes/border-down-colour-depend-on-publish-date.pipe';
import { BorderDownDependOnPublishDateDirective } from './directives/border-down-depend-on-publish-date.directive';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchRequestComponent,
    SortCriteriaListComponent,
    ResultListComponent,
    ResultCardComponent,
    BorderDownColourDependOnPublishDatePipe,
    BorderDownDependOnPublishDateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
