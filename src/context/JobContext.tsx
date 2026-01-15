import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Job } from '../types/job';
import { parseJobsCSV } from '../utils/csvParser';

interface JobContextType {
  jobs: Job[];
  loading: boolean;
  error: string | null;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider = ({ children }: { children: ReactNode }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoading(true);
        const parsedJobs = await parseJobsCSV('/jobs.csv');
        setJobs(parsedJobs);
        setError(null);
      } catch (err) {
        setError('Failed to load jobs. Please try again later.');
        console.error('Error loading jobs:', err);
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  return (
    <JobContext.Provider value={{ jobs, loading, error }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
};
