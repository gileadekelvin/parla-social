import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParlamentarContainerComponent } from './parlamentar-container.component';

describe('ParlamentarContainerComponent', () => {
  let component: ParlamentarContainerComponent;
  let fixture: ComponentFixture<ParlamentarContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParlamentarContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParlamentarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
