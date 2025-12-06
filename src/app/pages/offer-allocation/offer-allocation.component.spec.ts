import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferAllocationComponent } from './offer-allocation.component';

describe('OfferAllocationComponent', () => {
  let component: OfferAllocationComponent;
  let fixture: ComponentFixture<OfferAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferAllocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
