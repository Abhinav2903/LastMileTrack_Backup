import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { UserStoreServiceService } from './service/user-store-service.service';
import { Storage } from '@ionic/storage-angular';
import { File } from '@ionic-native/file/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule,IonicStorageModule],
  providers: [UserStoreServiceService, Storage,File],
})
export class AppComponent {
  constructor() {}
}
