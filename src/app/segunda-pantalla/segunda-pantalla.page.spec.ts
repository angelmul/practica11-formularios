import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegundaPantallaPage } from './segunda-pantalla.page';

describe('SegundaPantallaPage', () => {
  let component: SegundaPantallaPage;
  let fixture: ComponentFixture<SegundaPantallaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundaPantallaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegundaPantallaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
