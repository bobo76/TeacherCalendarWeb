import { Component, OnInit } from '@angular/core';
import { CalendarCellComponent } from '../calendar-cell/calendar-cell.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  days: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  periodsId: string[] = ['1', '2', '3', '4', '5'];
  periodsLabels: string[] = [
    '8h10 - 9h10',
    '9h10 - 10h10',
    '10h30 - 11h30',
    '12h55 - 13h55',
    '14h15 - 15h15',
  ];

  constructor() {}

  ngOnInit(): void {}

  sportClick() {
    console.log('sportClick');
  }

  englishClick() {
    console.log('englishClick');
  }

  musicClick() {
    console.log('musicClick');
  }
}
