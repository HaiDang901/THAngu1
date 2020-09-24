import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai6',
  templateUrl: './bai6.component.html',
  styleUrls: ['./bai6.component.css']
})
export class Bai6Component implements OnInit {

  constructor() { }
  s = [-1,-5,3,4,8,-43,10,25,65];
  tong=0;
  ngOnInit(): void {
    for(let i=0; i<this.s.length;i++)
    {
      if(this.s[i]>0)
      this.tong+=this.s[i];
    }
    console.log(this.tong)
  }


}
