import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { InitOrgComponent } from './init-org/init-org.component';
import { Test123Component } from './test-123/test-123.component';
import { CompanyComponent } from './company/company.component';
import { RecNotesComponent } from './rec-notes/rec-notes.component';
import { MembersComponent } from './members/members.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SignInComponent,
    HomePageComponent,
    AboutUsComponent,
    ContactComponent,
    ResetPasswordComponent,
    InitOrgComponent,
    Test123Component,
    CompanyComponent,
    RecNotesComponent,
    MembersComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }