import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  password: string
  private souscription: Subscription
  private user: any
  id: number
  updateForm: FormGroup
  moneyForm: FormGroup
  resUpdate: any
  resMoney: any

  constructor(private userService: UserService, private location: Location, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getUser()
  }

  getUser() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.souscription = this.userService.getUser(this.id)
      .subscribe(
        resp => {
          this.user = resp;
          console.log(this.user);
          this.formulaireUpdate();
          this.formulaireMoney();

        }
      )
  }


  update() {
    console.log(this.updateForm)

    if (this.updateForm.valid) {

      this.userService.adminUpdate(this.id, this.updateForm.value)
        .subscribe(
          resp => {
            this.updateForm.reset();
            this.resUpdate = resp;
            this.getUser();
            console.log(this.resUpdate)
          }
        )

    } else {
      if (this.updateForm.controls.password.invalid) {

        this.password = "mot de passe requis"
      }
    }

  }

  updateMoney() {

    console.log(this.moneyForm.value)
    this.userService.walletUpdate(this.id, this.moneyForm.value.amount)
      .subscribe(
        resp => {
          this.moneyForm.reset();
          this.resMoney = resp;
          this.getUser();
          console.log(this.resMoney)
        }
      )
  }


  formulaireUpdate() {

    this.updateForm = new FormGroup({
      name: new FormControl(this.user.name),
      firstname: new FormControl(this.user.firstname),
      sex: new FormControl(this.user.sex),
      address: new FormControl(this.user.address),
      isLunchLady: new FormControl(this.user.isLunchLady),
      postalCode: new FormControl(this.user.postalCode),
      town: new FormControl(this.user.town),
      image64: new FormControl(this.user.image64),
      email: new FormControl(this.user.email),
      password: new FormControl('', Validators.required)
    })
  }

  formulaireMoney() {
    this.moneyForm = new FormGroup({
      amount: new FormControl(0),
    })
  }
}
