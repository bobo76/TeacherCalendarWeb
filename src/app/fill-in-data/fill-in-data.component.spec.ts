import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillInDataComponent } from './fill-in-data.component';

describe('FillInDataComponent', () => {
  let component: FillInDataComponent;
  let fixture: ComponentFixture<FillInDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillInDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillInDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
