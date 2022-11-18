import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientLayoutComponent } from './components/layouts';
import { HomepageComponent } from './pages/client/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomepageComponent,
        data: { title: 'Home' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [];
