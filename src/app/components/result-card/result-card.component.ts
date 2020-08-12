import { Component, OnInit, Input } from '@angular/core';
import { ResultCard } from '../../models/result-card.model';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss'],
})

export class ResultCardComponent implements OnInit {
  public resultCard: ResultCard;
  @Input() public card: ResultCard;

  constructor() { }

  public ngOnInit(): void {
  }
}
