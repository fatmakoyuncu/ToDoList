import { Injectable } from '@angular/core';


export interface ITodo {
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
      content: 'Ekmek Al',
      completed: false
    },
    {
      content: 'Ders Çalış',
      completed: false
    },
    {
      content: 'Yemek Yap',
      completed: false
    },
    {
      content: 'Spor Yap',
      completed: false
    },
    {
      content: 'Kahve İç',
      completed: false
    },
    {
      content: 'Yürüyüş Yap',
      completed: false
    }
  ]
}





