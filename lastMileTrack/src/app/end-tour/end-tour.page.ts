import { Component, Inject, OnInit } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { TaskData } from '../constants/taskList.enum';
import { UserStoreServiceService } from '../service/user-store-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { File } from '@ionic-native/file/ngx';
@Component({
  selector: 'app-end-tour',
  templateUrl: './end-tour.page.html',
  styleUrls: ['./end-tour.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [UserStoreServiceService, Storage,File],
})
export class EndTourPage implements OnInit {
  taskData: TaskData = {
    taskList: [],
    deliveryOption: 'option',
    experienceRating: 'rating',
  };
  
  constructor(private router: Router,private storeService:UserStoreServiceService,private alertController:AlertController,private storageVar:Storage) { }
  experienceLevel!: string;
  isButtonEnabled: boolean = false;
  taskList!:any;
  deliveryOption!:any;

  ngOnInit() {

  }

  updateButtonStatus() {
    this.dataValues();

  }

  async dataValues(){
    this.taskList = await this.storageVar.get("TaskList");
    this.deliveryOption = await this.storageVar.get("DeliveryOption");
    console.log("TASK LIST",this.taskList);
    console.log("DEL OPTION",this.deliveryOption);
    this.saveData(this.taskList,this.deliveryOption)
    this.isButtonEnabled = !!this.experienceLevel;
  }
  async endTour() {
    // Perform any necessary logic or data processing here
    console.log(this.experienceLevel)
    // Redirect to the start-tour screen

    const alert = await this.alertController.create({
      header: 'Export Data to CSV',
      message: 'Do you want to export data to CSV?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            // Handle "No" button click
            this.router.navigate(['/start-tour']);
          }
        },
        {
          text: 'Yes',
          handler: async () => {
            try {
              await this.storeService.exportToCSV();
              // await this.showCongratulationsAlert('CSV file created successfully');
              this.router.navigate(['/start-tour']);
              // Redirect the user to the start tour page
              // Implement your navigation logic here
            } catch (err) {
              // Handle the error if the file creation fails
              this.router.navigate(['/start-tour']);
            }
          }
        }
      ]
    });

    await alert.present();
    
  }


  async showCongratulationsAlert(message: string = 'Congratulations!'): Promise<HTMLIonAlertElement> {
    const alert = await this.alertController.create({
      header: 'Success',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
    setTimeout(() => {
      alert.dismiss();
    }, 1000);

    return alert;
  }

  async showErrorAlert(message: string = 'An error occurred.'): Promise<HTMLIonAlertElement> {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
    setTimeout(() => {
      alert.dismiss();
    }, 1000);

    return alert;
  }
  saveData(taskList: any,deliveryOption: any){
    this.taskData.experienceRating = this.experienceLevel;
    this.taskData.taskList = taskList;
    this.taskData.deliveryOption = deliveryOption;

    const dateKey = this.createDateKey();

    //remove this code and place at endtour
    this.storeService.getValue(dateKey).then((val) => {

      
      if (val != null) {
        val.push(this.taskData);
        this.storeService.setValue(dateKey, val);
      } else {
        this.storeService.setValue(dateKey, [this.taskData]);
      }
    });
  }

  createDateKey() {
    const currentDate = new Date();
    return currentDate
      .toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
      .replace(/ /g, '');
  }

}
