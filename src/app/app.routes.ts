import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { AlreadyLoggedInGuard } from './guards/alreadyloggedin.guard';
import { ProductHistoryComponent } from './pages/product-history/product-history.component';

export const routes: Routes = [
  {path:'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path:'login', component: LoginComponent, canActivate: [AlreadyLoggedInGuard]},
  {path:'register', component: RegisterComponent, canActivate: [AlreadyLoggedInGuard]},
  {path:'history', component: ProductHistoryComponent, canActivate: [AuthGuard]},




  
  {path:'**', component:HomeComponent, canActivate: [AuthGuard]},
];
