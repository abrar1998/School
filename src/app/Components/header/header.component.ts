// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [],
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.css'
// })
// export class HeaderComponent {

// }


import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    const navbar = this.el.nativeElement.querySelector('.navbar');
    
    // Add scroll event listener
    window.addEventListener('scroll', () => {
      if (window.scrollY > 45) {
        this.renderer.addClass(navbar, 'sticky-top');
        this.renderer.addClass(navbar, 'shadow-sm');
      } else {
        this.renderer.removeClass(navbar, 'sticky-top');
        this.renderer.removeClass(navbar, 'shadow-sm');
      }
    });
  }
}
