import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { CommonCardComponent } from './components/common-card/common-card.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { AsideComponent } from './components/aside/aside.component';
import { HomeComponent } from './pages/home/home.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { MenubarFooterComponent } from './components/menubar-footer/menubar-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    MainCardComponent,
    CommonCardComponent,
    UserCardComponent,
    AsideComponent,
    HomeComponent,
    PaginationComponent,
    FooterComponent,
    TestimonialComponent,
    MenubarFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
