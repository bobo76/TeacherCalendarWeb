import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
import { InformationsComponent } from './informations/informations.component';

import { MatIconModule } from '@angular/material/icon'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { CalendarComponent } from './calendar/calendar.component';

import { FillInDataComponent } from './fill-in-data/fill-in-data.component';
import { CalendarCellComponent } from './calendar-cell/calendar-cell.component';
import { DataService } from './_services/data.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: InformationsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'fillInData', component: FillInDataComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    InformationsComponent,
    UsersComponent,
    LoginComponent,
    CalendarComponent,
    FillInDataComponent,
    CalendarCellComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent],
})
export class AppModule { }
