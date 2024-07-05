import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chapter_3';
  count = {
    counter : 99,

  };
  isMessage = false;
  updateCount() : void {
    let c = this.count.counter+1;
    this.count = {
      counter : c,
    };

  }
  showMessage() : void {
    this.isMessage = true;
  }
}
