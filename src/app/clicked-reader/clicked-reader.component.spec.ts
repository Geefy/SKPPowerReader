import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickedReaderComponent } from './clicked-reader.component';

describe('ClickedReaderComponent', () => {
  let component: ClickedReaderComponent;
  let fixture: ComponentFixture<ClickedReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickedReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickedReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
