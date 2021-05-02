export class PageResponse {
  items: User[];
  total_count: number;
}

export class User {
  login: string;
  avatar_url: string;
  name: string;
  location: string;
  email: string;
  public_repos: number;
  created_at: Date;
  updated_at: Date;
  total_count: number;
}

export class Details {
  name: string;
  location: string;
  email: string;
  public_repos: number;
  created_at: Date;
  updated_at: Date;
}

export class Results {
  users: User[];
  count: number;
}
