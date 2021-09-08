import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  url: String = "http://localhost:8080/";

  title = '';

  constructor(public router: Router, private appService: AppService) {}

  ngOnInit() {
    this.appService.getWelcomeMessage(this.url).subscribe(
      response => {
        if (response['message'] === "Welcome!") {
          this.title = "Bem Vindo Ao Blog";
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
