import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchtytle',
  templateUrl: './searchtytle.component.html',
  styleUrls: ['./searchtytle.component.css']
})
export class SearchtytleComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
