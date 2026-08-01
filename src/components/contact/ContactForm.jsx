import { useForm } from 'react-hook-form';

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Portfolio contact request:', data);
    alert('Your message has been sent successfully.');
    reset();
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] bg-slate-900 p-8 text-white dark:bg-slate-800">
          <h2 className="text-3xl font-bold">Let’s talk</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">I’m available for frontend development roles, product design collaborations, and premium UI engineering engagements.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="grid gap-4">
            <input
              {...register('name', { required: 'Name is required' })}
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-500 dark:border-slate-600 dark:bg-slate-900"
              placeholder="Your Name"
            />
            {errors.name && <p className="text-sm text-rose-500">{errors.name.message}</p>}

            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email',
                },
              })}
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-500 dark:border-slate-600 dark:bg-slate-900"
              placeholder="Email Address"
            />
            {errors.email && <p className="text-sm text-rose-500">{errors.email.message}</p>}

            <textarea
              {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
              rows="6"
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-500 dark:border-slate-600 dark:bg-slate-900"
              placeholder="Tell me about your project"
            />
            {errors.message && <p className="text-sm text-rose-500">{errors.message.message}</p>}

            <button type="submit" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-amber-500 dark:text-slate-900 dark:hover:bg-amber-400">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
