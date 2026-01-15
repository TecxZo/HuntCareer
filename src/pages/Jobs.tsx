import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { useJobs } from '../context/JobContext';
import { SearchBar } from '../components/SearchBar';
import { FilterPanel } from '../components/FilterPanel';
import { JobList } from '../components/JobList';
import { SearchFilters } from '../types/job';

export const Jobs = () => {
  const { jobs, loading } = useJobs();

  const [filters, setFilters] = useState<SearchFilters>({
    keyword: '',
    location: '',
    companyName: '',
    isRemote: false,
  });

  const uniqueLocations = useMemo(() => {
    return Array.from(new Set(jobs.map(job => job.location))).sort();
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const keyword = filters.keyword.toLowerCase();

      const matchesKeyword =
        !keyword ||
        job.jobTitle.toLowerCase().includes(keyword) ||
        job.companyName.toLowerCase().includes(keyword) ||
        job.skills.some(skill =>
          skill.toLowerCase().includes(keyword)
        );

      const matchesLocation =
        !filters.location || job.location === filters.location;

      const matchesRemote =
        !filters.isRemote ||
        job.location.toLowerCase().includes('remote');

      return matchesKeyword && matchesLocation && matchesRemote;
    });
  }, [jobs, filters]);

  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      {/* TOP BRAND BAR */}
      <div className="bg-white border-b sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/Icon.png"
                alt="HuntCareer"
                className="h-9 w-auto object-contain"
              />
            </Link>

            {/* Back Button */}
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-teal-600"
            >
              <ArrowLeft className="w-4 h-4" />
              Home
            </Link>
          </div>
        </div>
      </div>

      {/* SEARCH & FILTER */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Find Your Next Opportunity
          </h1>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <SearchBar
                value={filters.keyword}
                onChange={(value) =>
                  setFilters({ ...filters, keyword: value })
                }
              />
            </div>

            <FilterPanel
              filters={filters}
              onFilterChange={setFilters}
              uniqueLocations={uniqueLocations}
            />
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Showing <span className="font-medium">{filteredJobs.length}</span> of{' '}
            <span className="font-medium">{jobs.length}</span> jobs
          </p>
        </div>
      </div>

      {/* JOB LIST */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {loading ? (
          <div className="flex flex-col items-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-teal-600" />
            <p className="text-gray-500 mt-4">
              Loading opportunities...
            </p>
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No jobs found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filters
            </p>
          </div>
        ) : (
          <JobList jobs={filteredJobs} />
        )}
      </div>
    </div>
  );
};
