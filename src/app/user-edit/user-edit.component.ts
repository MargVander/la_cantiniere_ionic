import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user/user.service'
import { Subscription } from 'rxjs'
import { Location } from '@angular/common'
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { HeaderService } from '../services/header/header.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  id = localStorage.getItem('id');
  public user: any;
  private souscription: Subscription;
  userForm: FormGroup

  constructor(private userService: UserService, private formBuilder: FormBuilder) {

  }


  ngOnInit() {
    this.getUser(this.id)

  }

  getUser(id) {
    this.souscription = this.userService.getUser(id)
      .subscribe(
        resp => {
          this.user = resp;
          console.log(this.user);
          this.formulaire();
        }
      )
  }

  formulaire() {

    this.userForm = this.formBuilder.group({
      firstname: [this.user.firstname, Validators.required],
      name: [this.user.name],
      image: [this.user.image],
      email: [this.user.email, Validators.required],
      password: ['', Validators.required],
      sex: [this.user.sex, Validators.required],
      phone: [this.user.phone, Validators.required],
      address: [this.user.address, Validators.required],
      isLunchLady: [this.user.isLunchLady],
      postalCode: [this.user.postalCode, Validators.required],
      town: [this.user.town, Validators.required],
    });
  }


  onSubmit() {

    if (this.userForm.valid) {

      this.userService.adminUpdate(this.id, this.userForm.value)
        .subscribe(
          resp => {
            this.userForm.reset();
            this.getUser(this.id);
            console.log(resp)
          }
        )

    }
  }

  deleteAccount(id) {
    this.user.firstname = "xxxxxx"
    this.user.name = "xxxxxx"
    this.user.phone = 1234567890
    this.user.address = "xxxxxxxxxx"
    this.user.town = "xxxxxxxxxx"
    this.user.password = "xxxxxx"
    this.userService.editUser(id, this.user)
    this.userService.deleteUser(id)

  }

}
