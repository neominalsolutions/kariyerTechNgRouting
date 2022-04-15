import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  // ActivatedRoute angularda şuan yönlendiğimiz componenti temsil eden servisimiz
  // seo bazlı işlemler yapmamızı sağlayan servislerimizdir.

  constructor(private activatedRoute: ActivatedRoute, private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    console.log('activatedRoute', this.activatedRoute);
    const params = this.activatedRoute.snapshot.params;
    console.log('params', params);
    const queryParams = this.activatedRoute.snapshot.queryParams;
    console.log('queryParams', queryParams);
  
    // apiden servise bağlanıp veri çekeriz.


    this.activatedRoute.data.subscribe(res => {
      this.title.setTitle(res['title']);
      let tag: MetaDefinition = {
        content: res['metaTags']
      }
      console.log('tag', tag);

      this.meta.addTag(tag);

    })


  }

}
