import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubUserService {

  public url = 'https://api.github.com/users';
  public token = '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';

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    const header = new HttpHeaders({
      Accept: 'application/vnd.github.v3+json',
      Authorization: 'token ' + this.token
    });
    return this.http.get(`${this.url}`, {
      headers: header
    }
    );
  }

}
