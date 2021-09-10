import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { PostviewingService } from './postviewing.service';

@Component({
  selector: 'app-postviewing',
  templateUrl: './postviewing.component.html',
  styleUrls: ['./postviewing.component.css']
})
export class PostviewingComponent implements OnInit {

  url: String = "http://localhost:8080/new/pages";
  urlDelete: String = "http://localhost:8080/new/";
  start = -1;
  quantityOfItens = 5;

  news = [];

  constructor(
      public router: Router, 
      private postviewingService: PostviewingService
    ) {}

  advanced = () => {
    document.getElementById("loading").style.display = "inline";
    this.start++;
    this.listPage(this.start.toString(), this.quantityOfItens.toString());
  }

  goBack = () => {
    document.getElementById("loading").style.display = "inline";
    this.start--;
    this.listPage(this.start.toString(), this.quantityOfItens.toString());
  }

  listPage = (i: String, f: String) => {
    this.postviewingService.listNewsPage(
      this.url, i, f
    ).subscribe(
      response => {
        this.news = response,
        console.log(this.news);
        document.getElementById("loading").style.display = "none";
      }
    );
  }

  ngOnInit() {}

}
