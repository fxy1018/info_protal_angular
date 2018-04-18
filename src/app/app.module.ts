import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import 'hammerjs';
import { ChemPortalComponent } from './chem-portal/chem-portal.component';
import { BioPortalComponent } from './bio-portal/bio-portal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BdnaComponent } from './bio/bdna/bdna.component';
import { RnaComponent } from './bio/rna/rna.component';
import { GwasComponent } from './bio/gwas/gwas.component';
import { CellularExpressionComponent } from './bio/cellular-expression/cellular-expression.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ChemPortalComponent,
    BioPortalComponent,
    HeaderComponent,
    FooterComponent,
    BdnaComponent,
    RnaComponent,
    GwasComponent,
    CellularExpressionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    AppRoutingModule,
    MatTabsModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
