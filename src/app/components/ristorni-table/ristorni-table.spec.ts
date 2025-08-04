import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { RistorniTableComponent } from './ristorni-table';

describe('RistorniTableComponent', () => {
  let component: RistorniTableComponent;
  let fixture: ComponentFixture<RistorniTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RistorniTableComponent, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RistorniTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate totals correctly', () => {
    component.ngOnInit();
    expect(component.getTotalRCalcolato()).toBeGreaterThan(0);
    expect(component.getTotalRistorno()).toBeGreaterThan(0);
  });

  it('should handle calculate button click', () => {
    spyOn(component, 'calculateTotals' as any);
    component.onCalculateClick();
    expect(component['calculateTotals']).toHaveBeenCalled();
  });

  it('should toggle autonomi inclusion', () => {
    const initialValue = component.includiAutonomi;
    component.includiAutonomi = !initialValue;
    expect(component.includiAutonomi).toBe(!initialValue);
  });
});
