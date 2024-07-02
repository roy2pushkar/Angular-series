import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
 })
 export class AppComponent {
  title = 'chapter1';
  counter = 99; // API/ DB/CLOUD
  height = 150; // API
  w = 150; // api

   setDefault(){
       this.height = 150;
       this.w = 150;
       console.log('setDefault');
   }
 }