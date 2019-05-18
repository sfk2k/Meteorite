import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteorListComponent } from './meteor-list.component';

describe('MeteorListComponent', () => {
  let component: MeteorListComponent;
  let fixture: ComponentFixture<MeteorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
