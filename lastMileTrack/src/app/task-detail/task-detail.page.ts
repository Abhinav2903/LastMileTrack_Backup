import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserStoreServiceService } from '../service/user-store-service.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { File } from '@ionic-native/file/ngx';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],  
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [UserStoreServiceService, Storage,File],
})
export class TaskDetailPage implements OnInit {
  startTime: number | undefined;
  endTime: number | undefined;
  elapsedTime: number | undefined;
  startLocation: string | undefined;
  endLocation: string | undefined;
  data: any;
  taskData: any = [];
  allData: any[] = [];
  showTask: any;
  showSpecificTask = false;
  taskListMain: any[]=[];

  constructor(
    private route: ActivatedRoute,
    private storeService: UserStoreServiceService
  ) {
    console.log('Constructior');
  }

  ngOnInit() {
    console.log('NGONINT');

    const taskData = history.state.taskData;
    const pageData = history.state.pageData;
    this.getTaskData(pageData, taskData);
  }

  async getTaskData(pageData: any, taskData: any) {
    this.allData = await this.storeService.getAllData()
    // .then((data) => {
    //   // console.log(data);
    //   this.allData = data;
    // });
    console.log("Data",this.allData);
    // this.allData.forEach(())

    this.allData.forEach((entry) => {
      const { key, value } = entry;
      if (key == 'DeliveryOption' || key == 'TaskList') {
        console.log('Not Neede Keys');
      } else {
        const date = key.split(',')[0];
        const year = key.split(',')[1];

        // console.log('DATE:', date);
        // console.log('Year:', year);
        // console.log('KEY :', key);
        // console.log('VALUE :', value);

        value.forEach(
          (item: {
            taskList: any;
            deliveryOption: any;
            experienceRating: any;
          }) => {
            const { taskList, deliveryOption, experienceRating } = item;

            console.log(taskList, deliveryOption, experienceRating);
            this.taskListMain.push(taskList);
            
            // taskList.forEach(
            //   (task: {
            //     groupId: any;
            //     name: any;
            //     isShowIcon: any;
            //     timer: any;
            //     startLat: any;
            //     startLon: any;
            //     endLat: any;
            //     endLon: any;
            //   }) => {
            //     const {
            //       groupId,
            //       name,
            //       isShowIcon,
            //       timer,
            //       startLat,
            //       startLon,
            //       endLat,
            //       endLon,
            //     } = task;
            //     // csvContent += `${date},${year},${deliveryOption},${experienceRating},${groupId},${name},${isShowIcon},${timer},${startLat},${startLon},${endLat},${endLon}\n`; // CSV row
            //   }
            // );
          }
        );
      }
      console.log(this.taskListMain);

    });

    if (pageData == true) {
      console.log('TRUE PAGE DATA');
    } else {
      this.showTask = taskData.name;
      this.showSpecificTask = true;
    }
  }
}
