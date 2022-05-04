import { CommonModule } from '@angular/common';
import { NgModule, Injector, ApplicationRef } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes } from '@angular/router';
import { HomeCardComponent } from './home-card/home-card.component';
import { RouterTestingModule } from '@angular/router/testing';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home-card/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'stepper',
    loadChildren: () => import('./stepper/stepper.module').then((m) => m.StepperModule),
  },
  {
    path: 'spinner',
    loadChildren: () => import('./spinner/spinner.module').then((m) => m.SpinnerModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterTestingModule.withRoutes(routes),
  ],
  providers: [],
})
export class AppModule {
  constructor(injector: Injector) {
    customElements.define('angular-component', createCustomElement(AppComponent, { injector }));
  }

  ngDoBootstrap(appRef: ApplicationRef): void {}
}
