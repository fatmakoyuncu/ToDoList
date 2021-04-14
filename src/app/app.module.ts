import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { MonthlyComponent } from './monthly/monthly.component';
import {RouterModule, Routes } from '@angular/router';
import { DatePipe } from '@angular/common';

const routes:Routes=[
  {path:"", component:TodosComponent},
  {path:"weekly", component:WeeklyComponent},
  {path:"monthly", component:MonthlyComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    WeeklyComponent,
    MonthlyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
