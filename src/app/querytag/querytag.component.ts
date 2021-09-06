import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-querytag',
  templateUrl: './querytag.component.html',
  styleUrls: ['./querytag.component.css']
})
export class QuerytagComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
