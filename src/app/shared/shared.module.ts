import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideUserComponent } from './components/sides/side-user/side-user.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
    ],
    declarations: [
        MenuComponent,
        NavBarComponent,
        SideUserComponent
    ],
    exports: [
        MenuComponent,
        NavBarComponent,
        SideUserComponent
    ]
})
export class SharedModule { }
