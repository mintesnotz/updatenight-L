import { CommonModule } from '@angular/common'
import { Component, type AfterViewInit, type ElementRef, ViewChild, type OnInit } from '@angular/core'
import { Chart } from 'chart.js'

interface TeamMember {
  name: string
  role: string
  bio: string
}
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent implements AfterViewInit, OnInit {
  companyName = 'ACIFK/ Apostolic Church International Fellowship Of Kenya'
  history = 'For this cause left I thee in Crete, that thou shouldest set in order the things that are wanting, and ordain elders in every city as I had appointed thee.'
  mission = 'While the word “salvation” has several meanings, in this writing it is used to express the act of saving the human soul from sin and its effect. The Holy Bible in.'

  // Team data (replace with your actual data)
  team: TeamMember[] = [
    { name: 'Bishop ', role: 'CEO', bio: 'CEO Bio goes here.' },
    { name: 'Pastor', role: 'CTO', bio: 'CTO Bio goes here.' }
    // Add more team members as needed
  ]

  @ViewChild('dataChart') dataChartCanvas: ElementRef | undefined

  ngOnInit () {
    this.loadChart()
  }

  ngAfterViewInit () {
    this.loadChart()
  }

  private loadChart () {
    if (this.dataChartCanvas) {
      // Data Analysis Graph
      const dataChart = new Chart(this.dataChartCanvas.nativeElement, {
        type: 'bar',
        data: {
          labels: ['Category 1', 'Category 2', 'Category 3'],
          datasets: [{
            label: 'Data Analysis',
            data: [90, 50, 80], // Replace with your data
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      })
    }
  }
}
