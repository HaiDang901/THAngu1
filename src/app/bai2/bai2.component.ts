import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css']
})
export class Bai2Component implements OnInit {

  constructor() { }
  s=0;
  n: any;
  x: any;
  ngOnInit(): void {
  }
  tinh(){
    let tmp=1;
    for(let i=1;i<=this.n;++i){
        this.s= this.s+ (Math.pow(-1,i))*(Math.pow(this.x,i)/lythua(i));
    }
  }
}
function lythua(a: number) {
  let lythua=1;
  for (let i = 1; i <=a; i++) {
    lythua*=i;
  }
  return lythua;
}
