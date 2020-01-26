import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order/order.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-constraint-edit',
  templateUrl: './constraint-edit.component.html',
  styleUrls: ['./constraint-edit.component.scss'],
})
export class ConstraintEditComponent implements OnInit {

  public constraint: any;
  private souscription: Subscription;
  constraintForm: FormGroup

  constructor(private orderService: OrderService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.getConstraint();
  }
  
  getConstraint() {
    this.souscription = this.orderService.getConstraint()
    .subscribe(
      resp => {
        this.constraint = resp;
        console.log(this.constraint);
        this.constraintForm = this.formBuilder.group({
          maximumOrderPerDay: [this.constraint.maximumOrderPerDay, Validators.required],
          orderTimeLimit: [this.constraint.orderTimeLimit, Validators.required], 
          rateVAT: [this.constraint.rateVAT, Validators.required], 
        });
        
      }
    )    
  }

  onSubmit() {
    this.orderService.editConstraint(this.constraintForm.value);
    this.router.navigate(['/'])
    
  }

}
