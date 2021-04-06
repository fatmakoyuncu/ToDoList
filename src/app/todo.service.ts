import { Injectable } from '@angular/core';


export interface ITodo {
  date: Date;
  content: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todos: ITodo[] = [
    {
      date: new Date("Wed Apr 07 2021 12:34:57"),
      content: 'Ekmek Al',
      completed: false
    },
    {
      date: new Date("Mon Apr 05 2021 07:44:57"),
      content: 'Ders Çalış',
      completed: false
    },
    {
      date: new Date("Fri Apr 02 2021 07:44:57"),
      content: 'Yemek Yap',
      completed: false
    },
    {
      date: new Date("Tue Mar 22 2021 07:00:00"),
      content: 'Spor Yap',
      completed: false
    },
    {
      date: new Date("Tue Mar 13 2021 17:44:57"),
      content: 'Kahve İç',
      completed: false
    },
    {
      date: new Date("Tue Mar 02 2021 07:44:57"),
      content: 'Yürüyüş Yap',
      completed: false
    }
  ]
}





