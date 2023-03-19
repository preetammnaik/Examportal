import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

public user={
username:'',
password:'',
firstName:'',
lastName:'',
email:'',
phone:'',
}

formSubmit(){
alert('Submitted');
}

}
