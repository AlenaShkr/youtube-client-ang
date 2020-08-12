import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isShowCriteriaBlock: boolean = false;
  public isClickedButtonSearch: boolean;
  @Output() public clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  public onClicked($event: Event): void {
    this.clicked.emit();
    this.isClickedButtonSearch = true;
  }

  public handleClick(): void {
    this.isShowCriteriaBlock = !this.isShowCriteriaBlock;
  }

  public ngOnInit(): void {
  }

}
