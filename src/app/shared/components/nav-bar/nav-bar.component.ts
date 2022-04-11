import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../../../services/variablesGL.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  mostrarSideUser: boolean;
  user: any;
  pageSelected = "";
  contadorVisible: number = 0;
  visibileSideBar: boolean = false;

  sideUserSubcripcion: Subscription = new Subscription();
  sideBarSubcripcion: Subscription = new Subscription();
  constructor(
    private variablesService: VariablesService,
  ) {
    this.user = {
      usuario : 'Luis Altamirano'
    }

    variablesService.pagina.subscribe(newTitle => {
        this.pageSelected = newTitle;
    });

    this.sideBarSubcripcion = this.variablesService.showSideBar.subscribe((state: boolean) => {
      this.visibileSideBar = state;
    });
    this.sideUserSubcripcion = this.variablesService.showSideUser.subscribe(value => this.mostrarSideUser = value );
  }

  ngOnInit() {
  }

  changeSideUser() {
    this.variablesService.showSideUser.next(true);
  }

  changeSideVisible(){
    this.variablesService.showSideBar.next(true);
  }

  //change Theme
  changeTheme(){
    const themeToggler = document.querySelector(".theme-toggler");

    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
  }

  showSideUser(){
    this.variablesService.showSideUser.next(true);
  }


}
