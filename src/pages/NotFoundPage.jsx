import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="rounded-[28px] border border-slate-200 bg-white p-10 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h1 className="text-6xl font-black text-slate-900 dark:text-white">404</h1>
        <p className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">Page not found</p>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">The page you’re looking for doesn’t exist or has moved.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white dark:bg-amber-500 dark:text-slate-900">Back Home</Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
