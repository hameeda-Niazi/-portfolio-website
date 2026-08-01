function Button({ children, className = '', ...props }) {
  return (
    <button
      type="button"
      className={`rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-amber-500 dark:text-slate-900 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
