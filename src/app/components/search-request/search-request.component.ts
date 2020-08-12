import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import * as dataFile from '../../../assets/data/data.json';

@Component({
  selector: 'app-search-request',
  templateUrl: './search-request.component.html',
  styleUrls: ['./search-request.component.scss']
})

export class SearchRequestComponent implements OnInit {
  @Output() public clicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  public data: Object[] = dataFile.items;

  constructor() { }

  public ngOnInit(): void {
  }

  public handleClick(valueRequest: string): void {
    this.clicked.emit();
  }
}
