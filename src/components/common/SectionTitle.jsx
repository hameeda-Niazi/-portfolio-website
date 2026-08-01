function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
      <span className="inline-flex rounded-full bg-amber-50 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase dark:bg-amber-950/50 dark:text-amber-200">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">{subtitle}</p>
    </div>
  );
}

export default SectionTitle;
