import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngMaterialModule } from './material/ang-material/ang-material.module';
import { ErrorMessagePipe } from './pipes/error-message.pipe';

@NgModule({
  declarations: [ErrorMessagePipe],
  imports: [CommonModule, AngMaterialModule],
  exports: [AngMaterialModule, ErrorMessagePipe],
})
export class SharedModule {}
