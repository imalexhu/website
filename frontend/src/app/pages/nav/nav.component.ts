import { animation } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router: Router, private render: Renderer2) { }

  // @ViewChild('.path') path!:ElementRef

  onHover(github: HTMLElement) {
    github.children[0].setAttribute('src', '../../../assets/GitHub-Mark-64px.png')
  }

  unHover(github: HTMLElement) {
    github.children[0].setAttribute('src', '../../../assets/GitHub-Mark-120px-plus.png')
  }


  async ngOnInit(): Promise<void> {


    /*Sets it so that when a sub catergory is clicked the logo load 
    speed is not dependant on the hardcoded css
    This makes the logo loading a bit smoother*/
    const svg = document.querySelector('.name');
    const paths = svg!.querySelectorAll<HTMLElement>('.path')
    if (this.router.url !== "/") {
      let delay = 0
      for (let i = 0; i < paths.length; i++) {
        this.render.setStyle(paths[i], "animation", "dash 3.25s linear")

        this.render.setStyle(paths[i], "animation-delay", `${delay}s`)
        delay -= 0.25;
      }
    }

    /*Make it so that based on the endpoint of the website, the icon will be lighted up*/
    const linkText = document.querySelectorAll('.link-text')
    const iconSvgs = document.querySelectorAll('.icon');
    
    switch (this.router.url) {
      case "/about-me":
        for(let i =0; i <iconSvgs[0].children.length;i++){
          this.render.setStyle(iconSvgs[0].children[i], "fill", "#fa9236")
          this.render.setStyle(iconSvgs[0].children[i], "stroke", "#fa9236")
        }
        this.render.setStyle(linkText[0], "color", "#fa9236")
        break;
      case "/projects":
        for(let i =0; i <iconSvgs[1].children.length;i++){
          this.render.setStyle(iconSvgs[1].children[i], "fill", "#fa9236")
          this.render.setStyle(iconSvgs[1].children[i], "stroke", "#fa9236")
        }
        this.render.setStyle(linkText[1], "color", "#fa9236")
        break;
      case "/general":
        for(let i =0; i <iconSvgs[2].children.length;i++){
          this.render.setStyle(iconSvgs[2].children[i], "fill", "#fa9236")
          this.render.setStyle(iconSvgs[2].children[i], "stroke", "#fa9236")
        }
        this.render.setStyle(linkText[2], "color", "#fa9236")
        break;
    }
  }
  goToGithub(){
    window.location.href="https://github.com/imalexhu"
  }
}