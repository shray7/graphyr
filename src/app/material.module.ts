import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, DragDropModule, CdkTreeModule, MatMenuModule, MatIconModule, MatTreeModule],
  exports: [MatButtonModule, MatCheckboxModule, DragDropModule, CdkTreeModule, MatMenuModule, MatIconModule, MatTreeModule],
})
export class MaterialModule { }