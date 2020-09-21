import { Component, OnInit } from '@angular/core';
import { ResultList } from '../../models/result-list.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
  providers: [DataService]
})
export class ResultListComponent implements OnInit {
  public cards: Object[];
  public searchResult: ResultList;

  constructor(private Service: DataService ) { }

  public ngOnInit(): void {
    this.cards = this.Service.getData();
  }

}
