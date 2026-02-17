import Image from "next/image";

const Specialists = () => {
  return (
    <section className="py-20 min-h-fit md:min-h-[90vh]">

      <h1 className="fade-up text-4xl md:text-6xl text-center font-semibold">
        My Specialties
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-5 md:px-10 mt-10">

        {/* Card 1 */}
        <div className="bg-[var(--accent)] flex flex-col gap-3 px-6 py-4 border shadow-lg hover:shadow-xl transition-all">
          <h3 className="fade-up text-2xl font-semibold mb-4">Self-Esteem</h3>
          <p className="fade-up text-lg leading-relaxed">
            Building a strong sense of self-worth is key to living a fulfilled life.
          </p>
          <div className="mt-4 flex justify-center">
            <Image src="/sp-1.jpg" alt="Self Esteem" width={300} height={300} className="fade-up rounded-full" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[var(--accent)] flex flex-col gap-3 px-6 py-4 border shadow-lg hover:shadow-xl transition-all">
          <h3 className="fade-up text-2xl font-semibold mb-4">Relationships</h3>
          <p className="fade-up text-lg leading-relaxed">
            Navigating relationships can be complex. I'm here to guide you.
          </p>
          <div className="mt-4 flex justify-center">
            <Image src="/special-2.jpg" alt="Relationships" width={300} height={300} className="fade-up rounded-full" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[var(--accent)] flex flex-col gap-3 px-6 py-4 border shadow-lg hover:shadow-xl transition-all">
          <h3 className="fade-up text-2xl font-semibold mb-4">Burnout</h3>
          <p className="fade-up text-lg leading-relaxed">
            Together, we'll identify strategies to manage and prevent burnout.
          </p>
          <div className="mt-4 flex justify-center">
            <Image src="/sp-3.jpg" alt="Burnout" width={300} height={300} className="fade-up rounded-full" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Specialists;
