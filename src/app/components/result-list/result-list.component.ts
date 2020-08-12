import { Component, OnInit } from '@angular/core';
import { ResultList } from '../../models/result-list.model';
import * as dataFile from '../../../assets/data/data.json';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {
  public cards: Object[] = dataFile.items;
  public searchResult: ResultList;

  constructor() { }

  public ngOnInit(): void {
  }

}
