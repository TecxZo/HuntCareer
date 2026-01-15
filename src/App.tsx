import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { JobProvider } from './context/JobContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Jobs } from './pages/Jobs';
import { JobDetails } from './pages/JobDetails';
import { About } from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <JobProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="jobs/:id" element={<JobDetails />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </JobProvider>
    </BrowserRouter>
  );
}

export default App;
