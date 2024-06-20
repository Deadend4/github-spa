export interface RepoType {
  createdAt: string;
  description: string;
  disabled: boolean;
  github_id: number;
  id: number;
  language: string;
  name: string;
  owner_id: number;
  stars_count: number;
  url: string;
}

export interface ReposType {
  items: [RepoType];
  totalCount: number;
}

export interface Table {
  rows: RepoType[];
  totalCount: number | undefined;
}

export interface RepoTableProps {
  page: number;
  perPage: number;
}
