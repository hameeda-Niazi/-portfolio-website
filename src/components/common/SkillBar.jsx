function SkillBar({ name, level }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <div className="mb-3 flex items-center justify-between gap-3 text-sm">
        <span className="font-semibold text-slate-800 dark:text-slate-100">{name}</span>
        <span className="text-slate-500 dark:text-slate-300">{level}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
        <div className="h-full rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

export default SkillBar;
