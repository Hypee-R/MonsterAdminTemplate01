import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { fadeAnimation } from '../shared/animations/fade';
import { flipInXAnimation } from '../shared/animations/flipinX';
import { SlideAnimation } from '../shared/animations/slide';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { VariablesService } from '../services/variablesGL.service';
import { Subscription } from 'rxjs';
import { Toast } from '../shared/models/toast.model';
import { SwalModel } from '../shared/models/swal.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations: [flipInXAnimation, fadeAnimation, SlideAnimation],
  providers: [MessageService]
})
export class ContentComponent implements OnInit {

  url: string;
  toastSubcripcion: Subscription = new Subscription();
  swalSubcripcion: Subscription = new Subscription();

  mostrarSideUser: boolean;
  contador: number = 0;

  sideBarSubcripcion: Subscription = new Subscription();
  sideUserSubcripcion: Subscription = new Subscription();
  constructor(
    private route: Router,
    private location: Location,
    private cdRef: ChangeDetectorRef,
    private messageService: MessageService,
    private variablesService: VariablesService,
  ) {
    //Mobile
    this.sideBarSubcripcion = this.variablesService.showSideBar.subscribe((state: boolean) => {
      let contenidoOutled = document.querySelector('#Contenido');
      let tipoPantalla = variablesService.getStatusPantalla();
      if(tipoPantalla > 10){
        if (contenidoOutled) {
          if (state){
            contenidoOutled.classList.toggle('contenido-chico');
            contenidoOutled.classList.toggle('contenidoNormal');
          }else{
            contenidoOutled.classList.toggle('contenidoNormal');
            contenidoOutled.classList.toggle('contenido-chico');
          }
        }
      }
    });
    // Side User
    this.sideUserSubcripcion = this.variablesService.showSideUser.subscribe(value => {
      this.mostrarSideUser = value;
    });
    // Message / Notification
    this.toastSubcripcion = this.variablesService.toast.subscribe((toast: Toast) => {
      if (toast)
        this.messageService.add({ key: 'toast', severity: toast.estado, summary: toast.titulo, detail: toast.mensaje, life: toast.segundos, closable: false });
    });
    this.swalSubcripcion = this.variablesService.swal.subscribe((swal: SwalModel) => {
      //if (swal) return Swal(swal.titulo, swal.mensaje, swal.estado);
    });
  }

  ngOnInit() {
    this.url = this.location.path();
    this.variablesService.setMenu(this.url);
    this.route.events.subscribe((val) => {
      if(this.location.path() != ''){
        this.url = this.location.path();
      } else {
        this.url = '/home';
      }
      this.variablesService.setMenu(this.url);
    });
  }

  ngOnDestroy() {
    if (this.sideUserSubcripcion) {
      this.sideUserSubcripcion.unsubscribe();
    }
    if (this.toastSubcripcion) {
      this.toastSubcripcion.unsubscribe();
    }
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  clickSides($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
  }

  @HostListener('document:click', ['$event']) clickedOutside($event) {
    if (this.mostrarSideUser && this.contador == 0) {
      this.mostrarSideUser = true;
      this.contador++;
    }
    else if (this.mostrarSideUser && this.contador == 1) {
      this.emptySides();
    }
  }

  emptySides() {
    this.mostrarSideUser = false;
    this.contador = 0;
    this.variablesService.showSideUser.next(false);
  }

}
