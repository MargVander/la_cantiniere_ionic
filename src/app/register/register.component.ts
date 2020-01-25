import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  firstname: string
  name: string
  sex: string
  phone: string
  address: string
  postalCode: string
  town: string
  email: string
  password: string

  constructor(fb: FormBuilder, private userService: UserService) {
    this.registerForm = fb.group({
      firstname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      sex: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      address: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(40)]),
      isLunchLady: new FormControl('false'),
      postalCode: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
      town: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      image64: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      wallet: new FormControl(0),
      registrationDate: Date()
    })
  }

  ngOnInit() {}

  inscription() {

    if (this.registerForm.valid) {
      console.log("ok")
      this.userService.setInscription(this.registerForm.value)
    }

    else {
      if (this.registerForm.controls.name.invalid) {

        this.name = "Le prénom est obligatoire et doit avoir entre 3 et 15 lettres"
      }
      if (this.registerForm.controls.surname.invalid) {

        this.firstname = "Le nom est obligatoire et doit avoir entre 3 et 15 lettres"
      }
      if (this.registerForm.controls.sex.invalid) {

        this.sex = "Veuillez choisir votre sexe"
      }
      if (this.registerForm.controls.phone.invalid) {

        this.phone = "Votre numéro est obligatoire et doit comporter 10 chiffres"
      }
      if (this.registerForm.controls.address.invalid) {

        this.address = "Votre adresse est obligatoire et doit comporter entre 10 et 40 lettres"
      }
      if (this.registerForm.controls.postalCode.invalid) {

        this.postalCode = "Votre code postale est obligatoire et doit comporter 5 chiffres"
      }
      if (this.registerForm.controls.town.invalid) {

        this.town = "La ville est obligatoire et doit comporter entre 3 et 30 lettres"
      }
      if (this.registerForm.controls.email.invalid) {

        this.email = "Veuillez rentrer une adresse mail valide"
      }
      if (this.registerForm.controls.password.invalid) {

        this.password = "Votre mot de passe est obligatoire, doit comporter entre 6 et 15 caractères et posséder une minuscule, une majuscule et un caractère spécial"
      }
    }
  }

}
