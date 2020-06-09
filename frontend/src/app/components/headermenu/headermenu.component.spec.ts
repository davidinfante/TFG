import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeadermenuComponent } from './headermenu.component';
import {FunctionsService} from '../../services/functions.service';
import {PagesService} from '../../services/pages.service';

describe('HeadermenuComponent', () => {
  let component: HeadermenuComponent;
  let fixture: ComponentFixture<HeadermenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadermenuComponent ],
      imports: [IonicModule.forRoot()],
      providers: [FunctionsService, PagesService]
    }).compileComponents();

    fixture = TestBed.createComponent(HeadermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
