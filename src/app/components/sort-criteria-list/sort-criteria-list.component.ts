import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-criteria-list',
  templateUrl: './sort-criteria-list.component.html',
  styleUrls: ['./sort-criteria-list.component.scss']
})
export class SortCriteriaListComponent implements OnInit {
  public link: string[] = ['name', 'count of view', '1'];

  constructor() { }
  public ngOnInit(): void {
  }

}
