import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-medication',
  templateUrl: './list-medication.component.html',
  styleUrl: './list-medication.component.css'
})
export class ListMedicationComponent {
  array = [
    {
      "nombre":"Medicamento1",
      "cantidad":"1",
      "frecuencia":"24 horas"
    }, 
    {
      "nombre":"Medicamento2",
      "cantidad":"2",
      "frecuencia":"8 horas"
    },
    {
      "nombre":"Medicamento3",
      "cantidad":"3",
      "frecuencia":"6 horas"
    },
    {
      "nombre":"Medicamento4",
      "cantidad":"1",
      "frecuencia":"12 horas"
    }

  ]
}
