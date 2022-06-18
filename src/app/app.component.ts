import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  loginForm = new FormGroup({
    name : new FormControl('', [Validators.required]),
    password: new FormControl('',[Validators.required])
  });

  submit(){
    console.log(this.loginForm);
  }
}
