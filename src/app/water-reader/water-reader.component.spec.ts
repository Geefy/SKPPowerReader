import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterReaderComponent } from './water-reader.component';

describe('WaterReaderComponent', () => {
  let component: WaterReaderComponent;
  let fixture: ComponentFixture<WaterReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
