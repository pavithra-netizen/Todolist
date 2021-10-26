import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { CommonService } from './common.service';


@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
