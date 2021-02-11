import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GgeeComponent } from './ggee.component';

describe('GgeeComponent', () => {
  let component: GgeeComponent;
  let fixture: ComponentFixture<GgeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GgeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GgeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
