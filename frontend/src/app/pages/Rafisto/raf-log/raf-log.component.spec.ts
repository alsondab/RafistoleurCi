import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RafLogComponent } from './raf-log.component';

describe('RafLogComponent', () => {
  let component: RafLogComponent;
  let fixture: ComponentFixture<RafLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RafLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RafLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
