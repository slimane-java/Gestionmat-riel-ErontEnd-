import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImaterialComponent } from './imaterial.component';

describe('ImaterialComponent', () => {
  let component: ImaterialComponent;
  let fixture: ComponentFixture<ImaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
