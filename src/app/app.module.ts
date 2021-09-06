import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostnewsComponent } from './postnews/postnews.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostviewingComponent } from './postviewing/postviewing.component';
import { NewComponent } from './new/new.component';
import { CommentComponent } from './comment/comment.component';
import { AuthorComponent } from './author/author.component';
import { ReaderComponent } from './reader/reader.component';
import { TagComponent } from './tag/tag.component';
import { SearchtytleComponent } from './searchtytle/searchtytle.component';
import { QuerytagComponent } from './querytag/querytag.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    PostnewsComponent,
    NavbarComponent,
    PostviewingComponent,
    NewComponent,
    CommentComponent,
    AuthorComponent,
    ReaderComponent,
    TagComponent,
    SearchtytleComponent,
    QuerytagComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
