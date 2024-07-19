import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RafSignComponent } from './raf-sign.component';

describe('RafSignComponent', () => {
  let component: RafSignComponent;
  let fixture: ComponentFixture<RafSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RafSignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RafSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
