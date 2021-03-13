import {Injectable } from '@angular/core';
import {Nodemailer} from 'nodemailer'

@Injectable({
  providedIn: 'root'
})
export class EmailService {


  send(form:NodeListOf<HTMLElement>, body:NodeListOf<HTMLElement>){
    
  }

  constructor(private nodemailer : Nodemailer) { }
}
