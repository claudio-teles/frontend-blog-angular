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

  constructor(public router: Router, private searchTitle: SearchtytleService) {}

  ngOnInit() {}

  search = () => {
    this.searchTitle.searchNewTitle(this.url, this.title).subscribe(
      response => {
        this.news = response,
        console.log(this.news)
      }
    );
  }

}
