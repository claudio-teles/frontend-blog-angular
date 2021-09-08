import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(public router: Router) { }

  new =  {
    authorName: {
      authorsName: "string",
      gender: "MALE",
      idAuthor: 0
    },
    comments: [
      {
        author: {
          authorsName: "string",
          gender: "MALE",
          idAuthor: 0
        },
        content: "string",
        date: "2021-09-04T17:33:47.026Z",
        idComment: 0
      }
    ],
    content: "string",
    dateTime: "2021-09-04T17:33:47.026Z",
    idNew: 0,
    tags: [
      {
        idTag: 0,
        value: "string"
      }
    ],
    title: "string"
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    
  }

}
