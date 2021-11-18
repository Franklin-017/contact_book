import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}
  defaultImage: string = '../assets/profile-img.png';
  name: string= '';
  email: string= '';
  phoneNumber: string = '';
  image: string= '';

  contacts: Array<any> = [];

  addContact() {
    if (this.name && this.email && this.phoneNumber && this.phoneNumber.length === 10) {
      this.contacts.push({
        name: this.name,
        email: this.email,
        phoneNumber: this.phoneNumber,
        image: this.image || '',
      })
    }
    this.name= '';
    this.email= '';
    this.phoneNumber = '';
    this.image= '';
  }

}
