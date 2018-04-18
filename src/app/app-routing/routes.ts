import { Routes } from '@angular/router';

import { ChemPortalComponent } from "../chem-portal/chem-portal.component";
import { BioPortalComponent } from "../bio-portal/bio-portal.component";
import { HomeComponent } from '../home/home.component';
import { BdnaComponent } from "../bio/bdna/bdna.component";
import { RnaComponent } from "../bio/rna/rna.component";
import { GwasComponent } from "../bio/gwas/gwas.component";
import { CellularExpressionComponent } from "../bio/cellular-expression/cellular-expression.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bio-portal', component: BioPortalComponent},
  { path: 'chem-portal', component: ChemPortalComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},

]
