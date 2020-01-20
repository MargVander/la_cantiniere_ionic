import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu/menu.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
})
export class MenusComponent implements OnInit {

  public menus: any;
  private souscription: Subscription;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getMenus()
  }

  getMenus(){
    this.souscription = this.menuService.getMenus()
    .subscribe(
      resp => {
        this.menus = resp;
        console.log(this.menus);
        
      }
    )    
  }

  deleteMenu(id){
    this.menuService.deleteMenu(id)
  }

}
