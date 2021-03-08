import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  onHover(github: HTMLElement) {
    console.log(github)
    github.setAttribute('src', '../../../assets/GitHub-Mark-64px.png')
  }

  unHover(github: HTMLElement) {
    github.setAttribute('src', '../../../assets/GitHub-Mark-120px-plus.png')
  }
  ngOnInit(): void {
  }

}
