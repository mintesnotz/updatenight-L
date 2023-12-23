import { Component, HostListener } from '@angular/core'
import { ResorceComponent } from '../resorce/resorce.component'
import { AboutComponent } from '../about/about.component'
import { SliderComponent } from '../slider/slider.component'
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { BlogsComponent } from '../blogs/blogs.component'
@Component({

  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [ BlogsComponent,ResorceComponent, AboutComponent, SliderComponent]

})
export class HomeComponent {
  constructor (private readonly router: Router) {}

  @HostListener('window:scroll', ['$event'])
  onScroll (event: Event): void {
    // Add logic for animations based on scroll position
  }

  smoothScroll (target: string): void {
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  navigateTo (target: string): void {
    this.smoothScroll(target)
  }
}
