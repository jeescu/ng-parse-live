import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// import { AppComponent } from './app.component';
import { HomeComponent } from "app/home/home.component";
// import { AuthGuard } from "app/auth/auth-guard";
import { ValidatorComponent } from './validator/validator.component';
import { ReporterComponent } from './reporter/reporter.component';

const appRoutes: Routes = [
  // pathMatch full, exact route for root.
  { path: '', component: HomeComponent },
  { path: 'validator', component: ValidatorComponent },
  { path: 'reporter', component: ReporterComponent },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, { useHash: true })
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }