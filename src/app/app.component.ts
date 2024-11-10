// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from "./Components/header/header.component";
// import { FooterComponent } from "./Components/footer/footer.component";

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, HeaderComponent, FooterComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'Proj';
// }

import { Component, AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Components/header/header.component";
import { FooterComponent } from "./Components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Proj';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.hideSpinner();
  }

  hideSpinner(): void {
    setTimeout(() => {
      const spinner = this.el.nativeElement.querySelector('#spinner');
      if (spinner) {
        this.renderer.removeClass(spinner, 'show');
      }
    }, 1);
  }
}
