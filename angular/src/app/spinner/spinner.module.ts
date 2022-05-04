import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Routes, RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner.component';

const routes: Routes = [
  {
    path: '',
    component: SpinnerComponent,
  },
];

@NgModule({
  declarations: [SpinnerComponent],
  imports: [MatProgressSpinnerModule, RouterModule.forChild(routes)],
  providers: [],
})
export class SpinnerModule {}
