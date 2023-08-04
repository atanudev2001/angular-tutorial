import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowvaluesComponent } from './showvalues.component';

describe('ShowvaluesComponent', () => {
  let component: ShowvaluesComponent;
  let fixture: ComponentFixture<ShowvaluesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowvaluesComponent]
    });
    fixture = TestBed.createComponent(ShowvaluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
