import { Component, OnInit } from '@angular/core';

import { ServiciosService } from '../service/servicios.service';
import { Pers } from '../models/pers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  pers: Pers;
  data: Array<Pers>;

  constructor(private Servicios: ServiciosService) {}

  ngOnInit() {
    this.get();
    this.pers = new Pers();
  }

  get() {
    this.Servicios.get('pers').subscribe(
        response => {
            this.data = response as Array<Pers>;
        },
        error => {
            console.log(error);
        }
    );
}

post(){
    this.Servicios.post('pers',this.pers).subscribe(
      response => {
        this.get();
      },
      error => {
        console.log(error);
      }
      
);
}



}
