import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, from, fromEvent, interval, map, merge, of, take } from 'rxjs';

@Component({
  selector: 'app-observables-and-operators',
  templateUrl: './observables-and-operators.component.html',
  styleUrls: ['./observables-and-operators.component.scss']
})
export class ObservablesAndOperatorsComponent implements OnInit,OnDestroy{

  ngOnInit(): void {
    // this.sub = this.obs.subscribe({
    //   next: (value) => console.log(value),
    //   error: (error) => console.log(error),
    //   complete: () => console.log('complete')
    // });

    // //next => success
    // this.obs.subscribe(value => console.log(value));

    // let obs1 = new Observable((observable:any)=>{
    //   observable.new("This is 1");
    // });
    // let obs2 = new Observable((observable:any)=>{
    //   observable.new("This is 2");
    // });
    // let obs3 = merge(obs1, obs2);
    // obs3.subscribe(value => console.log(value));

    // of(1,2,3).subscribe(value => console.log(value));
    // from([4,5,6]).subscribe(value => console.log(value));

    // let obs = of("hello kareem");
    // // this.sub = obs.pipe(map(data=> console.log(data.toUpperCase()))).subscribe(value=> console.log(value));
    // this.sub = obs.pipe(map(data=> console.log(data.toUpperCase().includes('EE')))).subscribe(value=> console.log(value));

    // let obs1 = fromEvent(document, 'click');
    // obs1.subscribe(value => console.log("You Clicked"));

    // let obs1 = fromEvent(document, 'click');
    // obs1.pipe(take(2)).subscribe(value => console.log("You Clicked"));


  }

  sub!: Subscription;
  //return object
  // obs = new Observable(observer =>{
  //   console.log('Observable Started');
  //   setTimeout(()=>{
  //     observer.next("1");
  //   },1000);
  //   setTimeout(()=>{
  //     observer.next("2");
  //   },2000);
  //   setTimeout(()=>{
  //     observer.next("3");
  //   },2000);
  //   setTimeout(()=>{
  //     observer.error('Error Emited');
  //   },3000);
  //   setTimeout(()=>{
  //     observer.next("4");
  //   },2000);
  //   setTimeout(()=>{
  //     observer.complete();
  //   },2000);
  // });
  ngOnDestroy(): void {
    // this.sub?.unsubscribe();
    console.log("Stopping Observables");
  }
}
