import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularRoutingApp';
  // eğer angularda bir component.ts dosyası üzerinden başka bir angular component.ts dosyasına erişmek istersek bu durumda router denilen angular built-in service kullanırız.



  constructor(private router: Router) { }


  redirectToHome() {

    var result = window.confirm("Home sayfasına yönlenmek istediğinize emin misiniz?");

    if (result) {

      this.router.navigateByUrl('/home');

    } else {
      alert('işlem iptal edildi');
    }

  }
}
