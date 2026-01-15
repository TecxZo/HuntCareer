import { useParams, Link, useNavigate } from 'react-router-dom';
import { useJobs } from '../context/JobContext';
import { MapPin, Briefcase, Calendar, TrendingUp, ExternalLink, ArrowLeft } from 'lucide-react';
import { JobCard } from '../components/JobCard';
import { useMemo } from 'react';

export const JobDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { jobs, loading } = useJobs();
  const navigate = useNavigate();

  const job = useMemo(() => {
    return jobs.find((j) => j.id === id);
  }, [jobs, id]);

  const similarJobs = useMemo(() => {
    if (!job) return [];
    return jobs
      .filter((j) => j.id !== job.id && j.companyName === job.companyName)
      .slice(0, 3);
  }, [jobs, job]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
          <p className="text-gray-500 mt-4">Loading job details...</p>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-lg mb-4">Job not found</p>
          <Link
            to="/jobs"
            className="text-teal-600 hover:text-teal-700 font-medium"
          >
            Back to Jobs
          </Link>
        </div>
      </div>
    );
  }

  const handleApply = () => {
    if (job.applyLink.includes('@')) {
      window.location.href = `mailto:${job.applyLink}`;
    } else {
      window.open(job.applyLink, '_blank');
    }
  };

  return (
    <div className="flex-1 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.jobTitle}</h1>
              <p className="text-xl text-teal-600 font-medium mb-4">{job.companyName}</p>
            </div>
            {job.salary && (
              <div className="text-right">
                <div className="text-sm text-gray-500 mb-1">Salary</div>
                <div className="text-xl font-bold text-gray-900">{job.salary}</div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-b">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5" />
              <div>
                <div className="text-xs text-gray-500">Location</div>
                <div className="font-medium">{job.location}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Briefcase className="w-5 h-5" />
              <div>
                <div className="text-xs text-gray-500">Job Type</div>
                <div className="font-medium">{job.jobType}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <TrendingUp className="w-5 h-5" />
              <div>
                <div className="text-xs text-gray-500">Experience</div>
                <div className="font-medium">{job.experienceLevel}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <div>
                <div className="text-xs text-gray-500">Posted</div>
                <div className="font-medium">{formatDate(job.postedDate)}</div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Required Skills</h2>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-teal-50 text-teal-700 px-3 py-1 rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={handleApply}
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
          >
            Apply Now
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>

        {similarJobs.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              More jobs at {job.companyName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {similarJobs.map((similarJob) => (
                <JobCard key={similarJob.id} job={similarJob} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
