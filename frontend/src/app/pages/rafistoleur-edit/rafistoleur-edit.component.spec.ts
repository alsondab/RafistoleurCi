import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RafistoleurEditComponent } from './rafistoleur-edit.component';

describe('RafistoleurEditComponent', () => {
  let component: RafistoleurEditComponent;
  let fixture: ComponentFixture<RafistoleurEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RafistoleurEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RafistoleurEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
