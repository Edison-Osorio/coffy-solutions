import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaffeTotalComponent } from './caffe-total.component';

describe('CaffeTotalComponent', () => {
  let component: CaffeTotalComponent;
  let fixture: ComponentFixture<CaffeTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaffeTotalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaffeTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
