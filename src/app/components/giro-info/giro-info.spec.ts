import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiroInfo } from './giro-info';

describe('GiroInfo', () => {
  let component: GiroInfo;
  let fixture: ComponentFixture<GiroInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiroInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiroInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
