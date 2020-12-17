import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { ResultListComponent } from './components/result-list/result-list.component';

const routes: Routes = [
  {path: 'card', component: ResultListComponent},
  {path: 'card/:id', component: ResultCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
