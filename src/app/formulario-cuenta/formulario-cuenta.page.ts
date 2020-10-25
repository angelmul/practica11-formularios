import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-formulario-cuenta',
  templateUrl: './formulario-cuenta.page.html',
  styleUrls: ['./formulario-cuenta.page.scss'],
})
export class FormularioCuentaPage implements OnInit {

  validations_form: FormGroup;

  validation_messages = {
    'dni': [
    { type: 'required', message: 'Campo DNI obligatorio.' },
    { type: 'pattern', message: 'Tu DNI debe contener 9 letras y un numero.' }
    ],
    'iban': [
      { type: 'required', message: 'Campo IBAN obligatorio.' },
      { type: 'pattern', message: 'Tu IBAN debe contener 9 letras y un numero.' }
      ],
  };

  constructor(
  public formBuilder: FormBuilder,
  private navCtrl: NavController
  ) { }
  
  ngOnInit() {
  
    this.validations_form = this.formBuilder.group({
      dni: new FormControl('', Validators.compose([
        Validators.pattern('/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/'),
        Validators.required
      ])),
      iban: new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^[a-zA-Z]{1}[a-zA-Z0-9]+$'),
        Validators.required
        ])),
    });
  }
  onSubmit(values){
      console.log(values);
      let navigationExtras: NavigationExtras = {
      queryParams: {
      dni: JSON.stringify(values),
      iban: JSON.stringify(values),
    }
    };
      this.navCtrl.navigateForward('/segunda-pantalla', navigationExtras);
  }
}