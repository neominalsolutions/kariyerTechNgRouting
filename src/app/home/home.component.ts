import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {

  // implements ile bu component için uygulamak zorunda olduğum kodları class eklemek durumundayım.
  // servislerinizi private yada public olarak constructor injection yapıcağız.
  constructor() { }

  // 2. yöntem async await keyword
  async ngOnInit() {
    // ecmascript 7 ile promise yerine async await yapısını kullanabiliriz.arada herhangi bir fark mevcut değildir.

    try {
      // kodun çalışma gerek halini try
      let response = await fetch('https://jsonplaceholder.typicode.com/todos');
      this.todos = await response.json();

      // this.todos.map(x=> {
      //   x.
      // })

      console.log('todos', this.todos);
    } catch (error) {
      console.log('error', error);
    } finally {
      alert('işlem tamamlandı')
    }


  }

  // angular component life cyle adında geçiyor.

  ngAfterViewInit(): void {
    // component domda oluştuktan sonra ngOnInit sonrası ilk tetiklenen method.
    // artık component oluştu. component oluştuktan sonra bu component altında çağırılan başka bir component varsa bu componentler tam sırada sayfaya yüklenir.
    // bir component içerisindeki child componentlere erişim sağladığımız hook.
  }

  ngOnDestroy(): void {
    // component domdan kaldırıldığında tetiklenir.
    // *ngIf varsa veya routing ile bir componentten başka bir componente geçiş varsa tetiklenir.
    // kullanma sebebimiz zamanlayıcı işlemleri açıp. arka planda belirli bir zaman diliminde çalışan servisleri burada durdurmalıyız. yoksa browser kaynağını tüketir.
    // rxJs ile bir service subscibe olduğumuz durumlarda. Bu servisin subscription temizle işlemlerini yine burada yaparız.
  }

  todos: Todo[] = [];

  // angularda component ilk doma yerleştiğirken önce constructor çalışır. ardından sayfa domdan kalkana kadar 1 kereye mahsus ngOnInit tetiklenir.

  // 1. Yöntem

  ngOnInit2(): void {
    // ilk servis çağırılarını apidan veri çekme işlemlerini bu scope da yapıcaz.

    // ya verileri async await mantıklı ecmascript 7 formatında çağırıcaz. ya js fetch api kullanarak ecmascript 6 formatında promise olarak kullanıcaz. yada angular builtin gelen rxjs kütüphanesi kullanıcaz.


    // resolve yada reject olabilir.

    // var promise = new Promise((resolve, reject) => {

    //   var x = 10;
    //   var y = 5;
    //   var z = x * y;

    //   if (z == 51) {
    //     resolve(z);
    //   } else {
    //     reject('hata meydana geldi')
    //   }

    // });

    // promise.then((response) => {
    //   console.log('response', response);
    // }).catch(err => {
    //   console.log('err', err);
    // }).finally(() => alert('işlem tamam'))

    // 1. yöntem ecmascript 6 versiyonu kullanarak promise mantığı ile veri çektik.

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => {
        console.log('todos', data);
        this.todos = [...data];
      }).catch(err => {
        console.log('err', err);
      });





  }



}
