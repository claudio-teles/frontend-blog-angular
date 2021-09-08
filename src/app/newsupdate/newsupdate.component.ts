import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsupdate',
  templateUrl: './newsupdate.component.html',
  styleUrls: ['./newsupdate.component.css']
})
export class NewsupdateComponent implements OnInit {

  constructor(public router: Router) { }

  tag: string = ""
  tagList:Array<String> = [];

  addTag () {
    this.tagList.push(this.tag);
    this.tag = "";
  }

  new = {
    authorName: {
      authorsName: "",
      gender: ""
    },
    comments: [],
    content: "",
    dateTime: new Date().getFullYear().toString()+"-"+new Date().getMonth().toString()+"-"+new Date().getDate().toString()+"T"+new Date().getMinutes().toString()+":"+new Date().getSeconds() .toString()+":"+new Date().getMilliseconds().toString(),
    tags: this.tagList,
    title: ""
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.new);
  }

}
