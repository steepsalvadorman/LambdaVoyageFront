import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataBusquedaService } from '../services/data-busqueda.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {

  location: string = '';
  travellers: number = 0;
  departureDate: Date = new Date();
  returnDate: Date = new Date();

  constructor(private router: Router, private dataService: DataBusquedaService) { }

  onFormSubmit(): void {

    this.dataService.setFormData(this.location, this.travellers, this.departureDate, this.returnDate);
    this.router.navigate(['/busqueda']);
  }

}
