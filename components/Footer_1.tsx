const Footer_1 = () => {
  return (
    <footer className="bg-[var(--background)] text-[var(--foreground)] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

        <div className="space-y-3 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold">Lilac Template</h1>

          <p className="text-lg md:text-xl">
            123 Example Road<br />
            Minneapolis, MN
          </p>

          <p className="text-lg md:text-xl">
            <a href="mailto:email@example.com" className="underline hover:text-[var(--accent)]">email@example.com</a><br />
            <a href="tel:+15555555555" className="underline hover:text-[var(--accent)]">(555) 555-5555</a>
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 text-center md:text-left">

          <div className="md:pr-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-3">Hours</h2>
            <ul className="space-y-1 text-lg md:text-xl">
              <li>Monday – Friday</li>
              <li>10am – 6pm</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-3">Find</h2>
            <ul className="space-y-1 text-lg md:text-xl text-center md:text-right">
              <li><a href="/" className="underline hover:text-[var(--accent)]">Home</a></li>
              <li><a href="/contact" className="underline hover:text-[var(--accent)]">Contact</a></li>
              <li><a href="/blog" className="underline hover:text-[var(--accent)]">Blog</a></li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer_1;
