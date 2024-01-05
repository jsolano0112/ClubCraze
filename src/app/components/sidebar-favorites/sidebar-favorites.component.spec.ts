import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFavoritesComponent } from './sidebar-favorites.component';

describe('SidebarFavoritesComponent', () => {
  let component: SidebarFavoritesComponent;
  let fixture: ComponentFixture<SidebarFavoritesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarFavoritesComponent]
    });
    fixture = TestBed.createComponent(SidebarFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
