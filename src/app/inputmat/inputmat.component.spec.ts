import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputmatComponent } from './inputmat.component';

describe('InputmatComponent', () => {
  let component: InputmatComponent;
  let fixture: ComponentFixture<InputmatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputmatComponent]
    });
    fixture = TestBed.createComponent(InputmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
