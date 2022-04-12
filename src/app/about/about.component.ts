import { Component, OnInit } from '@angular/core';
import { map, Observable, of, take, takeUntil } from 'rxjs';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  // providers: [TodoService] transient
})
export class AboutComponent implements OnInit {


  // todoService component ile birlikte doma basılırken instance alınır transient çalışır.
  // bu component özgü başka component bu service kullanmayacak ise mantıklı fakat. Birden fazla service bu service tüketecek ise mantıksız bir yaklaşım omuş olur.

  todos: Todo[] = [];
  todo$: Observable<Todo[]> | undefined;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {

    // promise deki resolve gibi çalışır.
    this.todoService.getTodos().subscribe(response => {
      this.todos = [...response.slice(0, 5)];
    })

    // this.todo$ = this.todoService.getTodos();


    // this.todoService.getTodoById('1').subscribe(res => {
    //   console.log('getTodoById', res);
    // })


    // //emit 1,2,3,4,5
    // const source = of(1, 2, 3, 4, 5);
    // //take the first emitted value then complete
    // const example = source.pipe(take(3));
    // //output: 1
    // const subscribe = example.subscribe(val => console.log('val', val));

    // // todo$ ts dosyasında manupule etme işlemleri varsa ya pipe kullanarak bunu yapıcaz yada subscribe olarak veriyi çektikten sonrasında manuple edebiliriz.
    // this.todoService.getTodos().pipe(take(5)).subscribe(response => {
    //   console.log('res', response)
    // });

  }

}
