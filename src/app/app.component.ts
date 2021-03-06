import { Component } from '@angular/core';
import { ThoughtsService } from './thoughts.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

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
    this.messages = this.thoughtsService.fetchMessages()
    this.authors = this.thoughtsService.fetchAuthors()
    this.dates = this.thoughtsService.fetchDates();
  }

  public message: String = "Twoja złota myśl..."
  public author: String = "anonim"
  public messages: Array<String> = []
  public authors: Array<String> = []
  public dates: Array<Date> = []

  public addThought(): void {
    this.messages.push(this.message)
    this.authors.push("~" + this.author)
    this.dates.push(new Date())
    this.thoughtsService.saveMessages(this.messages)
    this.thoughtsService.saveAuthors(this.authors)
    this.thoughtsService.saveDates(this.dates)
    this.message = "Twoja złota myśl..."
    this.author = "anonim"
  }

  public removeThought(i): void {
    this.messages.splice(i, 1)
    this.thoughtsService.saveMessages(this.messages)
    this.authors.splice(i,1)
    this.thoughtsService.saveAuthors(this.authors)
    this.dates.splice(i,1)
    this.thoughtsService.saveDates(this.dates)
  }

  public getDate(i: number): String{
    if(this.dates[i]){
      if(!this.dates[i-1] || (this.dates[i].toString().match(this.dates[i-1].toString()) === undefined))
        return this.dates[i].toString().slice(0,10);
    }
    return null
  }
}
