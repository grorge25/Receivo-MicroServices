import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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



const routes: Routes = [
  { path: '', redirectTo: '/homePage', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'homePage', component: HomePageComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'resetpwd', component: ResetPasswordComponent },
  { path: 'initorg', component: InitOrgComponent },
  { path: 'test-123', component: Test123Component},
  { path: 'company', component: CompanyComponent},
  { path: 'recnotes', component: RecNotesComponent},
  { path: 'members', component: MembersComponent},
  { path: 'settings', component: SettingsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }