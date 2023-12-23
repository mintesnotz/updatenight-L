import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { BlogPost, ResorceComponent } from '../resorce/resorce.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent  implements OnInit {
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
    // Your blog posts here
  ];

  introSectionTitle: string = 'Blog Details';
  introSectionDescription: string =
    'Welcome to our blog where you can find interesting reads on various topics.';

  ngOnInit(): void {
    this.blogPostsEmitter.emit(this.blogPosts);
  }

  // ... rest of your component logic
}