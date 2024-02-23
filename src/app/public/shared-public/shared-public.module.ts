import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../public-community/footer/footer.component';
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from '../public-community/header/header.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [CommonModule, SharedModule],
  exports: [FooterComponent, HeaderComponent],
})
export class SharedPublicModule {}
