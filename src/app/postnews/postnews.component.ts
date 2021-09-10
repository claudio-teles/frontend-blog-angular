import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PostnewsService } from './postnews.service';

@Component({
  selector: 'app-postnews',
  templateUrl: './postnews.component.html',
  styleUrls: ['./postnews.component.css']
})
export class PostnewsComponent implements OnInit {

  constructor(public router: Router, private postNew: PostnewsService) { }

  url = "http://localhost:8080/new";
  tag = "";
  tagList:Array<String> = [];
  listObjectTags: Array<Object> = [];

  sucess: Boolean = false;
  erro: Boolean = false;

  date: String = new Date().toISOString();

  addTag () {
    this.tagList.push(this.tag);
    this.tag = "";
  }

  generateArrayTags(): Array<Object> {
    for (let i = 0; i < this.tagList.length; i++) {
      this.listObjectTags.push({value: this.tagList[i]});
    }
    return this.listObjectTags;
  }

  new = {
    authorName: {
      authorsName: "",
      gender: ""
    },
    comments: [],
    content: "",
    dateTime: this.date,
    tags: this.listObjectTags,
    title: ""
  }

  ngOnInit() {
    
  }

  onSubmit() {
    this.generateArrayTags();

    this.postNew.sendNew(this.url, this.new).subscribe(
      value => {
        if (value['idNew'] !== null) {
          this.sucess = true;
        }
        console.log(value)
      },
      error => {
        if (error['status'] === 400) {
          this.erro = true;
        }
        console.log(error)
      }
    );
  }

}
