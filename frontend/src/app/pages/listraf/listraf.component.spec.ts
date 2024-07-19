import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrafComponent } from './listraf.component';

describe('ListrafComponent', () => {
  let component: ListrafComponent;
  let fixture: ComponentFixture<ListrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListrafComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
