import { Component, OnInit } from '@angular/core'
import { RouterModule, Router } from '@angular/router'

import { MatCardModule } from '@angular/material/card'
import { CommonModule } from '@angular/common'
import { MatTableModule } from '@angular/material/table'
import { ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'


interface VideoData {
  id: string
  title: string
  description: string
  src: string
  hover?: boolean
}

interface Book {
  id: string
  title: string
  description: string
  src: string
  path: string
  hover?: boolean
}

@Component({
  selector: 'app-teaching',
  standalone: true,
  imports: [MatCardModule, CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {
  showLiveVideoSection = true;
  selectedItem: string = 'video';
  videoData: VideoData[] = [];
  books: Book[] = [];
  filteredVideoData: VideoData[] = [];
  filteredBooks: Book[] = [];
  searchForm: FormGroup;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly sanitizer: DomSanitizer,
    private readonly fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      searchQuery: [''],
    });

    // Subscribe to value changes of the searchQuery control
    this.searchForm.get('searchQuery')?.valueChanges.subscribe(() => {
      this.filterContent();
    });
  }

  ngOnInit(): void {
    // Initialize videoData and books with default values or empty arrays
    this.videoData = [
      {
        id: '1',
        title: 'The Main Titel everything about hardworking',
        description: 'My Sample video 1',
        src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: '2',
        title: 'The 3',
        description: 'My Sample video 2',
        src: 'https://www.youtube.com/embed/Km0DpfX5Q6k',
      },
      {
        id: '3',
        title: 'The 4 test video',
        description: 'My Sample video 1',
        src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: '4',
        title: 'The 5 test video',
        description: 'My Sample video 2',
        src: 'https://www.youtube.com/embed/Km0DpfX5Q6k',
      },
      {
        id: '5',
        title: 'The Main Titel everything about hardworking',
        description: 'My Sample video 1',
        src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: '6',
        title: 'The sixthest test video',
        description: 'My Sample video 2',
        src: 'https://www.youtube.com/embed/Km0DpfX5Q6k',
      },
      {
        id: '7',
        title: 'The sevent test video',
        description: 'My Sample video 1',
        src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: '8',
        title: 'The last Test Video',
        description: 'My Sample video 2',
        src: 'https://www.youtube.com/embed/Km0DpfX5Q6k',
      },

      // Add more video data as needed
    ];

    // Sample Books (PDFs) Data
    this.books = [
      {
        id: '1',
        title: 'Some Pdf Documents',
        description: '1 church church.',
        src: '',
        path: 'https://www.example.com/angular-best-practices.pdf',
      },
      {
        id: '2',
        title: 'Some Pdf Documents',
        description: '2 church church.',
        src: '',
        path: 'https://www.example.com/javascript-good-parts.pdf',
      },

      // Add more book data as needed
    ];

    this.filterContent(); // Call filterContent initially to show all content
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  chunkArray(array: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }

  filterContent(): void {
    const searchQuery = this.searchForm.get('searchQuery')?.value.toLowerCase();
  
    // Filter videos based on search query
    this.filteredVideoData = this.videoData.filter((video) =>
      video.title.toLowerCase().includes(searchQuery)
    );
  
    // Filter books based on search query
    this.filteredBooks = this.books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery)
    );
  
    // If the search query is empty, show all content
    if (searchQuery === '') {
      this.filteredVideoData = this.videoData;
      this.filteredBooks = this.books;
    }
  }
  
}