import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../../../services/variablesGL.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  sideBarSubcripcion: Subscription = new Subscription();
  tipoPantalla: number;
  constructor(
    private variablesService: VariablesService
  ) {
    //Mobile
    // this.sideViewsSubcripcion = this.variablesService.showSideViews.subscribe(value => {
    //   this.mostrarSideViews = value;
    // });
    this.sideBarSubcripcion = this.variablesService.showSideBar.subscribe((state: boolean) => {
      let sideBar = document.querySelector("aside");
      let menuSide = document.querySelector("#sidebar");
      if (sideBar) {
        if (state){
          sideBar.style.display = 'block';
        }else{
          sideBar.style.display = 'none';
        }
      }
      this.tipoPantalla = variablesService.getStatusPantalla();
      if(this.tipoPantalla > 10){
        if(menuSide){
          if(state){
            menuSide.classList.toggle('sidebar');
            menuSide.classList.toggle('sidebar-chico');
          }else{
            menuSide.classList.toggle('sidebar-chico');
            menuSide.classList.toggle('sidebar');
          }
        }
      }else{
          // menuSide.classList.remove('sidebar-chico');
          // menuSide.classList.add('sidebar');
      }
    });
  }

  ngOnInit() {
  }

  logOut(){
    this.variablesService.removeCredential();
  }

  changeSideVisible(){
    this.variablesService.showSideBar.next(false);
  }

}
