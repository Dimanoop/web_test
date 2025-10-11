import { Component } from '@angular/core';
interface Country{
  name: string
  population: number
}

@Component({
  
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  languages:string[] = ["Русский", "English"]
  constructor() {}
  Myname: string = "Dima"
  btn_click(){
    this.Myname = this.Myname + "1"
  }
}
