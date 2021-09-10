import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PostnewsComponent } from './postnews/postnews.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostviewingComponent } from './postviewing/postviewing.component';
import { NewComponent } from './new/new.component';
import { SearchtytleComponent } from './searchtytle/searchtytle.component';
import { QuerytagComponent } from './querytag/querytag.component';

import { AppRoutingModule } from './app-routing.module';
import { NewsupdateComponent } from './newsupdate/newsupdate.component';
import { DeletenewComponent } from './deletenew/deletenew.component';

@NgModule({
  declarations: [
    AppComponent,
    PostnewsComponent,
    NavbarComponent,
    PostviewingComponent,
    NewComponent,
    SearchtytleComponent,
    QuerytagComponent,
    NewsupdateComponent,
    DeletenewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
