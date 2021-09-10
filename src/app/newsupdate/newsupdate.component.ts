import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsupdateService } from './newsupdate.service';

@Component({
  selector: 'app-newsupdate',
  templateUrl: './newsupdate.component.html',
  styleUrls: ['./newsupdate.component.css']
})
export class NewsupdateComponent implements OnInit {

  constructor(public router: Router, private activatedRouted: ActivatedRoute, private newUpdateService: NewsupdateService) {}

  idNew: String = "";
  urlGet = "http://localhost:8080/new/";
  urlUpdate = "http://localhost:8080/new/";
  tag = "";
  tagList:Array<String> = [];
  listObjectTags: Array<Object> = [];

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
    idNew: 0,
    tags: [],
    title: ""
  }

  ngOnInit(){
    this.generateArrayTags();
    this.activatedRouted.params.subscribe(
      params => {
        this.idNew = params['idNew'].toString();
      }
    );

    console.log(this.urlGet);

    this.newUpdateService.getNew(this.urlGet+this.idNew).subscribe(
      response => {
        this.new.authorName.authorsName = response['authorName']['authorsName'];
        this.new.authorName.gender = response['authorName']['gender'];
        this.new.comments = response['comments'];
        this.new.content = response['content'];
        this.new.tags = response['tags'];
        this.new.idNew = response['idNew'];
        this.new.title = response['title'];
      }
    );
    console.log(this.new);
  }

  onSubmit(): void {
    this.generateArrayTags();

    this.newUpdateService.updateNew(this.urlUpdate+this.idNew+"/update", this.new).subscribe(
      response => console.log(response)
    );
  }

}
