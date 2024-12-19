import { Component } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Reactive Forms for validation:
  /* myForm: FormGroup; */
  uemail : any =''
  userdata :object ={
    uemail : '',
    upassword : ''
  };

  user = {
    name: 'test',
    lname:'',
    mno:'',
    education:'',
    email: '',
    bdate:'',
    gender:'',
    address: '',
    password: '',

    };
     // temolate driven Forms for validation:

    name: string = '';
    email: string = '';
    phonen: string ='';
    fdate: any = '';
    address: any = '';
    gender: any = '';
    submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute){


  /*   this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    }); */
       // Load existing data from localStorage
      /*  const storedData = localStorage.getItem('myData');
       if (storedData) {
         this.dataArray = JSON.parse(storedData);
       } */
  }

  ngOnInit() {
 /*    debugger
    this.route.queryParams.subscribe(params => {
      this.uemail = params['email'];
      console.log(this.uemail,"tested")
    }); */
  }
 
 //  Reactive Forms for validation:
  // onSubmit() {
  //   if (this.myForm.valid) {
  //     debugger
  //     console.log(this.myForm.value); // Will log the form values
  //   } else {
  //     console.log('Form is not valid');
  //   }
  // }

     // temolate driven Forms for validation:
  // onSubmit() {
  //   this.submitted = true;
  //   debugger
   
  //     console.log('Form Submitted:', {
  //       name: this.name,
  //       email: this.email
  //     });
  //     // this.userdata {
        

  //     // };
  
  // }


  genderlist = [
    { key: 1, value: "Male" },
    { key: 2, value: "Female" }
  ];



  submit(user:any){
   alert(user.name);
  }

  // onSubmit(){
  //   alert("hello")
  // }

  validate_form(){
    debugger
    console.log()
  }


// for data store in arrau format use of this
  // submitted = false;
  dataArray: any[] = [];

  formData: any = {
    name: '',
    email: this.uemail,
    education: '',
    phone: '',
    gender: '',
    address: '',
    password: '',
  };


  onSubmit() {
    this.submitted = true; // Marks the form as submitted

    // Validate form fields
    if (this.formData.name && this.formData.email && this.formData.education &&
        this.formData.phone && this.formData.gender && this.formData.address) {


            // Check for duplicates

      const duplicate = this.dataArray.find(
        (data) => data.email === this.formData.email || data.password === this.formData.password
      );

      if (duplicate) {
        alert('Duplicate entry found! Email or password already exists.');
        return;
      }
      
      // Add form data to the array
      this.dataArray.push({ ...this.formData });

      localStorage.setItem("myData", JSON.stringify(this.dataArray));

      console.log("Data saved to localStorage!");

      // Reset form fields for a new entry
      this.formData = {
        name: '',
        email: '',
        education: '',
        phone: '',
        gender: '',
        address: '',
        password: ''
      };
      this.submitted = false;
      console.log('All submitted data:', this.dataArray);
    } else {
      console.log('Form is invalid');
    }
  }








}
