import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../model';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  menuList: MenuItem[] = [
    { icon: 'add_to_queue', route: 'fillInData', title: 'Activation' },
    { icon: 'account_box', route: 'users', title: 'Usagers' },
    { icon: 'computer', route: 'calendar', title: 'Calendrier' },
    { icon: 'lock_open', route: 'login', title: 'Login' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
