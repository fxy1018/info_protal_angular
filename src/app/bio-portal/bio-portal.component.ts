import { Component, OnInit } from '@angular/core';
import { Link } from '../shared/link';

@Component({
  selector: 'app-bio-portal',
  templateUrl: './bio-portal.component.html',
  styleUrls: ['./bio-portal.component.scss']
})
export class BioPortalComponent implements OnInit {

  tabLinks: Link[];


  constructor() { }

  ngOnInit() {
    this.tabLinks = [
      { name: "B-DNA",
        path: "/bio-portal/bdna",
        isActive: false},
      { name: "RNA Sequence",
        path: "/bio-portal/rna",
        isActive: false},
      { name: "GWAS Database",
        path: "/bio-portal/gwas",
        isActive: false},
      { name: "Cellular Expression Database",
        path: "/bio-portal/cellular-expression",
        isActive: false},]
  }


}
