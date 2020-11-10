import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { LandingComponent } from './landing-page/landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { UserDirective } from './user.directive';
import { TimePipe } from './time.pipe';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { ProfileService } from './profile.service';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfileComponent,
    UserDirective,
    TimePipe,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
