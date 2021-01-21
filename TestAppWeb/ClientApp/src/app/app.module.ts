import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { WorkersComponent } from './components/workers/workers.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { CreateWorkerFormComponent } from './components/create-worker-form/create-worker-form.component';
import { CreateDepartmentFormComponent } from './components/create-department-form/create-department-form.component';
import { UpdateDepartmentFormComponent } from './components/update-department-form/update-department-form.component';
import { DepartmentComponent } from './components/department/department.component';
import { appReducers } from './ngrx/reducers/app.reducer';
import { DepartmentEffects } from './ngrx/effects/department.effects';
import { WorkerEffects } from './ngrx/effects/worker.effects';
import { UpdateWorkerFormComponent } from './components/update-worker-form/update-worker-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    DepartmentComponent,
    DepartmentsComponent,
    WorkersComponent,
    CreateDepartmentFormComponent,
    CreateWorkerFormComponent,
    UpdateDepartmentFormComponent,
    UpdateWorkerFormComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([DepartmentEffects, WorkerEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'departments', component: DepartmentsComponent },
      { path: 'workers', component: WorkersComponent },
      { path: 'workers/create', component: CreateWorkerFormComponent },
      { path: 'departments/department/:id', component: DepartmentComponent },
      { path: 'departments/create', component: CreateDepartmentFormComponent },
      { path: 'departments/:id/update', component: UpdateDepartmentFormComponent },
      { path: 'workers/:id/update', component: UpdateWorkerFormComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
