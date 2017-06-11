import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { UserRegistrationComponent } from './user/user-registration.component';
import { HeightComponent } from './shared/height-component/height.component';
import { SliderComponent } from './shared/slider-component/slider.component';
import { SalaryComponent } from './shared/salary-component/salary.component';
import { ToggleComponent } from './shared/toggle-component/toggle.component';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'user-registration', component: UserRegistrationComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ], { useHash: false })],
  declarations: [AppComponent,
    WelcomeComponent,
    UserRegistrationComponent,
    HeightComponent,
    SliderComponent,
    SalaryComponent,
    ToggleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
