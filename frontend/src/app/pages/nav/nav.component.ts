import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { ContentComponent } from '../content/content.component';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  url:string = "";

  constructor(private router: Router, private render: Renderer2, private route:ActivatedRoute) {

   }

  // @ViewChild('.path') path!:ElementRef

  onHover(github: HTMLElement) {
    let icon = github.children[0]
    icon.setAttribute('src', '../../../assets/GitHub-Mark-64px.png')
    this.render.setStyle(icon, "width", "800px")
    this.render.setStyle(icon, "height", "auto")
    console.log(icon);
  }

  unHover(github: HTMLElement) {
    github.children[0].setAttribute('src', '../../../assets/GitHub-Mark-120px-plus.png')
  }

  //Deletes the about-me section in content 
  removeContent(){
    let temp = this.route.parent?.children[0]
    console.log(temp)
  }


  async ngOnInit(): Promise<void> {
    
    await this.removeContent()


    this.router.events.subscribe((res)=>{
      if(res instanceof NavigationStart){
        this.url = res.url
      }
    })


    /*Sets it so that when a sub catergory is clicked the logo load 
    speed is not dependant on the hardcoded css
    This makes the logo loading a bit smoother*/
    const svg = document.querySelector('.name');
    const paths = svg!.querySelectorAll<HTMLElement>('.path')
    if (this.router.url !== "/") {
      let delay = 0
      for (let i = 0; i < paths.length; i++) {
        this.render.setStyle(paths[i], "animation", "dash 3.75s linear")

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