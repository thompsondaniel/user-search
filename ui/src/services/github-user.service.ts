import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Details, PageResponse, User } from 'src/app/models/models';

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

  async getUsers(params): Promise<any[]> {
    const header = new HttpHeaders({
      Accept: 'application/vnd.github.v3+json',
      Authorization: 'token ' + this.token
    });
    const response = await this.http.get<PageResponse>(this.url, {
      headers: header,
      params
      }
    ).toPromise();
    response.items.forEach(async item => {
      const details = await this.getUserDetails(item.login);
      if (details) {
        item.name = details.name;
        item.location = details.location;
        item.email = details.email;
        item.public_repos = details.public_repos;
        item.created_at = details.created_at;
        item.updated_at = details.updated_at;
      }
    });
    return [response.items, response.total_count];
  }

  async getUserDetails(username): Promise<Details> {
    const header = new HttpHeaders({
      Accept: 'application/vnd.github.v3+json',
      Authorization: 'token ' + this.token
    });
    return await this.http.get<Details>(`${this.detailsUrl}/${username}`, {
      headers: header
      }
    ).toPromise();
  }

}
