import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerContainerComponent } from './drawer-container/drawer-container.component';



@NgModule({
  declarations: [DrawerContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [DrawerContainerComponent]
})
export class ArielleSidenavModule { }
