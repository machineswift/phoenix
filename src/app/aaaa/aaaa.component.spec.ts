import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AaaaComponent } from './aaaa.component';

describe('AaaaComponent', () => {
  let component: AaaaComponent;
  let fixture: ComponentFixture<AaaaComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AaaaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AaaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
