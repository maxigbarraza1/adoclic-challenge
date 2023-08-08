import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngMaterialModule } from './material/ang-material/ang-material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AngMaterialModule],
  exports: [AngMaterialModule],
})
export class SharedModule {}
