import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plugin1Component } from './plugin1.component';

describe('Plugin1Component', () => {
  let component: Plugin1Component;
  let fixture: ComponentFixture<Plugin1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Plugin1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Plugin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
