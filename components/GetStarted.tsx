const GetStarted = () => {
  return (
    <section className="bg-[var(--foreground)] text-[var(--secondary)] py-32 px-6 flex justify-center">

      <div className="flex flex-col items-center text-center max-w-2xl gap-6">

        <h1 className="text-4xl md:text-5xl font-semibold">
          Get started today.
        </h1>

        <p className="opacity-80 leading-relaxed text-lg">
          Ready to take the first step towards a happier, healthier you?
          Contact me to book your first session. I look forward to starting
          this therapeutic journey with you.
        </p>

        <button className="mt-15 px-8 py-3 border border-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-[var(--foreground)] transition-all duration-300 cursor-pointer">
        GET IN TOUCH →
        </button>

      </div>

    </section>
  );
};

export default GetStarted;
