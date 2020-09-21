import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sort-criteria-list',
  templateUrl: './sort-criteria-list.component.html',
  styleUrls: ['./sort-criteria-list.component.scss'],
  providers: [DataService]
})
export class SortCriteriaListComponent implements OnInit {
  public link: string[] = ['name', 'count of view', '1'];
  public cards: Object[];
  public orderCountView: number = - 1;
  public orderPublishedDate: number = - 1;

  constructor(private Service: DataService) { }
  public ngOnInit(): void {
    this.cards = this.Service.getData();
  }

  public onFilterByDate() {
    this.orderPublishedDate = this.orderPublishedDate * -1;
    return this.cards.sort( (a, b) => this.orderPublishedDate * (Date.parse(a['snippet'].publishedAt) - Date.parse(b['snippet'].publishedAt)));
  }

  public onFilterByCountView() {
    this.orderCountView = this.orderCountView * -1;
    this.cards.sort( (a, b) => this.orderCountView * (a['statistics'].viewCount - b['statistics'].viewCount));
    return this.cards;
  }

}
