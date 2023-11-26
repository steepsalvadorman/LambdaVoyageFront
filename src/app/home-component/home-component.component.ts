import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class HomeComponentComponent {
  private apiUrl = 'http://localhost:8080/lambda_voyage/fly'; // URL modificada

  constructor(private http: HttpClient) {}

  getData(page: number, size: number): Observable<any> {
    const params = {
      page: 2,
      size: 5
    };

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      tap(data => console.log('Datos del endpoint:', data)) // Agregamos un console.log para mostrar los datos
    );
  }
}
