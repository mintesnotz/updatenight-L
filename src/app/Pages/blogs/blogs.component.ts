import { Component, type OnInit, OnDestroy } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import {  MediaObserver, type MediaChange, ScreenTypes } from '@angular/flex-layout'
import { Subscription } from 'rxjs'
import { FlexLayoutModule } from '@angular/flex-layout';
import { type Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { MatGridListModule } from '@angular/material/grid-list'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatGridListModule, CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})

export class BlogsComponent implements OnInit {
  public isHandset$: Observable<boolean> | undefined
  public cardData: any[] = [
    { photo: '../../../assets/dog.jpg', title: 'Test', description: 'The best card view ever' },

    { photo: '../../../assets/dog.jpg', title: 'Test1', description: 'The best card view ever' },
    { photo: '../../../assets/dog.jpg', title: 'Test2', description: 'The best card 78view ever' },
    { photo: '../../../assets/dog.jpg', title: 'Test3', description: 'The best card6 view ever' },
    { photo: '../../../assets/dog.jpg', title: 'Test4', description: 'The best ca5rd view ever' },
    { photo: '../../../assets/dog.jpg', title: 'Test5', description: 'The best c4ard view ever' },
    { photo: '../../../assets/dog.jpg', title: 'Test6', description: 'The best 3card view ever' },
    { photo: '../../../assets/dog.jpg', title: 'Test7', description: 'The best2 card view ever' },
    { photo: '../../../assets/dog.jpg', title: 'Test8', description: 'The bes1t card view ever' }

    // ... (other card data)
  ]
  public selectedCard: any;
  public filteredCardData: any[] = []
  public searchQuery: string = ''

  constructor (private readonly mediaObserver: MediaObserver) { }
  showCardDetails(card: any): void {
    this.selectedCard = card;
  }
  ngOnInit (): void {
    // Set the selected card initially to the first element in cardData
    this.selectedCard = this.cardData[0];
  
    this.isHandset$ = this.mediaObserver
      .asObservable()
      .pipe(
        map((changes: MediaChange[]) =>
          changes.some(
            (change: MediaChange) => change.mediaQuery === ScreenTypes.HANDSET
          )
        )
      )
  
    // Initialize filteredCardData with all card data
    this.filteredCardData = [...this.cardData]
  }

  filterCards (): void {
    if (this.searchQuery.trim() === '') {
      // If the search query is empty, show all cards
      this.filteredCardData = [...this.cardData]
    } else {
      // If there is a search query, filter cards based on the query
      this.filteredCardData = this.cardData.filter(card =>
        card.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          card.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  }

  clearSearch (): void {
    this.searchQuery = ''
    this.filteredCardData = [...this.cardData]
  }
}
