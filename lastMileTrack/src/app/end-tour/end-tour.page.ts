import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end-tour',
  templateUrl: './end-tour.page.html',
  styleUrls: ['./end-tour.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EndTourPage implements OnInit {

  constructor(private router: Router) { }
  experienceLevel!: string;
  isButtonEnabled: boolean = false;

  ngOnInit() {
  }
  updateButtonStatus() {
    this.isButtonEnabled = !!this.experienceLevel;
  }

  endTour() {
    // Perform any necessary logic or data processing here
    console.log(this.experienceLevel)
    // Redirect to the start-tour screen
    this.router.navigate(['/start-tour']);
  }
}
