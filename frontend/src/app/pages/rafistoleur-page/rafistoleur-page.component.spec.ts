import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RafistoleurPageComponent } from './rafistoleur-page.component';

describe('RafistoleurPageComponent', () => {
  let component: RafistoleurPageComponent;
  let fixture: ComponentFixture<RafistoleurPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RafistoleurPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RafistoleurPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
