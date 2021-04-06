import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.scss']
})
export class WeeklyComponent implements OnInit {

  result: number;
  index= [0,1,2,3];
  day = ["M", "T", "W", "T", "F", "S", "S"];
  days = ["onday", "huesday", "ednesday", "hursday", "riday", "aturday", "unday"]

  constructor() { }

  ngOnInit(): void {

    this.getWeekNumber();
    
  }

  getWeekNumber(){   
    const today = new Date();
    const oneJan = new Date(today.getFullYear(),0,1);
    const numOfDays = Math.floor((today.valueOf()-oneJan.valueOf())/86400000);

    this.result = Math.ceil((today.getDay()+1+numOfDays)/7);
    console.log(this.result);
    console.log(today.toDateString());
  }


}
