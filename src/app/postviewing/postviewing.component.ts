import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postviewing',
  templateUrl: './postviewing.component.html',
  styleUrls: ['./postviewing.component.css']
})
export class PostviewingComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
