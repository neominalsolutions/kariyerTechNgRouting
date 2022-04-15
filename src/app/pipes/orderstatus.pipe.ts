import { Pipe, PipeTransform } from '@angular/core';

//pipe ismi
@Pipe({
  name: 'orderstatus'
})
export class OrderstatusPipe implements PipeTransform {

  // value değeri bu pipe gönderilecek olan değer, argumans ise pipe geçilecek olan ekstra parametreler.
  transform(value: string | undefined): string {

    switch (value) {
      case 'Completed':
        value =  'Sipariş Tamamlandı!'
        break;
      case 'Not Completed':
        value = 'Sipariş Tamamlanmadı!'
        break;
      case 'Shipped':
        value = "Dağıtıma Çıktı"
        break;
      default:
        value = "Sipariş Başlatıldı"
        break;
    }

    return value;
  }

}
