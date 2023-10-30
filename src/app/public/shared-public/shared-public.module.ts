import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../public-community/footer/footer.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, SharedModule],
  exports: [FooterComponent],
})
export class SharedPublicModule {}
