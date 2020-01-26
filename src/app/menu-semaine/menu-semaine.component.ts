import { Meal } from 'src/app/models/meal';
import { Menu } from './../models/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { MenuService } from '../services/menu/menu.service'
import { Subscription } from 'rxjs'
import { PlatService } from '../services/plat/plat.service';
import { ModalController, NavParams } from 'ionic-angular';


@Component({
  selector: 'app-menu-semaine',
  templateUrl: './menu-semaine.component.html',
  styleUrls: ['./menu-semaine.component.scss']
})

export class MenuSemaineComponent implements OnInit {

  closeResult: string;
  quantitePlat: number = 1;
  modalOptions: NgbModalOptions;
  private souscription: Subscription;
  public menu: Array<Menu>;
  public description: Array<Meal>;
  public meal: Array<Meal>; 
  public label: Array<Meal>;
  selectedMenu: any;
  selectedMenuMeal: any;

  menuForm = this.formBuilder.group({
    choixPlat: ['', Validators.required],
    nomPlat: ['', ],
    platFormuleChoix: ['', Validators.required],
    quantiteRepas: [  '1', Validators.required],
    prix: ['']
    });
  


  constructor(private platService: PlatService,private menuService: MenuService, private modalService: NgbModal, private formBuilder: FormBuilder) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop',
      size: 'lg'
    } 
   }

  openLg(content, id) {
    this.souscription = this.menuService.getMenu(id)
    .subscribe(
      resp => {
        this.selectedMenu = resp;
        console.log(this.selectedMenu);
    console.log(this.selectedMenu.meals);
      }
    );
    this.souscription = this.platService.getMeal(id)
    .subscribe(
      resp => {
        this.selectedMenuMeal = resp;
        console.log(this.selectedMenuMeal);
    console.log(this.selectedMenuMeal.meal);
      }
    );
        
    
    this.modalService.open(content, this.modalOptions).result.then((result) => { //ouvre une fenetre modal
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  compteur(x) {
    if (x = "a") {
      this.quantitePlat--;
    } if (x != "a") {
      this.quantitePlat++;
    }
  }

  ngOnInit() {
    this.getMenusByDay();
  };

  getMenusByDay() {
    this.souscription = this.menuService.getMenusByDay()
    .subscribe(
      resp => {
        this.menu = resp;
        console.log(this.menu);
      }
    )    
  };

  
  addToPanier(menu) {
    let panier = [];
    if (localStorage.getItem("panier")) {
      panier = JSON.parse(localStorage.getItem("panier"));
    }
    panier.push({ quantitePlat: this.quantitePlat, menu });
    localStorage.setItem("panier", JSON.stringify(panier));
    
    localStorage.setItem("panier", JSON.stringify(panier));
    console.log("panier", JSON.stringify(panier))
  }

  closeValiderAjoutPanier(menuForm, quantitePlat, description) {
    let panier = [];
    this.quantitePlat = this.menuForm.value.quantiteRepas;
    this.description = this.menuForm.value.choixPlat;
    this.label = this.menuForm.value.nomPlat;
    this.meal = this.description;
    console.log(this.meal);
    console.log(this.label);
    console.log(this.description);
    if (localStorage.getItem("panier")) {
      panier = JSON.parse(localStorage.getItem("panier"));
    }
    panier.push({ meal: this.meal ,quantitePlat: this.quantitePlat, menu: this.selectedMenu });
    localStorage.setItem("panier", JSON.stringify(panier));
        console.log('Form submitted !', this.menuForm.value, 'menu :', this.menu, 'panier :', panier.values);

    this.closeModal();
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  ajoutPanier(selectedMenu, menu){
    console.log(this.selectedMenu);
    console.log(this.selectedMenu.value);
  }
}