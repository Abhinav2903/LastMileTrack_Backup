import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStoreServiceService } from '../service/user-store-service.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { File } from '@ionic-native/file/ngx';
@Component({
  selector: 'app-start-tour',
  templateUrl: './start-tour.component.html',
  styleUrls: ['./start-tour.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  providers: [UserStoreServiceService, Storage,File],
})
export class StartTourComponent implements OnInit {
  public deliveryOption!: string;
  isButtonEnabled: boolean = false;

  constructor(
    private router: Router,
    private storeService: UserStoreServiceService
  ) {}
  ngOnInit() {}
  updateButtonStatus() {
    this.storeService.setDeliveryOption(this.deliveryOption);
    this.isButtonEnabled = !!this.deliveryOption;
  }

  startTour() {
    // Perform any necessary logic or data processing here
    console.log(this.deliveryOption);
    this.deliveryOption='';
    this.isButtonEnabled = false;
    // Redirect to the home screen
    this.router.navigate(['/home']);
  }
}
