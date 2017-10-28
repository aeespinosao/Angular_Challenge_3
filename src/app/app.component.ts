import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uri1 = 'https://api.icndb.com/jokes/random/';
  joke = 'Chuck Norris can win at solitaire with only 18 cards.';
  constructor(private http: Http) {
    setInterval(() => { this.http.get(this.uri1).subscribe(
      response => {
        this.joke = response.json().value.joke;
        console.log(this.joke);
      }
    ); }, 10000);
  }

}
