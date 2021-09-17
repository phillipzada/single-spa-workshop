import { RouterModule, Routes } from '@angular/router';

import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
	providers: [ { provide: APP_BASE_HREF, useValue: '/app1' } ]
})
export class AppRoutingModule { }
