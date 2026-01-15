import { Link } from 'react-router-dom';
import {
  Search,
  RefreshCw,
  ShieldCheck,
  Target,
  Zap,
  Database,
} from 'lucide-react';

export const About = () => {
  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      {/* TOP BRAND BAR */}
      <div className="bg-white border-b sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/Icon.png"
              alt="TecxZo"
              className="h-9 w-auto object-contain"
            />
          </Link>

          <Link
            to="/"
            className="text-sm text-gray-600 hover:text-teal-600"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About TecxZo
          </h1>
          <p className="text-xl text-gray-600">
            We collect opportunities. You build your career.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            HuntCareer is a job discovery platform designed to simplify the job
            search process. Instead of forcing you to visit multiple websites
            every day, we bring relevant opportunities into one clean and
            searchable place.
          </p>
          <p className="text-lg text-gray-600">
            Our goal is simple: save your time, reduce noise, and help you focus
            on applying to the right jobs faster.
          </p>
        </div>
      </section>

      {/* HOW WE COLLECT JOBS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How We Collect & Update Jobs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Job Discovery
              </h3>
              <p className="text-gray-600">
                We collect job listings from trusted company career pages,
                hiring platforms, and public job sources across multiple
                industries.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Data Processing
              </h3>
              <p className="text-gray-600">
                Each job is structured with key details like role, company,
                skills, location, and posting date to ensure accurate searching
                and filtering.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Regular Updates
              </h3>
              <p className="text-gray-600">
                Job listings are refreshed frequently to remove expired roles
                and add new opportunities, keeping results relevant and fresh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY & TRUST */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Quality & Trust
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <ShieldCheck className="w-10 h-10 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Verified Sources
              </h3>
              <p className="text-gray-600">
                We prioritize listings from legitimate and reliable sources to
                reduce spam and misleading postings.
              </p>
            </div>

            <div className="text-center">
              <Target className="w-10 h-10 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Relevant Results
              </h3>
              <p className="text-gray-600">
                Smart filters help you quickly narrow down jobs that match your
                skills, location, and preferences.
              </p>
            </div>

            <div className="text-center">
              <Zap className="w-10 h-10 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Fast & Simple
              </h3>
              <p className="text-gray-600">
                No clutter, no distractions — just a fast and focused job
                search experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            Start Exploring Opportunities
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Discover jobs that match your skills and goals — all in one place.
          </p>
          <Link
            to="/jobs"
            className="inline-flex items-center bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Browse Jobs
          </Link>
        </div>
      </section>
    </div>
  );
};
