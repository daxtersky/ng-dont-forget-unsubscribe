import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  firstSource$ = interval(100);
  secondSource$ = interval(200);
  thirdSource$ = interval(300);

  sub1 = new Subscription;
  sub2 = new Subscription;
  sub3 = new Subscription;

  ngOnInit() {
    console.log('init')

    this.sub1 = this.firstSource$.subscribe({
      next: (a) => console.log('a', a)
    });
    this.sub2 = this.secondSource$.subscribe({
      next: (b) => console.log('bb', b)
    });
    this.sub3 = this.thirdSource$.subscribe({
      next: (c) => console.log('ccc', c)
    });

    setTimeout(() => {
      this.sub1 && this.sub1.unsubscribe();
      this.sub2 && this.sub2.unsubscribe();
      this.sub3 && this.sub3.unsubscribe();
    }, 1000)
  }

}