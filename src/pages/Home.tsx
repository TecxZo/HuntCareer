import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useJobs } from '../context/JobContext';
import { JobCard } from '../components/JobCard';
import {
  ArrowRight,
  Briefcase,
  Zap,
  RefreshCw,
  Bell,
  Bot,
} from 'lucide-react';

export const Home = () => {
  const { jobs, loading } = useJobs();

  const latestJobs = useMemo(() => {
    return [...jobs]
      .sort(
        (a, b) =>
          new Date(b.postedDate).getTime() -
          new Date(a.postedDate).getTime()
      )
      .slice(0, 6);
  }, [jobs]);

  return (
    <div className="flex-1">
      {/* HERO */}
      <section className="bg-gradient-to-br from-teal-50 via-blue-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <img
            src="/Icon.png"
            alt="HuntCareer"
            className="mx-auto h-36 mb-6"
          />

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We Hunt Opportunities. <br />
            <span className="text-teal-600">You Build Your Career.</span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
            Discover fresh, verified job opportunities automatically collected
            from company career pages.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/jobs"
              className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-700 transition"
            >
              Find Jobs
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES – AI AUTOMATION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            How HuntCareer Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI SCRAPING */}
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-md transition">
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-teal-100 rounded-full mb-4">
                <Bot className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                AI Job Collection
              </h3>
              <p className="text-gray-600">
                Our AI automation continuously scans official company career
                pages and trusted platforms to discover new job postings.
              </p>
            </div>

            {/* EVERY 6 HOURS */}
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-md transition">
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-teal-100 rounded-full mb-4">
                <RefreshCw className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Updated Every 6 Hours
              </h3>
              <p className="text-gray-600">
                Job data is refreshed every 6 hours to remove expired listings
                and add the latest opportunities — so you never see outdated
                jobs.
              </p>
            </div>

            {/* NOTIFICATIONS */}
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-md transition">
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-teal-100 rounded-full mb-4">
                <Bell className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Instant Job Alerts
              </h3>
              <p className="text-gray-600">
                We’re building an Android app that will notify you instantly
                when new jobs are posted — so you don’t miss a single
                opportunity.
              </p>
            </div>
          </div>

          {/* PRE-REG CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              🚀 Android app launching soon.
              Pre-register now to get early access and job alerts.
            </p>

            <a
              href="https://tecxzo.info"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition"
            >
              Pre-Register on Tecxzo
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* LATEST JOBS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Latest Opportunities
            </h2>
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700"
            >
              View All Jobs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {loading ? (
            <div className="flex flex-col items-center py-20">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-teal-600"></div>
              <p className="text-gray-500 mt-4">Loading jobs...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don’t Miss New Opportunities
          </h2>
          <p className="text-teal-100 text-lg mb-8">
            Let HuntCareer find jobs for you — automatically.
          </p>
          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Explore Jobs
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};
