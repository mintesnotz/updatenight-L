import { Component, EventEmitter, Output, type OnInit } from '@angular/core'
import { SliderComponent } from '../slider/slider.component'
import { MenuComponent } from '../menu/menu.component'
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  image: string;
  date: string;
  comments: number;
  isHovered: boolean;
  content: string; // Add the 'content' property
}

@Component({
  selector: 'app-resorce',
  standalone: true,
  templateUrl: './resorce.component.html',
  styleUrl: './resorce.component.css',
  imports: [SliderComponent,MenuComponent,CommonModule,RouterModule]
})
export class ResorceComponent implements OnInit {
  
  @Output() blogPostsEmitter = new EventEmitter<BlogPost[]>();
  blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Detail About Jhon',
      category: 'The Word Is God',
      image: '../../assets/loveagan.png',
      date: 'March 15, 2023',
      comments: 5,
      isHovered: false,
      content: 'mather' // Add the 'content' property

    },
    {
      id: '2',
      title: 'Detail About The Holy Spirit',
      category: 'The Holy Spirit',
      image: '../../assets/loveagan.png',
      date: 'March 18, 2023',
      comments: 10,
      isHovered: false,
      content: 'mather' // Add the 'content' property

    },
    {
      id: '3',
      title: 'Detail About The Holy Spirit',
      category: 'The Holy Spirit',
      image: '../../assets/loveagan.png',
      date: 'March 18, 2023',
      comments: 10,
      isHovered: false,
      content: 'mather' // Add the 'content' property

    },
    // Add more blog posts as needed
  ];
   
  constructor(private router: Router) {}

  isHovered: boolean | null = null;

  setHoveredState(isHovered: boolean): void {
    this.isHovered = isHovered;
  }
  navigateToDetailView(postId: string): void {
    this.router.navigate(['/menu', postId]);
  }

  ngOnInit(): void {
    // Initialization logic if needed
    this.blogPostsEmitter.emit(this.blogPosts);

  }
}

