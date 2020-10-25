import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormularioCuentaPage } from './formulario-cuenta.page';

describe('FormularioCuentaPage', () => {
  let component: FormularioCuentaPage;
  let fixture: ComponentFixture<FormularioCuentaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCuentaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioCuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
