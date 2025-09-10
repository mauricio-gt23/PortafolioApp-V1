import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {

  modalCongrats: boolean = false;
  modalError: boolean = false;
  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  closeCongrats(): void {
    this.modalCongrats = false;
  }

  closeError(): void {
    this.modalError = false;
  }

  sendEmail(e: Event): void {
    if (this.miFormulario.valid) {
      emailjs.sendForm('service_5othmtm', 'template_4pic5ld', e.target as HTMLFormElement, 'SqrPmyw4aD-7NscTD')
      .then( () => {
        this.modalCongrats = true;
        this.miFormulario.reset();
      }, (error) => {
        console.log(error.text);
      });
    } else {
      this.modalError = true;
    }

  }
}
