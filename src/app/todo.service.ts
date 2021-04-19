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
      date: new Date("Tue   Apr 13 2021 07:44:57"),
      content: 'Ders Çalış',
      completed: false
    },
    {
      date: new Date("Fri Mar 20 2021 07:44:57"),
      content: 'Yemek Yap',
      completed: false
    },
    {
      date: new Date("Fri Apr 16 2021 07:44:57"),
      content: 'Kitap Oku',
      completed: false
    },
    {
      date: new Date("Fri Apr 11 2021 07:44:57"),
      content: 'Alışveriş Yap',
      completed: false
    },
    {
      date: new Date("Fri Apr 05 2021 07:44:57"),
      content: 'Dikiş',
      completed: false
    },
    {
      date: new Date("Fri Apr 12 2021 07:44:57"),
      content: 'Kitap Oku',
      completed: false
    },
    {
      date: new Date("Tue Mar 22 2021 07:00:00"),
      content: 'Spor Yap',
      completed: false
    },
    {
      date: new Date("Tue Mar 29 2021 17:44:57"),
      content: 'Kahve İç',
      completed: false
    },
    {
      date: new Date("Tue Mar 1 2021 17:44:57"),
      content: 'Resim Yap',
      completed: false
    }
  ]
}





