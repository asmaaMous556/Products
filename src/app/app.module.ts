import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzModalModule} from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';

import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzModalModule,
    NzInputModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    DatePipe,
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
