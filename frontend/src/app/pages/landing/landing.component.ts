import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
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
    }
  }

}
