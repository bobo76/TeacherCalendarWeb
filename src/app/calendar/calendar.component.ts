import { Periode } from './../model/model';
import { Component, OnInit } from '@angular/core';
import { Calendar, eSpeciality } from '../model';
// import { CalendarCellComponent } from '../calendar-cell/calendar-cell.component';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  days: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  periodsId: number[] = [1, 2, 3, 4, 5];
  periodsLabels: string[] = [
    '8h10 - 9h10',
    '9h10 - 10h10',
    '10h30 - 11h30',
    '12h55 - 13h55',
    '14h15 - 15h15',
  ];

  constructor(private data: DataService) { }

  ngOnInit(): void { }

  startBuild() {
    this.data.startBuildSchedule(1).subscribe(nb => console.log(nb));
  }

  allClick() {
    console.log('allClick');
    this.data.getBestActualResult(1).subscribe(result => {
      console.log(result)
    });
  }
  sportClick() {
    console.log('sportClick');
    this.data.getBestActualResult(1).subscribe(result => {
      console.log(this.filter(result, 'Sport'));
    });
  }

  englishClick() {
    console.log('englishClick');
    this.data.getBestActualResult(1).subscribe(result => {
      console.log(this.filter(result, 'English'));
    });
  }

  musicClick() {
    console.log('musicClick');
    this.data.getBestActualResult(1).subscribe(result => {
      console.log(result);
      console.log(this.filter(result, 'Music'));
    });
  }

  filter(calendars: Calendar[], filter: string): Calendar | undefined {

    return calendars.find(c => {
      console.log(c.specialityClass);
      return c.specialityClass?.name === filter;
    });
  }

  getPeriode(day: string, period: number): Periode {
    return {
      dayIx: +day - 1,
      periodIx: period,
      isOff: false,
      ClassGroup: undefined,
    };
  }
}
