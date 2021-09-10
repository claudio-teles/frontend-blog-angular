import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuerytagService } from './querytag.service';

@Component({
  selector: 'app-querytag',
  templateUrl: './querytag.component.html',
  styleUrls: ['./querytag.component.css']
})
export class QuerytagComponent implements OnInit {

  url = "http://localhost:8080/new/tag";
  tag = "";
  tags = "";
  listTags = [];
  news = [];

  constructor(public router: Router, private queryTag: QuerytagService) {}

  ngOnInit(): void {}

  addTag() {
    this.listTags.push(this.tag);
    this.tag = "";
  }

  search() {
    for (let i = 0; i < this.listTags.length; i++) {
      this.tags += (this.listTags[i] + ",")
    }

    this.queryTag.searchTag(this.url, this.tags).subscribe(
      response => {
        this.news = response;
        console.log(this.news);
      }
    );
  }

}
