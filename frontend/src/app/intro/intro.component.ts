import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  @ViewChild('intro') private intro!:ElementRef;

  constructor(private router:Router) { }

  async ngOnInit(): Promise<void> {

    await this.intro;
    if(this.router.url!=="/"){
      this.intro.nativeElement.remove();
    }else{
      const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
      tl.to('.hide-text', { y: '0%', durations: 1, stagger: 0.25 })
      tl.to('.transition', { y: '-100%', durations: 1, delay: 0.5 })
      tl.to('.intro', { y: '-100%', durations: 1.5, }, "-=.3")
      tl.fromTo(".image",1,{height:"0%"},{height:"80%", ease:Power2.easeInOut},);
      tl.to(".image h1",{ opacity: '100%', durations: 1});
      
    }
  }

  hovered(){
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.fromTo(".image",1,{width:"100%"},{width:"80%", ease:Power2.easeInOut},);
  }

  unHovered(){
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.fromTo(".image",1,{width:"80%"},{width:"100%", ease:Power2.easeInOut},);
  }
}
