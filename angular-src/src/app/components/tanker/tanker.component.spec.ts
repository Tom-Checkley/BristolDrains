import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankerComponent } from './tanker.component';

describe('TankerComponent', () => {
  let component: TankerComponent;
  let fixture: ComponentFixture<TankerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
