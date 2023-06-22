import { NgModule } from '@angular/core';
import {Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    Storage // Add this line
    // ...
  ],
  providers: [
    // ...
  ],
  bootstrap: [
    // ...
  ]
})
export class AppModule { }
