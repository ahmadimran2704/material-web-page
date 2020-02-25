import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
const MaterialConstant=[MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatDividerModule
];

@NgModule({
  imports: [
    MaterialConstant
  ],
  exports:[MaterialConstant]
})
export class MaterialModule { }
