import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataBusquedaService {
  formData: any = {};
  constructor() { }

  setFormData(location: string, travellers: number, departureDate: Date, returnDate: Date): void {
    this.formData = {
      location,
      travellers,
      departureDate,
      returnDate
    };
  }

  getFormData(): any {
    return this.formData;
  }


}
