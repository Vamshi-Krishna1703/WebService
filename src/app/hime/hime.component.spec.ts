import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HimeComponent } from './hime.component';

describe('HimeComponent', () => {
  let component: HimeComponent;
  let fixture: ComponentFixture<HimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
