import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, FooterComponent, SectionHeaderComponent],
  exports: [HeaderComponent, FooterComponent, SectionHeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
