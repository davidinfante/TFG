import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProyectoPage } from './proyecto.page';

describe('ProyectoPage', () => {
  let component: ProyectoPage;
  let fixture: ComponentFixture<ProyectoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProyectoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
