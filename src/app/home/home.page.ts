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
  countries: Country[]=[
    {name: "Moscow", population: 20000},
    {name: "Domodedovo", population: 5000},
    {name: "Stypino", population: 3000}
  ] 
  constructor() {

  }
  isDarkTheme = false;

  Myname: string = "Dima"
  btn_click(){
    this.Myname = this.Myname + "1"
  }
}
 