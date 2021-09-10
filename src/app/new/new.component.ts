import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NewService } from './new.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(public router: Router, private newService: NewService, private activeatedRoute: ActivatedRoute) {}

  idNew: String = "";

  commentsNew = [];

  comment = {
    author: {
      authorsName: "",
      gender: ""
    },
    content: "",
    date: new Date().toISOString()
  }

  new =  {
    authorName: {
      authorsName: "",
      gender: ""
    },
    comments: [],
    content: "",
    dateTime: "",
    tags: [],
    title: ""
  }

  addComments() {
    this.commentsNew.push(this.comment);
    this.new.comments = this.commentsNew
    this.onSubmit();
  }

  ngOnInit(): void {
    this.activeatedRoute.params.subscribe(
      params => this.idNew = params['idNew']
    );

    this.newService.getNew("http://localhost:8080/new/"+this.idNew.toString()).subscribe(
      response => {
        this.new.authorName.authorsName = response['authorName']['authorsName'];
        this.new.authorName.gender = response['authorName']['gender'];
        this.commentsNew = response['comments'];
        this.new.comments = response['comments'];
        this.new.content = response['content'];
        this.new.dateTime = response['dateTime'];
        this.new.tags = response['tags'];
        this.new.title = response['title'];
      }
    );
  }

  onSubmit() {
    this.newService.sendNew("http://localhost:8080/new/"+this.idNew.toString(), this.new).subscribe(
      response => console.log(response)
    );
  }

}
