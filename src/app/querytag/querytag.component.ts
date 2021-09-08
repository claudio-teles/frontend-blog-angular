import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-querytag',
  templateUrl: './querytag.component.html',
  styleUrls: ['./querytag.component.css']
})
export class QuerytagComponent implements OnInit {

  constructor(public router: Router) { }

  news = [
    {
      authorName: {
        authorsName: "authorsName 1",
        gender: "MALE",
        idAuthor: 1
      },
      comments: [
        {
          author: {
            authorsName: "Reader 1",
            gender: "FEMALE",
            idAuthor: 1
          },
          content: "Comment 1",
          date: "2021-09-04T17:33:47.026Z",
          idComment: 1
        },
        {
          author: {
            authorsName: "Reader 2",
            gender: "MALE",
            idAuthor: 2
          },
          content: "Comment 2",
          date: "2021-09-04T17:33:47.026Z",
          idComment: 2
        }
      ],
      content: "Content 1",
      dateTime: "2021-09-04T17:33:47.026Z",
      idNew: 1,
      tags: [
        {
          idTag: 1,
          value: "Tag 1"
        },
        {
          idTag: 2,
          value: "Tag 2"
        },
        {
          idTag: 3,
          value: "Tag 3"
        }
      ],
      title: "Title 1"
    }
  ]

  ngOnInit(): void {
  }

  onSubmit(): void {
    
  }

}
