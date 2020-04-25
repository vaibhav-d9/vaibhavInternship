import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Userdetails } from '../data/user-details';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  originalUserdetails:Userdetails = {
    firstname:null,
    lastname:null,
    username:null,
    password:null,
    date:null,
    country:null
  }

  userdetails : Userdetails = { ...this.originalUserdetails}
  constructor() { }

  ngOnInit() {
  }

  onSubmit (form : NgForm) {
    console.log('in onSubmit :', form.valid);
  }

}
