import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  storedData :any ='';
  parsedData : any ='';
  loginData = {
    email: '',
    password: '',
    rememberMe: ''
  };

  constructor(private router: Router) {}

  // onSubmit() {
  //   debugger
  //   console.log('Login Data:', this.loginData);
  //   // Add logic to authenticate the user
  //   this.router.navigate(['/home']);  }
  onSubmit() {
     
    // Get the JSON string from localStorage
    this.storedData = localStorage.getItem("myData");

    // Parse the JSON string back to an array
     this.parsedData = JSON.parse(this.storedData);
   // alert(this.parsedData[0]?.email)
    for (let i = 0; i < this.parsedData.length; i++) {
      debugger
      if (this.loginData.email == this.parsedData[i].email && this.loginData.password == this.parsedData[i].password) {
        alert('Login Successful');
        debugger
        this.router.navigate(['/home'], { queryParams: { email: this.loginData.email } });
        alert('redirect user on Home Page');
        
      } else {
        console.log('Invalid Credentials');
        alert('Invalid Credentials');
      }
    }

  }
    
  signup() {
    alert('hi')
    this.router.navigate(['/home'],);
    // if (this.loginData.email != 'test@gmail.com' && this.loginData.password != '123456') {
    //   alert('Login Successful');
    //   debugger
    //   this.router.navigate(['/home'], { queryParams: { email: this.loginData.email } });
    //    alert('redirect user on Home Page');
    // } else {
    //   console.log('Invalid Credentials');
    // }
  }

  ngOnInit() {
  }

}
