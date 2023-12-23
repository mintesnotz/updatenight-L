import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { ResorceComponent } from './resorce.component'

describe('ResorceComponent', () => {
  let component: ResorceComponent
  let fixture: ComponentFixture<ResorceComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResorceComponent]
    })
      .compileComponents()

    fixture = TestBed.createComponent(ResorceComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
