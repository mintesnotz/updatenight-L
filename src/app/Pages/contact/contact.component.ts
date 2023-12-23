import { CommonModule } from '@angular/common'
import { AboutComponent } from '../about/about.component'
import { Component, OnInit } from '@angular/core'
import {  ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms' // Import FormsModule
interface TeamMember {
  name: string
  role: string
  bio: string
}
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatButtonModule,MatFormFieldModule,FormsModule, AboutComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  companyName = 'Your Company'
  history = 'Company history goes here.'
  mission = 'Company mission goes here.'
  team: TeamMember[] = [
    { name: 'John Doe', role: 'CEO', bio: 'CEO Bio goes here.' },
    { name: 'Jane Doe', role: 'CTO', bio: 'CTO Bio goes here.' }
    // Add more team members as needed
  ]

  // userMessage = ''
  // chatResponses: string[] = []

  // constructor (private readonly chatbotService: ChatbotService) {}

  // sendMessage () {
  //   if (this.userMessage.trim() === '') {
  //     return
  //   }

  //   this.chatbotService.getChatbotResponse(this.userMessage).subscribe(
  //     (response: any) => { // Use 'any' as the response type for now
  //       this.chatResponses.push(`User: ${this.userMessage}`)
  //       this.chatResponses.push(`Chatbot: ${response.reply}`)
  //       this.userMessage = '' // Clear input
  //     },
  //     (error) => {
  //       console.error('Error communicating with chatbot service', error)
  //     }
  //   )
  // }
}
