import { Link } from 'react-router-dom';
import { MapPin, Briefcase, Calendar, TrendingUp } from 'lucide-react';
import { Job } from '../types/job';

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
  };

  return (
    <Link
      to={`/jobs/${job.id}`}
      className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-teal-500 transition-all duration-200"
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{job.jobTitle}</h3>
          <p className="text-teal-600 font-medium">{job.companyName}</p>
        </div>
        {job.salary && (
          <span className="text-sm font-semibold text-gray-900 bg-gray-100 px-3 py-1 rounded">
            {job.salary}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Briefcase className="w-4 h-4" />
          <span>{job.jobType}</span>
        </div>
        <div className="flex items-center gap-1">
          <TrendingUp className="w-4 h-4" />
          <span>{job.experienceLevel}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(job.postedDate)}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {job.skills.slice(0, 4).map((skill, index) => (
          <span
            key={index}
            className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded"
          >
            {skill}
          </span>
        ))}
        {job.skills.length > 4 && (
          <span className="text-xs text-gray-500">+{job.skills.length - 4} more</span>
        )}
      </div>
    </Link>
  );
};
