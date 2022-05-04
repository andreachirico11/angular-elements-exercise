import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { HomeCardComponent } from './home-card.component';

const routes: Routes = [
  {
    path: '',
    component: HomeCardComponent,
  },
];

@NgModule({
  declarations: [HomeCardComponent],
  imports: [RouterModule.forChild(routes), MatCardModule],
  providers: [],
})
export class HomeModule {}
