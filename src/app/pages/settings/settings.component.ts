import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/services/variablesGL.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  statusPantalla: number;
  constructor(
    private variablesService: VariablesService
  ) {
    this.statusPantalla = this.variablesService.getStatusPantalla();
  }

  ngOnInit() {
  }

}
