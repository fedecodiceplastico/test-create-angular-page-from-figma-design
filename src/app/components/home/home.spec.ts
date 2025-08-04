import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to giri on click', () => {
    spyOn(component, 'onNavigateToGiri');
    const giriCard = fixture.debugElement.nativeElement.querySelector('.nav-card:first-child');
    giriCard.click();
    expect(component.onNavigateToGiri).toHaveBeenCalled();
  });

  it('should navigate to ristorni on click', () => {
    spyOn(component, 'onNavigateToRistorni');
    const ristorniCard = fixture.debugElement.nativeElement.querySelector('.nav-card:last-child');
    ristorniCard.click();
    expect(component.onNavigateToRistorni).toHaveBeenCalled();
  });
});
