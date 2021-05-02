import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubUserService {

  public url = 'https://api.github.com/search/users';
  public detailsUrl = 'https://api.github.com/users';
  private token = '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';
  public search: string;

  constructor(
    private http: HttpClient
  ) {}

  getUsers(params) {
    const header = new HttpHeaders({
      Accept: 'application/vnd.github.v3+json',
      Authorization: 'token ' + this.token
    });
    return this.http.get(this.url, {
      headers: header,
      params
      }
    );
  }

  getUserDetails(username) {
    const header = new HttpHeaders({
      Accept: 'application/vnd.github.v3+json',
      Authorization: 'token ' + this.token
    });
    return this.http.get(`${this.detailsUrl}/${username}`, {
      headers: header
      }
    );
  }

}
