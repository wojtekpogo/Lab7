import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConnaughtCountiesPage } from './connaught-counties.page';

describe('ConnaughtCountiesPage', () => {
  let component: ConnaughtCountiesPage;
  let fixture: ComponentFixture<ConnaughtCountiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnaughtCountiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConnaughtCountiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
