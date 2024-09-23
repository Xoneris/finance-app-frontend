import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewbudgetmodalComponent } from './addnewbudgetmodal.component';

describe('AddnewbudgetmodalComponent', () => {
  let component: AddnewbudgetmodalComponent;
  let fixture: ComponentFixture<AddnewbudgetmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddnewbudgetmodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewbudgetmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
