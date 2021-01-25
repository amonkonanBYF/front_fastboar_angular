import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  registerForm: FormGroup 
  submitted:boolean = false
  confirm: boolean = false

  constructor(private fb: FormBuilder) {
 

   }

  ngOnInit(): void {
    //console.log('valid regist ONINIT',this.registerForm.valid)
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['',Validators.required],
      username: ['',Validators.required],
      password: ['',[Validators.required,Validators.minLength(6)]],
      confirmPassword: ['',[Validators.required, Validators.minLength(6)]],
      email: ['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      role: ['ROLE_USER'],
      newsLetter: [false],
      cgu: [false, Validators.requiredTrue]
    },
    {
      //validators: this.matchPassWord(this.registerForm.value.password, this.registerForm.value.confirmPassword)
    })
  }

  register() {
    // console.log ('register =>', this.registerForm?.value.password)
    // console.log('valid regist',this.registerForm.valid)
    // console.log(this.matchPassWord(this.registerForm.value.password,this.registerForm.value.confirmPassword))
    this.submitted = true
    this.confirm = this.matchPassWord(this.registerForm.value.password,this.registerForm.value.confirmPassword)
    if(this.confirm && this.registerForm.valid) {
      console.log('enregister', this.registerForm.value)
    }
    else {
      console.log('error')
    }

  }

  matchPassWord(password: string, confirmpassword: string):boolean {
   return password === confirmpassword ? true: false 
  }

  get f() { return this.registerForm.controls; }


}
