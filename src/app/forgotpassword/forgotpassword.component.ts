import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit, OnDestroy {
  forgotForm: FormGroup;

  constructor(fb: FormBuilder, private service: LoginService) {
    this.forgotForm = fb.group({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit() {
  }
  

  onSubmit(){
    console.log(this.forgotForm.valid)  
    this.service.forgotPassword(this.forgotForm.value)
    .subscribe(
      res => {
        console.log(res)
      }
    );
  }

  ngOnDestroy(){

  }

}
