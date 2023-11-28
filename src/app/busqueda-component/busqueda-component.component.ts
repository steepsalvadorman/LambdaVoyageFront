import { Component, OnInit } from '@angular/core';
import { DataBusquedaService } from '../services/data-busqueda.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-busqueda-component',
  templateUrl: './busqueda-component.component.html',
  styleUrls: ['./busqueda-component.component.css'],
  providers: [DatePipe]
})
export class BusquedaComponentComponent implements OnInit{
  formData: any = {};

  constructor(private dataService: DataBusquedaService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.formData = this.dataService.getFormData();
  }


}
