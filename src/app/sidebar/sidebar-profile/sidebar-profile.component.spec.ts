import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarProfileComponent } from './sidebar-profile.component';

describe('SidebarProfileComponent', () => {
  let component: SidebarProfileComponent;
  let fixture: ComponentFixture<SidebarProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
