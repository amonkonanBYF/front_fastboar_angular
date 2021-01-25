import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
const URL= "https://apibackend2020.herokuapp.com/api/users"
const URL_API_Ticket= "https://apibackend2020.herokuapp.com/api/tickets"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  codeForm: FormGroup
  data: any
  submitted: boolean = false
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.codeForm = this.fb.group({
      code: ['',Validators.required]
    },
    {

    })
  }

  submitCode() {
    this.submitted = true
    console.log('code', this.codeForm.value)

    axios.get(URL_API_Ticket, {
      params: {
        valeurs: this.codeForm.value.code
      }
    }).then(res => {
      console.log('status',res.status)
      console.log('data =>', res.data['hydra:member'][0])
      this.data = res.data['hydra:member'][0]

    }).catch(erro => console.log('error =>', erro))
  }
  getCurrentuser() {
    
  }

}
