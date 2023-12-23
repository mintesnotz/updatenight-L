import { Component, ElementRef, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {

  selectedSection: string | null = null; // Track the selected section
  selectedBook: string | null = null;
  articleSections = [
    {
      title: 'Introduction',
      content: `Content for the Introduction section.`,
    },
    {
      title: 'The Gospel Message',
      content: `Content for The Gospel Message section.`,
    },
    {
      title: 'Article 1',
      content: `Content for The Gospel Message section.`,
    },
    {
      title: 'Article 2',
      content: `Content for the Introduction section.`,
    },
    {
      title: 'Article 3',
      content: `Content for The Gospel Message section.`,
    },
    {
      title: 'Article 4',
      content: `Content for the Introduction section.`,
    },
    {
      title: 'Article 5',
      content: `Content for The Gospel Message section.`,
    },
    {
      title: 'Article 6',
      content: `Content for the Introduction section.`,
    },
    {
      title: 'Article 7',
      content: `Content for The Gospel Message section.`,
    },
    {
      title: 'Article 8',
      content: `Content for the Introduction section.`,
    },
    {
      title: 'Article 9',
      content: `Content for The Gospel Message section.`,
    },
    {
      title: 'Article 10',
      content: `Content for The Gospel Message section.`,
    },


    // Add more sections as needed
  ];bookList = [
    {
      title: 'Book 1',
      content: `Content for Book 1.`,
    },
    {
      title: 'Book 2',
      content: `Content for Book 2.`,
    },
    {
      title: 'Book 3',
      content: `Content for Book 3.`,
    },
    // Add more books as needed
  ];

  selectSection(sectionTitle: string): void {
    this.selectedSection = sectionTitle;
    this.selectedBook = null; // Clear selected book when selecting an article section
  }

  selectBook(bookTitle: string): void {
    this.selectedBook = bookTitle;
    this.selectedSection = null; // Clear selected article section when selecting a book
  }

  get selectedContent(): string | null {
    if (this.selectedSection) {
      const selectedArticle = this.articleSections.find(section => section.title === this.selectedSection);
      return selectedArticle ? selectedArticle.content : null;
    } else if (this.selectedBook) {
      const selectedBook = this.bookList.find(book => book.title === this.selectedBook);
      return selectedBook ? selectedBook.content : null;
    }
    return null;
  }
}
