import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plugin2Component } from './plugin2.component';

describe('Plugin2Component', () => {
  let component: Plugin2Component;
  let fixture: ComponentFixture<Plugin2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Plugin2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Plugin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
