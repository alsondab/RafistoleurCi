import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RafistoleurCreateComponent } from './rafistoleur-create.component';

describe('RafistoleurCreateComponent', () => {
  let component: RafistoleurCreateComponent;
  let fixture: ComponentFixture<RafistoleurCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RafistoleurCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RafistoleurCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
