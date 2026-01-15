export interface Job {
  id: string;
  jobTitle: string;
  companyName: string;
  location: string;
  jobType: string;
  experienceLevel: string;
  skills: string[];
  salary: string;
  applyLink: string;
  postedDate: string;
}

export interface SearchFilters {
  keyword: string;
  location: string;
  companyName: string;
  isRemote: boolean;
}
