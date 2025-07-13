import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public email: string;

  constructor() {
    this.title = 'Manuel Beristain Palacios';
    this.subtitle = 'Desarrollador Front End';
    this.email = 'beristainpalacios@gmail.com';
  }

  ngOnInit(): void {

  }

}
