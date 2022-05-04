import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { Routes, RouterModule } from '@angular/router';
import { StepperComponent } from './stepper.component';

const routes: Routes = [
  {
    path: '',
    component: StepperComponent,
  },
];

@NgModule({
  declarations: [StepperComponent],
  imports: [
    MatProgressSpinnerModule,
    RouterModule.forChild(routes),
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
})
export class StepperModule {}
