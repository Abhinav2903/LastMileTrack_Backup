import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TaskData } from '../constants/taskList.enum';
@Component({
  selector: 'app-start-tour',
  templateUrl: './start-tour.component.html',
  styleUrls: ['./start-tour.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
})
export class StartTourComponent  implements OnInit {

  deliveryOption!: string;
  isButtonEnabled: boolean = false;
  
  ngOnInit() {
  }



  constructor(private router: Router) {}

  updateButtonStatus() {
    this.isButtonEnabled = !!this.deliveryOption;
  }

  startTour() {
    // Perform any necessary logic or data processing here
    console.log(this.deliveryOption)
    
    // Redirect to the home screen
    this.router.navigate(['/home']);
  }
}
