import { Component, OnInit } from '@angular/core';
import { GithubUserService } from 'src/services/github-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public users: any;
  public searchText: string;
  public isDirty: boolean;
  public page: number;
  public pageSize: number;
  public totalItems: number;

  constructor(
    private githubUserService: GithubUserService
  ) {}

  ngOnInit(): void {
    this.isDirty = false;
    this.page = 1;
    this.pageSize = 10;
  }

  getParams(search, page, pageSize) {
    const params = {};
    if (search) {
      params[`q`] = search + [`+in:name+in:email`];
    }
    if (page) {
      params[`page`] = page;
    }
    if (pageSize) {
      params[`per_page`] = pageSize;
    }
    return params;
  }

   getResults() {
    const params = this.getParams(this.searchText, this.page, this.pageSize);
    this.isDirty = true;
    // tslint:disable-next-line: deprecation
    this.githubUserService.getUsers(params).then(results => {
      this.users = results[0];
      this.totalItems = results[1];
    });
  }

  newPageChange(event) {
    this.page = event;
    this.getResults();
  }

}
