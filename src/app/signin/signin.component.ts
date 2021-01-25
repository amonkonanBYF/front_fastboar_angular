import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios'
import { IUser } from 'src/interfaces/IUser';
import * as CryptoJS from 'crypto-js'
import { ActivatedRoute, Router } from '@angular/router';




const URL:string = 'https://apibackend2020.herokuapp.com/api/users'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  registerForm: FormGroup 
  submitted:boolean = false
  confirm: boolean = false


  constructor(private fb: FormBuilder, private router: Router) {
 

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
     console.log ('register =>', this.registerForm?.value)
    // console.log('valid regist',this.registerForm.valid)
    // console.log(this.matchPassWord(this.registerForm.value.password,this.registerForm.value.confirmPassword))
    this.submitted = true
    this.confirm = this.matchPassWord(this.registerForm.value.password,this.registerForm.value.confirmPassword)
    const shaPassword = CryptoJS.AES.encrypt(this.registerForm.value.password,'don dada').toString()
    if(this.confirm && this.registerForm.valid) {
      //console.log('enregister', this.registerForm.value)
      const roles = []
      roles.push(this.registerForm.value.role)
      const user:IUser = {
        firstName: this.registerForm.value.firstname,
        lastName: this.registerForm.value.lastname,
        username: this.registerForm.value.username,
        email: this.registerForm.value.email,
        password: shaPassword,
        roles: roles,
        newletter: this.registerForm.value.newsLetter,
        dateCreated: new Date(),
        ticket: [0],
        additionalProp1: {}

      }
      console.log('user', user)

      axios.post(
        URL,
        user, 
        { headers: {
          'Content-Type': 'application/ld+json ; charset=UTF-8'
        }} 
      ).then(res => {
        // console.log(res)
        // console.log(res.data)
        console.log(res.status)
        this.router.navigate(['userprofile',])

      }).catch(err => {
         if (err.response) {
          console.log('resp =>', err.response)
          console.log('req =>', err.request)


        }else if (err.request) {
          console.log('req =>', err.request)

        }
      })

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
