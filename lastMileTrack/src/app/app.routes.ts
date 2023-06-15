import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'start-tour',
    loadComponent: () => import('./start-tour/start-tour.component').then( m => m.StartTourComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },  
  {
    path: '',
    redirectTo: 'start-tour',
    pathMatch: 'full',
  },
  {
    path: 'task-detail',
    loadComponent: () => import('./task-detail/task-detail.page').then( m => m.TaskDetailPage)
  },
  {
    path: 'end-tour',
    loadComponent: () => import('./end-tour/end-tour.page').then( m => m.EndTourPage)
  },

];
