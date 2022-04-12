import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { BasehttpService } from './basehttp.service';

// constructor injection destekliyor.
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUri = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient, private httpBase: BasehttpService) { }

  // içerisinde tüm http verbleri barındırı.
  // Observable yani bu tip uygulama içerisinde bu servisi çağıracağımız componentlerden bu service subscribe oluyoruz.

  getTodos(): Observable<Todo[]> {
    // angular httpclient servislerini arkadaşlar rxjs kütüphanesi ile uyumlu yazılmış.
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getTodosPromise() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos').toPromise();
  }


  getTodosPromise2(): Promise<Todo[] | undefined> {
    return fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json());
  }


  getTodoById(id: string) {
    return this.httpBase.get(`${this.baseUri}/${id}`);
  }


}
