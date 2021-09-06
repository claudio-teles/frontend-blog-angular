import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsupdate',
  templateUrl: './newsupdate.component.html',
  styleUrls: ['./newsupdate.component.css']
})
export class NewsupdateComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
