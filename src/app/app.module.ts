import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//MODULOS PERZONALIZADOS
import { AuthModule } from './auth/auth.module';

// RUTAS
import { AppRoutingModule } from 'src/app/app-routing.module';

// Environment
import { environment } from 'src/environments/environment.prod';

// Idioma Español
import { DatePipe, TitleCasePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [DatePipe, TitleCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
