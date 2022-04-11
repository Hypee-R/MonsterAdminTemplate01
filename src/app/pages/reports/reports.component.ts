import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/services/variablesGL.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  statusPantalla: number;
  constructor(
    private variablesService: VariablesService
  ) {
    this.statusPantalla = this.variablesService.getStatusPantalla();
  }

  ngOnInit() {
  }

}
