import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletebudgetmodalComponent } from './deletebudgetmodal.component';

describe('DeletebudgetmodalComponent', () => {
  let component: DeletebudgetmodalComponent;
  let fixture: ComponentFixture<DeletebudgetmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletebudgetmodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletebudgetmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
