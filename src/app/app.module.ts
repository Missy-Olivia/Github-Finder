import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing-page/landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { UserDirective } from './user.directive';
import { TimePipe } from './time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfileComponent,
    UserDirective,
    TimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
