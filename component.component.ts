import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  constructor() { }
  Morningfellas = 'Morning Fellas, have a great day';
  color: string ;
  ngOnInit(): {}
  changecolor(monnouveaucouleur: string) {
    this.color = monnouveaucouleur;
  }
  setdefaultcolor(): void {
this.color = 'blue';
  }
}
