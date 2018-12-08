import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarHeaderComponent } from './sidebar/sidebar-header/sidebar-header.component';
import { SidebarProfileComponent } from './sidebar/sidebar-profile/sidebar-profile.component';
import { SidebarSearchComponent } from './sidebar/sidebar-search/sidebar-search.component';
import { SidebarMenuComponent } from './sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarFooterComponent } from './sidebar/sidebar-footer/sidebar-footer.component';

import { BsDropdownModule } from 'ngx-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarProfileComponent,
    SidebarSearchComponent,
    SidebarMenuComponent,
    SidebarFooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
