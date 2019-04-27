import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

// tslint:disable-next-line: no-use-before-declare
  message = new ReactiveMessage();
  contactForm: FormGroup;

  ngOnInit() {
    this.contactForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, Validators.required),
      message: new FormControl('Prosze o kontakt ...', [Validators.required, Validators.minLength(10)]),
    });
  }

  onSubmit() {
    this.message.firstName = this.contactForm.value.firstName;
    this.message.lastName = this.contactForm.value.lastName;
    this.message.email = this.contactForm.value.email;
    this.message.phone = this.contactForm.value.phone;
    this.message.message = this.contactForm.value.message;
    this.contactForm.reset();
  }
}

class ReactiveMessage {
  constructor(
    public firstName?: string,
    public lastName?: string,
    public email?: string,
    public phone?: number,
    public message?: string,
  ) { }
}
