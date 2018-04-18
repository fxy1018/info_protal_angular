import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { routes } from "./routes";
import { bioCenterRoutes } from "./bio-center-route";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(bioCenterRoutes),
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
