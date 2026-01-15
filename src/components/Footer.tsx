export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} HuntCareer. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            We hunt opportunities. You build your career.
          </p>
        </div>
      </div>
    </footer>
  );
};
