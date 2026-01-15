import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    `text-sm font-medium transition-colors ${
      isActive(path)
        ? 'text-teal-600'
        : 'text-gray-600 hover:text-teal-600'
    }`;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/Icon.png"
              alt="HuntCareer"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            <Link to="/" className={navLinkClass('/')}>Home</Link>
            <Link to="/jobs" className={navLinkClass('/jobs')}>Jobs</Link>
            <Link to="/about" className={navLinkClass('/about')}>About</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            <Link to="/" onClick={() => setOpen(false)} className={navLinkClass('/')}>
              Home
            </Link>
            <Link to="/jobs" onClick={() => setOpen(false)} className={navLinkClass('/jobs')}>
              Jobs
            </Link>
            <Link to="/about" onClick={() => setOpen(false)} className={navLinkClass('/about')}>
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
