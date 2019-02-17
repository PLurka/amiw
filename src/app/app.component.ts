import { Component } from '@angular/core';
import { ThoughtsService } from './thoughts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    private thoughtsService: ThoughtsService
  ) {}

  private ngOnInit() {
    this.thoughts = this.thoughtsService.fetchThoughts()
  }

  public text: String = "szczerozłota myśl"
  public thoughts: Array<String> = []

  public addThought(): void {
    this.thoughts.push(this.text)
    this.text = ""
    this.thoughtsService.saveThoughts(this.thoughts)
  }

  public removeThought(i): void {
    this.thoughts.splice(i, 1)
    this.thoughtsService.saveThoughts(this.thoughts)
  }
}
