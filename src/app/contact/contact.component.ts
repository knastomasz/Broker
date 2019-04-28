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
  sendMessage = false;

  ngOnInit() {
    this.contactForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, Validators.required),
      message: new FormControl('Proszę o kontakt ...', [Validators.required, Validators.minLength(10)]),
    });

    this.contactForm.valueChanges.subscribe( () => {
      this.sendMessage = false;
    });
  }

  onSubmit() {
    this.submitForm();
    this.resetForm();
    this.successSendMessage(true);
  }

  submitForm() {
    this.message.firstName = this.contactForm.value.firstName;
    this.message.lastName = this.contactForm.value.lastName;
    this.message.email = this.contactForm.value.email;
    this.message.phone = this.contactForm.value.phone;
    this.message.message = this.contactForm.value.message;
  }

  resetForm() {
    this.contactForm.reset();
    this.contactForm.get('message').setValue('Proszę o kontakt ...');
  }

  successSendMessage(bool: boolean) {
    this.sendMessage = bool;
    console.log(this.sendMessage);
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
