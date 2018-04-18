import { Routes } from '@angular/router';

import { BioPortalComponent } from "../bio-portal/bio-portal.component";
import { BdnaComponent } from "../bio/bdna/bdna.component";
import { RnaComponent } from "../bio/rna/rna.component";
import { GwasComponent } from "../bio/gwas/gwas.component";
import { CellularExpressionComponent } from "../bio/cellular-expression/cellular-expression.component";

export const bioCenterRoutes: Routes = [
  { path: 'bio-portal',
    component: BioPortalComponent,
    children: [
      { path:'', component: BioPortalComponent},
      { path: 'bdna', component: BdnaComponent },
      { path: 'rna', component: RnaComponent },
      { path: 'gwas', component: GwasComponent },
      { path: 'cellular-expression', component: CellularExpressionComponent },
    ]
  }
]
