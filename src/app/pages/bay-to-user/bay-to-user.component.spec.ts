import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BayToUserComponent } from './bay-to-user.component';

describe('BayToUserComponent', () => {
  let component: BayToUserComponent;
  let fixture: ComponentFixture<BayToUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BayToUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BayToUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
