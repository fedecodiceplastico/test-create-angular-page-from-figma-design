import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiriSectionComponent } from './giri-section';

describe('GiriSectionComponent', () => {
  let component: GiriSectionComponent;
  let fixture: ComponentFixture<GiriSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiriSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiriSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
