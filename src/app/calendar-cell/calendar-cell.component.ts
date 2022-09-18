import { Component, Input, OnInit } from '@angular/core';
import { Periode } from '../model';

@Component({
  selector: 'app-calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.scss'],
})
export class CalendarCellComponent implements OnInit {
  @Input() day: string;
  @Input() periode: Periode;

  constructor() {}

  ngOnInit(): void {}
}
