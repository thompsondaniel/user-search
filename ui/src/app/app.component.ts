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
  public page = 1;

  constructor(
    private githubUserService: GithubUserService
  ) {}

  ngOnInit() {
    this.users = this.githubUserService.getUsers();
  }

}
