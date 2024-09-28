import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbudgetmodalComponent } from './editbudgetmodal.component';

describe('EditbudgetmodalComponent', () => {
  let component: EditbudgetmodalComponent;
  let fixture: ComponentFixture<EditbudgetmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditbudgetmodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditbudgetmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
