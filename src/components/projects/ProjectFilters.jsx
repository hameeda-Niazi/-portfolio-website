function ProjectFilters({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelectCategory(category)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            activeCategory === category
              ? 'bg-slate-900 text-white dark:bg-amber-500 dark:text-slate-900'
              : 'border border-slate-300 text-slate-700 hover:border-amber-400 hover:text-amber-700 dark:border-slate-600 dark:text-slate-100'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default ProjectFilters;
