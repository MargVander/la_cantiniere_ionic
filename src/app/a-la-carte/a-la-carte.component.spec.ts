import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ALaCarteComponent } from './a-la-carte.component';

describe('ALaCarteComponent', () => {
  let component: ALaCarteComponent;
  let fixture: ComponentFixture<ALaCarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ALaCarteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ALaCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
