import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeletenewService } from './deletenew.service';

@Component({
  selector: 'app-deletenew',
  templateUrl: './deletenew.component.html',
  styleUrls: ['./deletenew.component.css']
})
export class DeletenewComponent implements OnInit {

  idNew: String = "";
  url: String = "http://localhost:8080/new/";
  title: String = "";
  content: String = "";

  constructor(
      public router: Router,
      private activeted: ActivatedRoute,
      private deleteService: DeletenewService
    ) {}

  ngOnInit(): void {
    this.activeted.params.subscribe(
      params => this.idNew = params['idNew']
    );

    this.deleteService.loadNewId(this.url+this.idNew.toString()).subscribe(
      response => {
        this.title = response['title'];
        this.content = response['content'];
      }
    );
  }

  deleteNewById() {
    this.deleteService.deleteNewId(this.url+this.idNew.toString()).subscribe(
      response => console.log(response)
    );
    this.router.navigateByUrl("/").then(
      r => console.log('r: '+r)
    );
  }

}
