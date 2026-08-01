import { useEffect, useState } from 'react';
import AppRoutes from './routes/AppRoutes';
import Loader from './components/common/Loader';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 800);
    return () => window.clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <AppRoutes />
      <ScrollToTop />
    </>
  );
}

export default App;
