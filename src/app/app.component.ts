import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello-world';
  color1 = '#0c1027';
  darkmode = true;

  changeColor() {
    if (this.darkmode) {
      this.color1 = '#a9a9a9';
      this.darkmode = false;
      console.log("change darkmode");
    } else { 
      this.color1 = '#0c1027';
      this.darkmode = true;
      console.log("undo darkmode");
    }
  }
}
