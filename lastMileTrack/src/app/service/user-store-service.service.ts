import { Injectable } from '@angular/core';
import { Storage, StorageConfig } from '@ionic/storage-angular';
import { File } from '@ionic-native/file/ngx';

@Injectable({
  providedIn: 'root',
})
export class UserStoreServiceService {
  storageData: any = [];
  deliveryOptionValue: string = '';
  experienceLevel: string = '';
  taskListValue: Array<Object> = [];
  evel!: string;

  constructor(private storageVar: Storage, private file: File) {
    this.storageVar.create().then(() => console.log('storage Created'));
  }

  async setValue(key: string, value: any): Promise<void> {
    const storageConfig: StorageConfig = {
      name: 'LMT_DB',
      driverOrder: ['indexeddb', 'sqlite', 'websql'],
    };
    await this.storageVar.set(key, value);
  }

  async getValue(key: string) {
    return await this.storageVar.get(key);
  }

  async getAllData(): Promise<any[]> {
    const keys = await this.storageVar.keys();
    const promises = keys.map(async (key) => {
      const value = await this.storageVar.get(key);
      return { key, value };
    });
    return await Promise.all(promises);
  }

  async exportToCSV() {
    try {
      const keys = await this.storageVar.keys();
      this.storageData = await this.getAllData();
      console.log('KEYS', keys);
      // this.storageVar.remove("TaskList");
      // this.storageVar.remove("DeliveryOption");
      // Your logic to retrieve and process the storage data

      console.log(this.storageData);
      const csvData = this.convertToCSV(this.storageData);
      console.log('CSV DATA', csvData);

      const filePath = this.file.externalDataDirectory;
      const fileName = 'LMT.csv';
      console.log('FilePath', filePath);

      await this.file.writeFile(filePath, fileName, csvData, { replace: true });
      console.log('CSV file created successfully');
      this.storageVar.remove("TaskList");
      // Return a resolved promise to indicate successful file creation
      return Promise.resolve();
    } catch (err) {
      console.error('Error creating CSV file', err);
      // Return a rejected promise to handle the error
      return Promise.reject(err);
    }
  }

  convertToCSV(data: any[]): string {
    // Convert data to CSV format (implement your own logic here)
    let csvContent =
    'Year,Month,Date,Delivery Option,Experience Rating,Group ID,Name,Timer,Start Lat,Start Lon,End Lat,End Lon\n'; // Header row

    console.log('DATA:', data);

    data.forEach((entry) => {
      const { key, value } = entry;
      if (key == 'DeliveryOption' || key == 'TaskList') {
        console.log('Not Neede Keys');
      } else {
        const date = key.split(',')[0];
        const year = key.split(',')[1];

        // console.log('DATE:', date);
        // console.log('Year:', year);
        const matches = key.match(/^([A-Za-z]+)(\d+)/);
        const month = matches[1];
        const numdate = matches[2];
        // console.log('MONTH :', month );
        // console.log('numdate :', numdate);

        value.forEach(
          (item: {
            taskList: any;
            deliveryOption: any;
            experienceRating: any;
          }) => {
            const { taskList, deliveryOption, experienceRating } = item;

            console.log(taskList, deliveryOption, experienceRating);
            taskList.forEach(
              (task: {
                name: any;
                timer: any;
                startLat: any;
                startLon: any;
                endLat: any;
                endLon: any;
              }) => {
                const {
                  name,
                  timer,
                  startLat,
                  startLon,
                  endLat,
                  endLon,
                } = task;
                csvContent += `${year},${month},${numdate},${deliveryOption},${experienceRating},${name},${timer},${startLat},${startLon},${endLat},${endLon}\n`; // CSV row
              }
            );
          }
        );
      }


    });

    console.log("CSV Content",csvContent);
    return csvContent;
  }

  public async setDeliveryOption(deliveryOption: string) {
    this.deliveryOptionValue = deliveryOption;
    await this.storageVar.set('DeliveryOption', this.deliveryOptionValue);
    // console.log("this. set del",this.deliveryOptionValue)
  }

  // public async getDeliveryOption(){
  //   this.deliveryOptionValue =
  //   await this.storageVar.get("DeliveryOption");
  //   console.log("get del",this.deliveryOptionValue)
  //   return this.deliveryOptionValue;
  // }

  public async settaskList(task: any) {
    await this.storageVar.set('TaskList', task);
    // this.taskListValue ;
    // console.log("set task",this.taskListValue)
  }

  // public async gettaskList(){

  //   this.taskListValue = await this.storageVar.get("TaskList");
  //   console.log("get task",this.taskListValue)
  //   return this.taskListValue;
  // }
}
