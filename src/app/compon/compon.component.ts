import { Component } from '@angular/core';

@Component({
  selector: 'app-compon',
  templateUrl: './compon.component.html',
  styleUrls: ['./compon.component.css']
})
export class ComponComponent  {

  name: string = "Mariana";
  age: number = 22;
  lastName: string = "Tsapiv";
  job: string = "Ful-stack developer";
  company: string = "Some other";
  isShow: boolean = false;
  isShow1: boolean = false;

  showDiv() {
    this.isShow = true;
}

showDiv1() {
  this.isShow1 = true;
}

closeDiv() {
  this.isShow = false;
}

skills: any = ['angular', 'java', 'JS', 'MongoDB', 'AWS'];

addElement() {
    this.skills.push(this.newElement);
}

}
