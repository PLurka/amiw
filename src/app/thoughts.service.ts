import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThoughtsService {

  public date: Array<Date> = [];

  constructor() { }

  public saveAuthors(authors: Array<String>): void {
    localStorage.setItem("authorsList", JSON.stringify(authors))
  }

  public saveMessages(thoughts: Array<String>): void {
    localStorage.setItem("thoughtsList", JSON.stringify(thoughts))
  }

  public saveDates(dates: Array<Date>): void {
    localStorage.setItem("datesList", JSON.stringify(dates))
  }

  public fetchMessages(): Array<String> {
    let data = JSON.parse(localStorage.getItem("thoughtsList"))
    return data ? data : []
  }

  public fetchAuthors(): Array<String> {
    let data = JSON.parse(localStorage.getItem("authorsList"))
    return data ? data : []
  }

  public fetchDates(): Array<Date> {
    this.date = JSON.parse(localStorage.getItem("datesList"))
    return this.date ? this.date : []
  }

}
