import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSearchComponent } from './sidebar-search.component';

describe('SidebarSearchComponent', () => {
  let component: SidebarSearchComponent;
  let fixture: ComponentFixture<SidebarSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
