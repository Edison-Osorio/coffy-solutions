import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecolectorsComponent } from './recolectors.component';

describe('RecolectorsComponent', () => {
  let component: RecolectorsComponent;
  let fixture: ComponentFixture<RecolectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecolectorsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecolectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
