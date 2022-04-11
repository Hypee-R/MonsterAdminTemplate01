import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { Subscription } from 'rxjs';
import { VariablesService } from 'src/app/services/variablesGL.service';
import { fadeAnimation } from 'src/app/shared/animations/fade';
import { Toast } from 'src/app/shared/models/toast.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeAnimation],
  providers: [MessageService]
})
export class LoginComponent implements OnInit, OnDestroy {

  toastSubcripcion: Subscription = new Subscription();
  constructor(
    private router: Router,
    private variablesService: VariablesService,
    private messageService: MessageService
  ) {
    this.toastSubcripcion = this.variablesService.toastLogin.subscribe((toast: Toast) => {
      if (toast)
        this.messageService.add({ key: 'toast', severity: toast.estado, summary: toast.titulo, detail: toast.mensaje, life: toast.segundos, closable: false });
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.toastSubcripcion) {
      this.toastSubcripcion.unsubscribe();
    }
  }

  showLogin(){
    var element = document.getElementById("div1");
    element.style.animation = "bounceInLeft";
    element.style.animationDuration = "800ms";
    element.style.zIndex = "2";

    element.style.display = "block";
  }

  logIn(){
      this.variablesService.toastLogin.next(new Toast('success', 'Login Success', 'Datos de usuario correctos', 2000));
      localStorage.d = "asdasdasdasdasdasd";
      this.variablesService.setMenuBreadcrumb("Home");
      this.router.navigate(["/home"]);
  }

}
