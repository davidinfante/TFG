import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserheadermenuComponent } from './userheadermenu.component';
import {FunctionsService} from '../../services/functions.service';
import {HeaderOptionsService} from '../../services/header-options.service';

describe('UserheadermenuComponent', () => {
  let component: UserheadermenuComponent;
  let fixture: ComponentFixture<UserheadermenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserheadermenuComponent ],
      imports: [IonicModule.forRoot()],
      providers: [FunctionsService, HeaderOptionsService]
    }).compileComponents();

    fixture = TestBed.createComponent(UserheadermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
