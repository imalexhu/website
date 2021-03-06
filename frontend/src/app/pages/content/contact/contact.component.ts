import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { EmailService } from 'src/app/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild("form") form!:ElementRef
  @ViewChild("submitted") submitted!:ElementRef

  constructor(private emailService:EmailService, private render:Renderer2) { }

  ngOnInit(): void {
  }

  async submit(){
    await this.form
    await this.submitted

    let form = document.querySelectorAll('input')
    let textArea = document.querySelectorAll('textarea')
    
    await this.emailService.send(form,textArea);


    this.form.nativeElement.remove()
    console.log(this.submitted)
    this.render.setStyle(this.submitted.nativeElement,'display','block')
  }
  async discard(){
    let form = document.querySelectorAll('input')
    let textArea = document.querySelectorAll('textarea')

    form.forEach(element=> element.value = "")
    textArea.forEach(element=> element.value = "")
  }

}
