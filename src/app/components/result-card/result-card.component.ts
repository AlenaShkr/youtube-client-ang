import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultCard } from '../../models/result-card.model';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss'],
})

export class ResultCardComponent implements OnInit {
  public resultCard: ResultCard;
  public cardId: number;
  @Input() public card: ResultCard;

  constructor(public route: ActivatedRoute) { }

  public ngOnInit(): void {

  }
  public showInfo() {
    console.log('Log Snapshot:');
  }
}
