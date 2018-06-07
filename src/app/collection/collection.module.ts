import { NgModule } from '@angular/core';
import { CollectionListComponent } from './collection-list.component';
import { CollectionDetailComponent } from './collection-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { CollectionGuardService } from './collection-guard.service';
import { CollectionService } from './product.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'collections' , component: CollectionListComponent},
      { path: 'collections/:id' , canActivate: [CollectionGuardService ], component: CollectionDetailComponent},
  ]),
    SharedModule
  ],
  declarations: [
    CollectionListComponent,
    CollectionDetailComponent,
    ConvertToSpacesPipe
  ],
  providers: [CollectionGuardService,
  CollectionService]
})
export class CollectionModule { }
