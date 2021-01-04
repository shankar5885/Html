import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { Sharedmodule } from '../shared/shared.module';

@NgModule({
    declarations:[
        ShoppingListComponent,
        ShoppingEditComponent,
    
    ],
    imports:[
        FormsModule,
        RouterModule.forChild([
            {path:'',component:ShoppingListComponent},
     ]),
      Sharedmodule
    ]
})
export class ShoppingListModule{}