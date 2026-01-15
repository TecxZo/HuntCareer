import Papa from 'papaparse';
import { Job } from '../types/job';

export const parseJobsCSV = async (csvPath: string): Promise<Job[]> => {
  try {
    const response = await fetch(csvPath);
    const csvText = await response.text();

    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const jobs: Job[] = results.data.map((row: any, index: number) => ({
            id: `job-${index + 1}`,
            jobTitle: row['title'] || '',
            companyName: row['company'] || '',
            location: row['location'] || '',
            jobType: row['Job Type'] || '',
            experienceLevel: row['Experience Level'] || '',
            skills: row['key'] ? row['key'].split(',').map((s: string) => s.trim()) : [],
            salary: row['Salary'] || '',
            applyLink: row['url'] || '',
            postedDate: row['updatedAt'] || '',
          }));
          resolve(jobs);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  } catch (error) {
    console.error('Error parsing CSV:', error);
    return [];
  }
};
