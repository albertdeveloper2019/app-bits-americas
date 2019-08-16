import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalRegisterComponent } from './modal-register/modal-register.component';
import { FormsModule }   from '@angular/forms';



@NgModule({
  declarations: [
    
    ModalRegisterComponent
  ],
  entryComponents: [
    ModalRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    ModalRegisterComponent
  ]
})
export class ComponentsModule { }
