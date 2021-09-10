import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchtytleService } from './searchtytle.service';

@Component({
  selector: 'app-searchtytle',
  templateUrl: './searchtytle.component.html',
  styleUrls: ['./searchtytle.component.css']
})
export class SearchtytleComponent implements OnInit {

  url = "http://localhost:8080/new/title";

  title = "";

  news = [];

  erro = false;

  constructor(public router: Router, private searchTitle: SearchtytleService) {}

  ngOnInit() {}

  search = () => {
    document.getElementById("loading").style.display = "inline";
    this.searchTitle.searchNewTitle(this.url, this.title).subscribe(
      response => {
        this.news = response;
        console.log(this.news);
        document.getElementById("loading").style.display = "none";
        if (response.length === 0) {
          this.erro = true;
        }
      },
      error => {
        if (error) {
          document.getElementById("loading").style.display = "none";
          this.erro = true;
        }
      }
    );
  }

}
