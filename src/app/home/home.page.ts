import { Component } from '@angular/core';

interface Country {
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
  
  languages: string[] = ["Русский", "English"]
  countries: Country[] = [
    {name: "Moscow", population: 20000},
    {name: "Domodedovo", population: 5000},
    {name: "Stupino", population: 3000}
  ] 
  
  constructor() {}

  isDarkTheme = false;
  Myname: string = "Dima"
  input_city: string = ""
  input_population: number | null = null

  btn_click() {
    this.Myname = this.Myname + this.input_city;
  }

  addCity() {
    if (this.input_city.trim() && this.input_population && this.input_population > 0) {
      const newCountry: Country = {
        name: this.input_city.trim(),
        population: this.input_population
      };
      
      this.countries.push(newCountry);
      

      this.input_city = "";
      this.input_population = null;
    }
  }
}