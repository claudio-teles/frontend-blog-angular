import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NewComponent } from './new/new.component';
import { PostviewingComponent } from './postviewing/postviewing.component';
import { PostnewsComponent } from './postnews/postnews.component';
import { SearchtytleComponent } from './searchtytle/searchtytle.component';
import { QuerytagComponent } from './querytag/querytag.component';
import { NewsupdateComponent } from './newsupdate/newsupdate.component';
import { DeletenewComponent } from './deletenew/deletenew.component';

export const routes: Routes = [
  {path: 'new', component: PostnewsComponent},
  {path: 'new/pages', component: PostviewingComponent},
  {path: 'new/title', component: SearchtytleComponent},
  {path: 'new/tag', component: QuerytagComponent},
  {path: 'new/:idNew', component: NewComponent},
  {path: 'new/:idNew/update', component: NewsupdateComponent},
  {path: 'new/:idNew/delete', component: DeletenewComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
